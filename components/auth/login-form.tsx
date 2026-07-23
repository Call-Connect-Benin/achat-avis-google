"use client";

import { useActionState } from "react";
import { login, type AuthState } from "@/app/auth/actions";

const initial: AuthState = { ok: false, message: "" };

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initial);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-200">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-white/20 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-200">
          Mot de passe
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mt-1 w-full rounded-lg border border-white/20 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
        />
      </div>
      {state.message && (
        <p className="text-sm text-red-600" role="status">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 disabled:opacity-60"
      >
        {pending ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}
