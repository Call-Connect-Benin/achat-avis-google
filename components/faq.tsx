import AnimatedSection from "@/components/animated-section";
import SectionHeading from "@/components/section-heading";

const faqs = [
  {
    q: "Achat Avis Google vend-il des avis fictifs ?",
    a: "Non. Nous ne fabriquons ni ne vendons d'avis. Notre plateforme aide uniquement à collecter les avis de vos vrais clients, après une prestation réelle, via un lien ou un QR code.",
  },
  {
    q: "Est-ce conforme aux règles de Google et Trustpilot ?",
    a: "Oui. Nous respectons les règles des plateformes et la législation sur les avis de consommateurs (France et UE). Chaque avis provient d'un client authentique.",
  },
  {
    q: "Comment mes clients laissent-ils un avis ?",
    a: "Vous partagez un lien personnalisé ou un QR code. Vos clients sont redirigés vers votre fiche Google, Trustpilot ou Facebook pour publier leur avis.",
  },
  {
    q: "Combien coûte le service ?",
    a: "Des forfaits sans engagement démarrent à 235 €/mois, avec un essai gratuit. Aucune carte bancaire n'est demandée pour commencer.",
  },
  {
    q: "Que deviennent les données de mes clients ?",
    a: "Elles sont traitées conformément à notre politique de confidentialité et jamais revendues. Vous gardez le contrôle et pouvez demander leur suppression.",
  },
];

export default function Faq() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <AnimatedSection>
        <SectionHeading
          eyebrow="FAQ"
          title="Questions fréquentes"
          subtitle="Tout ce qu'il faut savoir sur la collecte d'avis authentiques."
        />
      </AnimatedSection>

      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => (
          <AnimatedSection key={f.q} delay={i * 0.05}>
            <details
              className="group rounded-2xl bg-slate-50 p-5 transition hover:bg-slate-100 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
                {f.q}
                <span className="ml-4 text-slate-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{f.a}</p>
            </details>
          </AnimatedSection>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
