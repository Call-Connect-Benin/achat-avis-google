"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { subscribeNewsletter, type NewsletterState } from "@/app/newsletter/actions";

const initial: NewsletterState = { ok: false, message: "" };

export default function NewsletterForm() {
  const [state, formAction, pending] = useActionState(
    subscribeNewsletter,
    initial,
  );

  return (
    <form action={formAction} className="mt-3 flex flex-col gap-2 sm:flex-row">
      <input
        type="email"
        name="email"
        required
        placeholder="votre@email.com"
        className="w-full rounded-lg border border-lime-400/25 bg-[#0d0d12] px-3 py-2 text-sm focus:border-green-400 focus:outline-none focus:ring-1 focus:ring-green-300 sm:max-w-md"
      />
      <button
        type="submit"
        disabled={pending}
        className="shrink-0 rounded-lg bg-green-600 p-2.5 text-white transition-colors hover:bg-green-700 disabled:opacity-60"
        aria-label="S'inscrire"
      >
        {pending ? (
          <span className="block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
        ) : (
          <Send className="h-4 w-4" />
        )}
      </button>
      {state.message && (
        <p
          className={`sm:hidden ${state.ok ? "text-lime-300" : "text-red-700"} text-xs`}
          role="status"
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
