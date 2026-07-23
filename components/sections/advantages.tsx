import Image from "next/image";
import AnimatedSection from "@/components/animated-section";
import SectionHeading from "@/components/section-heading";
import {
  Handshake,
  Search,
  BadgeCheck,
  LayoutDashboard,
  ShieldCheck,
  Bell,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const advantages: {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  cta: string;
}[] = [
  {
    icon: Handshake,
    title: "Confiance réelle",
    description:
      "Des avis authentiques établissent une relation de confiance durable avec vos clients. 92 % des consommateurs lisent les avis avant d'acheter localement, et une fiche honnête convertit mieux qu'une fiche gonflée artificiellement.",
    href: "/e-reputation",
    cta: "Comprendre l'impact",
  },
  {
    icon: Search,
    title: "Meilleur référencement local",
    description:
      "Un volume d'avis réels et réguliers améliore votre visibilité sur Google Maps et dans les recherches locales. Google privilégie les fiches actives, notées et fréquemment sollicitées par de vrais clients.",
    href: "/gestion-avis-google",
    cta: "Optimiser mon SEO local",
  },
  {
    icon: BadgeCheck,
    title: "Preuve sociale solide",
    description:
      "Plus de témoignages véridiques renforcent la crédibilité de votre marque auprès des prospects. Une preuve sociale cohérente rassure et réduit le temps de décision de vos futurs clients.",
    href: "/collecte-avis-google",
    cta: "Lancer la collecte",
  },
  {
    icon: LayoutDashboard,
    title: "Gestion centralisée",
    description:
      "Toutes vos plateformes réunies dans un tableau de bord clair, avec alertes et réponses suggérées. Finies les connexions multiples : vous pilotez votre e-réputation depuis un seul écran.",
    href: "/espace",
    cta: "Voir le dashboard",
  },
  {
    icon: ShieldCheck,
    title: "Conformité garantie",
    description:
      "Respect des règles Google, Trustpilot et de la législation sur les avis de consommateurs. Aucun avis fictif, aucune incitation déguisée : votre réputation tient à l'épreuve d'un contrôle.",
    href: "/confidentialite",
    cta: "Notre conformité RGPD",
  },
  {
    icon: Bell,
    title: "Alertes avis négatifs",
    description:
      "Soyez notifié immédiatement pour répondre et transformer une critique en opportunité. Répondre sous 24 h augmente la confiance des lecteurs et limite l'impact d'un avis mécontent.",
    href: "/gestion/repondre-avis-negatif",
    cta: "Répondre aux avis",
  },
];

export default function Advantages() {
  return (
    <section className="relative overflow-hidden bg-lime-400/[0.06] py-10">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/images/img-06.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Avantages"
            title="Pourquoi collecter des avis authentiques"
            subtitle="Les avis réels attirent plus de clients et protègent votre réputation sur le long terme."
          />
        </AnimatedSection>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a, i) => {
            const Icon = a.icon;
            return (
              <AnimatedSection key={a.title} delay={i * 0.05}>
                <div className="flex h-full flex-col rounded-2xl bg-[#0d0d12] p-6 shadow-sm ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:shadow-sm">
                  <Icon className="h-7 w-7 text-lime-300" strokeWidth={1.5} />
                  <h3 className="mt-4 font-semibold text-white">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{a.description}</p>
                  <div className="mt-auto pt-6">
                    <Link
                      href={a.href}
                      className="inline-flex w-full items-center justify-center rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                    >
                      {a.cta}
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
