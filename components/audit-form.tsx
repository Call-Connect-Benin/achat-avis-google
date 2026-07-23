"use client";

import { useState } from "react";

type Form = {
  name: string;
  platform: string;
  rating: number;
  reviews: number;
  responds: string;
};

const platforms = ["Google", "Trustpilot", "Facebook", "Pages Jaunes"];

export default function AuditForm() {
  const [form, setForm] = useState<Form>({
    name: "",
    platform: "Google",
    rating: 4.5,
    reviews: 12,
    responds: "partiel",
  });

  const set = <K extends keyof Form>(k: K, v: Form[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const ratingScore = (form.rating / 5) * 40;
  const volumeScore = Math.min(form.reviews / 100, 1) * 30;
  const responseScore =
    form.responds === "oui" ? 20 : form.responds === "partiel" ? 10 : 0;
  const nameScore = form.name.trim() ? 10 : 0;
  const score = Math.round(
    ratingScore + volumeScore + responseScore + nameScore,
  );

  const checks = [
    {
      ok: form.rating >= 4.5,
      label: "Viser une note moyenne d'au moins 4,5/5",
    },
    {
      ok: form.reviews >= 50,
      label: "Atteindre un volume d'au moins 50 avis authentiques",
    },
    {
      ok: form.responds === "oui",
      label: "Répondre à 100 % des avis, positifs comme négatifs",
    },
    {
      ok: form.reviews > 0,
      label: "Maintenir une collecte régulière et naturelle",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-200">
            Nom de l'entreprise
          </label>
          <input
            id="name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Ex. Plomberie Dupont"
            className="mt-1 w-full rounded-lg border border-white/20 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
          />
        </div>

        <div>
          <label htmlFor="platform" className="block text-sm font-medium text-slate-200">
            Plateforme principale
          </label>
          <select
            id="platform"
            value={form.platform}
            onChange={(e) => set("platform", e.target.value)}
            className="mt-1 w-full rounded-lg border border-white/20 bg-[#0d0d12] px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
          >
            {platforms.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
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
            className="mt-2 w-full accent-slate-900"
          />
        </div>

        <div>
          <label htmlFor="reviews" className="block text-sm font-medium text-slate-200">
            Nombre d'avis actuel : {form.reviews}
          </label>
          <input
            id="reviews"
            type="range"
            min={0}
            max={200}
            step={1}
            value={form.reviews}
            onChange={(e) => set("reviews", Number(e.target.value))}
            className="mt-2 w-full accent-slate-900"
          />
        </div>

        <div>
          <label htmlFor="responds" className="block text-sm font-medium text-slate-200">
            Répondez-vous aux avis ?
          </label>
          <select
            id="responds"
            value={form.responds}
            onChange={(e) => set("responds", e.target.value)}
            className="mt-1 w-full rounded-lg border border-white/20 bg-[#0d0d12] px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
          >
            <option value="oui">Oui, systématiquement</option>
            <option value="partiel">Partiellement</option>
            <option value="non">Non</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="rounded-2xl bg-[#111118] p-6 text-center">
          <p className="text-sm text-slate-400">Score de maturité e-réputation</p>
          <p className="mt-2 text-5xl font-bold text-white">{score}/100</p>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-slate-900 transition-all"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>

        <ul className="space-y-2 rounded-2xl bg-[#0d0d12] p-6 ring-1 ring-white/10">
          {checks.map((c) => (
            <li key={c.label} className="flex items-start gap-2 text-sm">
              <span
                className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full text-[10px] ${
                  c.ok ? "bg-slate-900 text-white" : "bg-slate-200 text-slate-400"
                }`}
              >
                {c.ok ? "✓" : "!"}
              </span>
              <span className="text-slate-300">{c.label}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs text-slate-400">
          Estimateur pédagogique à partir de vos saisies. Il ne constitue pas un
          audit officiel et ne remplace pas les données des plateformes.
        </p>
      </div>
    </div>
  );
}
