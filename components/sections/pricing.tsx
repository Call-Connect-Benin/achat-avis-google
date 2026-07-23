import { Check } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import SectionHeading from "@/components/section-heading";
import { createCheckout } from "@/app/stripe/actions";
import { plans } from "@/lib/site";

export default function Pricing() {
  return (
    <section id="tarifs" className="mx-auto max-w-6xl px-4 py-10">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Tarifs"
          title="Des forfaits simples et transparents"
          subtitle="Sans engagement, sans frais cachés. Annulez à tout moment."
        />
      </AnimatedSection>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <AnimatedSection key={plan.id} delay={i * 0.1}>
            <div
              className={`relative flex flex-col rounded-3xl p-8 transition hover:-translate-y-0.5 ${
                plan.popular
                  ? "bg-[#0d0d12] ring-1 ring-green-300 shadow-sm"
                  : "bg-lime-400/[0.06]"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime-400/[0.06]0 px-3 py-1 text-xs font-semibold text-white">
                  Le plus populaire
                </span>
              )}
              <h3 className="text-lg font-semibold text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white">
                  {plan.priceMonthly} €
                </span>
                <span className="text-sm text-slate-400">/ mois</span>
              </div>
              <p className="mt-1 text-xs text-slate-400">
                 ou {plan.priceYearly} € / an
              </p>

              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-300">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-lime-300"
                      strokeWidth={2}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <form action={createCheckout} className="mt-8">
                <input type="hidden" name="plan" value={plan.id} />
                <button
                  type="submit"
                  className={`w-full rounded-full px-5 py-3 text-center text-sm font-semibold transition-colors ${
                    plan.popular
                      ? "bg-lime-400/[0.06]0 text-white hover:bg-green-600"
                      : "border border-lime-400/35 bg-[#0d0d12] text-slate-200 hover:bg-lime-400/[0.06]"
                  }`}
                >
                  {plan.cta}
                </button>
              </form>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
