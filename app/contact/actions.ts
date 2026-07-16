"use server";

import { mkdir, appendFile } from "fs/promises";
import path from "path";
import { sendContactEmail } from "@/lib/email";

export type ContactState = {
  ok: boolean;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\d\s-]{6,}$/;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const subject = String(formData.get("subject") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const consent = formData.get("consent") === "on";

  if (!subject || !name || !EMAIL_RE.test(email) || !message) {
    return {
      ok: false,
      message: "Veuillez remplir le sujet, le nom, un email valide et votre message.",
    };
  }
  if (phone && !PHONE_RE.test(phone)) {
    return { ok: false, message: "Le numéro de téléphone est invalide." };
  }
  if (!consent) {
    return {
      ok: false,
      message: "Veuillez accepter la politique de confidentialité.",
    };
  }

  const entry = {
    subject,
    name,
    email,
    phone,
    message,
    at: new Date().toISOString(),
  };

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "contacts.jsonl"),
      JSON.stringify(entry) + "\n",
      "utf8",
    );
  } catch {
    return {
      ok: false,
      message: "Une erreur est survenue. Veuillez réessayer plus tard.",
    };
  }

  await sendContactEmail({
    name,
    email,
    phone,
    message,
  });

  return {
    ok: true,
    message: "Merci ! Votre demande a bien été transmise. Nous vous répondrons sous 24 h.",
  };
}
