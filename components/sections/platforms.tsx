import type { ReactNode } from "react";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";

type Platform = {
  name: string;
  logo: ReactNode;
  description: string;
};

const platforms: Platform[] = [
  {
    name: "Google",
    description: "Le pilier du référencement local et des avis clients.",
    logo: (
      <svg viewBox="0 0 48 48" role="img" aria-label="Google" className="h-7 w-7">
        <path
          fill="#EA4335"
          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
        />
        <path
          fill="#4285F4"
          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
        />
        <path
          fill="#FBBC05"
          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
        />
        <path
          fill="#34A853"
          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
        />
      </svg>
    ),
  },
  {
    name: "Trustpilot",
    description: "La référence pour la confiance à l'échelle nationale.",
    logo: (
      <svg viewBox="0 0 48 48" role="img" aria-label="Trustpilot" className="h-7 w-7">
        <circle cx="24" cy="24" r="24" fill="#00B67A" />
        <path
          fill="#fff"
          d="M19 13c-1.2 0-2.2 1-2.2 2.2 0 .3.1.7.2 1-2.1 1-3.6 3-3.6 5.5 0 3.3 2.7 6 6 6 .5 0 .9-.1 1.3-.2.4 1.9 2.1 3.3 4.1 3.3.7 0 1.3-.2 1.9-.5.3.1.7.2 1 .2 1.9 0 3.4-1.5 3.4-3.4 0-.4-.1-.8-.2-1.1.1-.2.2-.5.2-.8 0-1.1-2.1-2.1-4.5-2.1-.6 0-1.1.1-1.6.3.2-.5.4-.9.4-1.4 0-1.8-1.3-3.2-3.2-3.2z"
        />
      </svg>
    ),
  },
  {
    name: "Facebook",
    description: "Les avis de votre communauté et de vos abonnés.",
    logo: (
      <svg viewBox="0 0 48 48" role="img" aria-label="Facebook" className="h-7 w-7">
        <path
          fill="#1877F2"
          d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.979 48 24z"
        />
      </svg>
    ),
  },
  {
    name: "TripAdvisor",
    description: "Incontournable pour l'hôtellerie et la restauration.",
    logo: (
      <svg viewBox="0 0 48 48" role="img" aria-label="TripAdvisor" className="h-7 w-7">
        <circle cx="24" cy="24" r="24" fill="#34E0A1" />
        <g fill="#fff">
          <circle cx="19" cy="21" r="4.5" />
          <circle cx="29" cy="21" r="4.5" />
          <path d="M24 26l-3.5 5h7z" />
        </g>
      </svg>
    ),
  },
  {
    name: "Yelp",
    description: "Très utilisé par la clientèle locale.",
    logo: (
      <svg viewBox="0 0 48 48" role="img" aria-label="Yelp" className="h-7 w-7">
        <path
          fill="#D32323"
          d="M24 3l4.5 13.5L42 21l-13.5 4.5L24 39l-4.5-13.5L6 21l13.5-4.5z"
        />
      </svg>
    ),
  },
];

export default function Platforms() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900">
            Collectez des avis sur toutes les plateformes
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Google, Trustpilot, Facebook, TripAdvisor... centralisez votre e-réputation en un seul endroit. Quelle que soit votre secteur, vos clients laissent des avis là où ils ont l'habitude de chercher — et vous pilotez tout depuis un unique tableau de bord.
          </p>
        </AnimatedSection>

        <div className="mt-10 flex flex-wrap items-stretch justify-center gap-6">
          {platforms.map((p, i) => (
            <AnimatedSection key={p.name} delay={i * 0.05}>
              <div className="flex h-36 w-44 flex-col items-center justify-center gap-2 rounded-xl bg-white px-4 text-center shadow-sm ring-1 ring-slate-200">
                {p.logo}
                <span className="text-sm font-semibold text-slate-600">{p.name}</span>
                <span className="text-xs text-slate-400">{p.description}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Demander un devis
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
