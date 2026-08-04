import nodemailer from "nodemailer";

// Destinataires de tous les formulaires de contact (surchargeable via CONTACT_TO).
export const CONTACT_RECIPIENTS = (
  process.env.CONTACT_TO ||
  "albert.lanne@gmail.com,ekomedia.fr@gmail.com,mouhsine.rasfa@gmail.com"
)
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

export type ContactEmailInput = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  source?: string;
};

let cached: nodemailer.Transporter | null = null;

function getTransport(): nodemailer.Transporter | null {
  if (cached) return cached;
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD || process.env.SMTP_PASS;
  if (!host || !user || !pass) return null;
  const port = Number(process.env.SMTP_PORT || 587);
  cached = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: { user, pass },
  });
  return cached;
}

// Relais SMTP classique vers les 3 boîtes. Repli gracieux si non configuré.
export async function sendContactEmail(input: ContactEmailInput) {
  const transport = getTransport();
  const from = process.env.MAIL_FROM || process.env.SMTP_USER || "no-reply@achat-avis-google.com";

  const text = [
    `Source : ${input.source || "formulaire de contact"}`,
    `Nom : ${input.name}`,
    `Email : ${input.email}`,
    input.phone ? `Téléphone : ${input.phone}` : null,
    ``,
    `Message :`,
    input.message,
  ]
    .filter(Boolean)
    .join("\n");

  if (!transport) {
    console.warn("[email] SMTP non configuré : message non envoyé.", { to: CONTACT_RECIPIENTS });
    return { sent: false };
  }

  try {
    await transport.sendMail({
      from,
      to: CONTACT_RECIPIENTS,
      replyTo: input.email,
      subject: `Nouvelle demande de ${input.name} — Achat Avis Google`,
      text,
    });
    return { sent: true };
  } catch (e) {
    console.error("[email] échec envoi SMTP :", e);
    return { sent: false };
  }
}
