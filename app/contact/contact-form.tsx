"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "./actions";
import { site } from "@/lib/site";

const initial: ContactState = { ok: false, message: "" };

const subjects = [
  "Demande commerciale",
  "Support technique",
  "Demande de démo",
  "Partenariat",
  "Autre",
];

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initial);

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-200">
          Sujet *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="mt-1 w-full rounded-lg border border-white/20 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
        >
          <option value="">Sélectionnez un sujet</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-200">
            Nom complet *
          </label>
          <input
            id="name"
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-white/20 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-200">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-lg border border-white/20 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
            placeholder="vous@entreprise.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-200">
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="mt-1 w-full rounded-lg border border-white/20 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
          placeholder={site.company.phoneDisplay}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-200">
          Votre message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-lg border border-white/20 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
          placeholder="Décrivez votre besoin en e-réputation…"
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-slate-300">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 rounded border-white/20 text-slate-200 focus:ring-slate-400"
        />
        <span>
          J'accepte que mes données soient traitées conformément à la{" "}
          <a href="/confidentialite" className="text-slate-200 underline">
            politique de confidentialité
          </a>
          .
        </span>
      </label>

      {state.message && (
        <p
          className={`rounded-lg px-4 py-3 text-sm ${
            state.ok
              ? "bg-lime-400/[0.06] text-lime-300"
              : "bg-yellow-300/[0.05] text-red-800"
          }`}
          role="status"
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-lime-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-lime-700 disabled:opacity-60"
      >
        {pending ? "Envoi…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
