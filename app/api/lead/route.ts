import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: string; name?: string; message?: string; source?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }
  const email = (body.email ?? "").trim();
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Email invalide." }, { status: 400 });
  }
  await sendContactEmail({
    name: body.name || "Prospect (pop-up de sortie)",
    email,
    message: body.message || "Souhaite être recontacté — pop-up de sortie.",
  });
  return NextResponse.json({ success: true }, { status: 201 });
}
