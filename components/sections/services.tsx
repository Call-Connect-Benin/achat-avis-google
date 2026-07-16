import AnimatedSection from "@/components/animated-section";
import SectionHeading from "@/components/section-heading";
import { Search, TrendingUp, BadgeCheck } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Search,
    title: "Collecte d'avis Google",
    description:
      "Générez des liens et QR codes personnalisés pour collecter des avis authentiques sur votre fiche Google Business Profile, et suivez chaque clic.",
    features: [
      "Lien de collecte personnalisé",
      "QR code à partager en boutique ou en facture",
      "Suivi des clics en temps réel",
      "Tableau de bord intégré",
      "Relances automatiques par email/SMS",
      "Multiposte pour les équipes",
    ],
  },
  {
    icon: TrendingUp,
    title: "Amélioration de la note",
    description:
      "Suivez votre évolution, répondez aux avis et améliorez durablement votre notoriété en ligne grâce à un plan d'action mensuel.",
    features: [
      "Suivi de la note Google jour par jour",
      "Alertes avis négatifs instantanées",
      "Réponses suggérées par IA",
      "Rapports mensuels exportables",
      "Benchmark face à vos concurrents",
      "Recommandations personnalisées",
    ],
  },
  {
    icon: BadgeCheck,
    title: "Avis vérifiés et conformes",
    description:
      "Tous les avis proviennent de clients réels après une prestation. Conforme aux règles Google et à la législation, sans aucun avis fictif.",
    features: [
      "Clients authentiques uniquement",
      "Conforme RGPD et CNIL",
      "Conforme règles Google",
      "Aucun avis fictif",
      "Traçabilité des collectes",
      "Garantie de conformité",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Services"
            title="Nos solutions pour votre e-réputation"
            subtitle="Des outils conformes pour collecter, suivre et valoriser les avis de vos vrais clients."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-700" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{s.description}</p>
                  <ul className="mt-4 space-y-2">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6">
                    <Link
                      href="/e-reputation"
                      className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
