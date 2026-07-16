"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";

const PRICES: Record<string, { amount: number; name: string }> = {
  starter: { amount: 23500, name: "Starter" },
  pro: { amount: 29900, name: "Professionnel" },
  entreprise: { amount: 49900, name: "Entreprise" },
};

export async function createCheckout(formData: FormData) {
  const plan = String(formData.get("plan") ?? "starter");
  const config = PRICES[plan] ?? PRICES.starter;
  const key = process.env.STRIPE_SECRET_KEY;

  if (!key) {
    redirect("/contact?stripe=manquant");
  }

  const stripe = new Stripe(key);
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://achat-avis-google.com";

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: { name: `Achat Avis Google — ${config.name}` },
          unit_amount: config.amount,
          recurring: { interval: "month" },
        },
        quantity: 1,
      },
    ],
    success_url: `${site}/espace?succes=1`,
    cancel_url: `${site}/tarifs?annule=1`,
  });

  redirect(session.url ?? "/tarifs");
}
