"use client";

import { useState } from "react";
import Link from "next/link";
import { plans } from "@/lib/site";

type Form = {
  ticket: number;
  customers: number;
  reviews: number;
  rating: number;
};

const eur = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const num = new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 });

export default function RoiCalculator() {
  const [form, setForm] = useState<Form>({
    ticket: 100,
    customers: 100,
    reviews: 30,
    rating: 4.2,
  });

  const set = <K extends keyof Form>(k: K, v: Form[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  // Modèle pédagogique : la force de la e-réputation augmente le taux de
  // transformation de la fiche. Le gain est plafonné pour rester réaliste.
  const baseConv = 0.05;
  const volumeFactor = Math.min(form.reviews / 150, 1) * 0.6;
  const ratingFactor = (form.rating / 5) * 0.4;
  const uplift = Math.min(volumeFactor + ratingFactor, 1);
  const extraCustomers = Math.round(form.customers * baseConv * uplift);
  const extraRevenue = Math.round(extraCustomers * form.ticket);
  const yearlyRevenue = extraRevenue * 12;

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Calculateur de ROI</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Combien vos avis peuvent vous rapporter
        </h2>
        <p className="mt-4 text-slate-300">
          Une bonne e-réputation transforme les visiteurs en clients. Estimez le
          gain mensuel généré par une fiche active et bien notée.
        </p>
      </div>

      <div className="mt-6 grid gap-6 rounded-3xl border border-white/10 bg-[#0d0d12] p-6 shadow-sm sm:p-10 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <label htmlFor="ticket" className="block text-sm font-medium text-slate-200">
              Ticket moyen par client : {eur.format(form.ticket)}
            </label>
            <input
              id="ticket"
              type="range"
              min={10}
              max={500}
              step={5}
              value={form.ticket}
              onChange={(e) => set("ticket", Number(e.target.value))}
              className="mt-2 w-full accent-lime-600"
            />
          </div>

          <div>
            <label htmlFor="customers" className="block text-sm font-medium text-slate-200">
              Clients acquis par mois : {num.format(form.customers)}
            </label>
            <input
              id="customers"
              type="range"
              min={10}
              max={1000}
              step={10}
              value={form.customers}
              onChange={(e) => set("customers", Number(e.target.value))}
              className="mt-2 w-full accent-lime-600"
            />
          </div>

          <div>
              <label htmlFor="reviews" className="block text-sm font-medium text-slate-200">
                Avis collectés à ce jour : {num.format(form.reviews)}
              </label>
              <input
                id="reviews"
                type="range"
                min={0}
                max={150}
                step={5}
                value={form.reviews}
                onChange={(e) => set("reviews", Number(e.target.value))}
                className="mt-2 w-full accent-lime-600"
              />
              <p className="mt-1 text-xs text-slate-400">
                Nos offres livrent de 30 à 90 avis authentiques.
              </p>
          </div>

          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-slate-200">
              Note moyenne actuelle : {form.rating.toFixed(1)} / 5
            </label>
            <input
              id="rating"
              type="range"
              min={0}
              max={5}
              step={0.1}
              value={form.rating}
              onChange={(e) => set("rating", Number(e.target.value))}
              className="mt-2 w-full accent-lime-600"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 rounded-2xl bg-yellow-300/[0.06] p-8 text-center">
          <div>
            <p className="text-sm text-slate-300">Clients supplémentaires / mois</p>
            <p className="mt-1 text-4xl font-bold text-white">
              +{num.format(extraCustomers)}
            </p>
          </div>
          <div className="h-px w-full bg-lime-200" />
          <div>
            <p className="text-sm text-slate-300">Chiffre d'affaires en plus / mois</p>
            <p className="mt-1 text-4xl font-bold text-lime-700">
              {eur.format(extraRevenue)}
            </p>
          </div>
          <div>
            <p className="text-sm text-slate-300">Sur un an</p>
            <p className="mt-1 text-2xl font-semibold text-white">
              {eur.format(yearlyRevenue)}
            </p>
          </div>
          <p className="text-xs text-slate-400">
            Estimation pédagogique basée sur un taux de transformation moyen.
            Résultats indicatifs, non contractuels.
          </p>
          <Link
            href="/tarifs"
            className="mt-1 inline-flex items-center justify-center rounded-full bg-lime-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-lime-700"
          >
            Voir les offres ({eur.format(plans[0].priceMonthly)} €/mois)
          </Link>
        </div>
      </div>
    </section>
  );
}
