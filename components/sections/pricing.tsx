import { Check } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import SectionHeading from "@/components/section-heading";
import { createCheckout } from "@/app/stripe/actions";
import { plans } from "@/lib/site";

export default function Pricing() {
  return (
    <section id="tarifs" className="mx-auto max-w-6xl px-4 py-20">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Tarifs"
          title="Des forfaits simples et transparents"
          subtitle="Sans engagement, sans frais cachés. Annulez à tout moment."
        />
      </AnimatedSection>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <AnimatedSection key={plan.id} delay={i * 0.1}>
            <div
              className={`relative flex flex-col rounded-3xl p-8 transition hover:-translate-y-0.5 ${
                plan.popular
                  ? "bg-white ring-1 ring-blue-300 shadow-sm"
                  : "bg-blue-50"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                  Le plus populaire
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900">
                  {plan.priceMonthly} €
                </span>
                <span className="text-sm text-slate-500">/ mois</span>
              </div>
              <p className="mt-1 text-xs text-slate-500">
                 ou {plan.priceYearly} € / an
              </p>

              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-600">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-blue-700"
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
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "border border-blue-300 bg-white text-slate-700 hover:bg-blue-50"
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
