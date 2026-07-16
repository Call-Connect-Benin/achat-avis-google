"use server";

import { mkdir, appendFile } from "fs/promises";
import path from "path";

export type NewsletterState = { ok: boolean; message: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "Veuillez saisir un email valide." };
  }

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "newsletter.jsonl"),
      JSON.stringify({ email, at: new Date().toISOString() }) + "\n",
      "utf8",
    );
  } catch {
    return { ok: false, message: "Une erreur est survenue. Réessayez plus tard." };
  }

  return { ok: true, message: "Merci, votre inscription est confirmée." };
}
