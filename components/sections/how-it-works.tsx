import AnimatedSection from "@/components/animated-section";
import SectionHeading from "@/components/section-heading";

const steps = [
  {
    n: 1,
    title: "Créez votre lien de collecte",
    description:
      "Générez un lien personnalisé et un QR code que vous partagez à vos vrais clients après chaque prestation.",
    points: [
      "Lien marque blanche et QR code prêts en 2 minutes",
      "Intégration par email, SMS ou carte de visite",
      "Suivi des clics et du parcours client",
    ],
  },
  {
    n: 2,
    title: "Vos clients laissent un avis",
    description:
      "Ils sont redirigés vers votre fiche Google, Trustpilot ou Facebook pour publier un avis authentique.",
    points: [
      "Redirection directe vers le formulaire d'avis",
      "Aucune étape inutile, taux de complétion maximal",
      "Filtrage des avis avant publication possible",
    ],
  },
  {
    n: 3,
    title: "Suivez en temps réel",
    description:
      "Le tableau de bord centralise notation, volume et sentiment de tous vos avis en un seul endroit.",
    points: [
      "Vue consolidée multi-plateformes",
      "Alertes et notifications instantanées",
      "Export des données et rapports mensuels",
    ],
  },
  {
    n: 4,
    title: "Répondez et progressez",
    description:
      "Recevez des alertes, répondez rapidement (y compris aux avis négatifs) et améliorez votre réputation.",
    points: [
      "Réponses suggérées par IA à valider",
      "Plan d'action mensuel personnalisé",
      "Suivi de l'évolution de votre note",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="fonctionnalites" className="mx-auto max-w-6xl px-4 py-20">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Fonctionnement"
          title="Comment ça marche"
          subtitle="Un processus simple et transparent pour obtenir des avis clients authentiques et durables."
        />
      </AnimatedSection>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <AnimatedSection key={step.n} delay={step.n * 0.1}>
            <div className="flex h-full flex-col rounded-2xl bg-blue-50 p-6 transition hover:bg-blue-100">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                {step.n}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              <ul className="mt-4 space-y-2">
                {step.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
