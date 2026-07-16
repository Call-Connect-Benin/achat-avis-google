import { Resend } from "resend";

export type ContactEmailInput = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function sendContactEmail(input: ContactEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn(
      "[email] RESEND_API_KEY manquant : email non envoyé (données conservées localement).",
    );
    return { sent: false };
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL ?? "contact@achat-avis-google.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Achat Avis Google <onboarding@resend.dev>";

  const text = [
    `Nouvelle demande de contact`,
    ``,
    `Nom : ${input.name}`,
    `Email : ${input.email}`,
    input.phone ? `Téléphone : ${input.phone}` : null,
    ``,
    `Message :`,
    input.message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: input.email,
      subject: `Nouvelle demande de ${input.name}`,
      text,
    });

    if (error) {
      console.error("[email] échec envoi Resend :", error);
      return { sent: false, error };
    }
    return { sent: true };
  } catch (e) {
    console.error("[email] exception envoi Resend :", e);
    return { sent: false, error: e };
  }
}
