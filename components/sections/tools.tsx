import Link from "next/link";
import { QrCode, ClipboardCheck } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import SectionHeading from "@/components/section-heading";

const tools = [
  {
    icon: QrCode,
    title: "Générateur de lien et QR code",
    description:
      "Créez un QR code qui redirige vos vrais clients vers votre fiche Google pour laisser un avis authentique.",
    points: [
      "Personnalisez le lien avec le nom de votre enseigne",
      "Téléchargez le QR code en haute définition",
      "Imprimez-le sur vos supports ou partagez-le par email",
    ],
    href: "/outils/generateur-avis",
    cta: "Ouvrir l'outil",
  },
  {
    icon: ClipboardCheck,
    title: "Audit de votre fiche",
    description:
      "Estimez la maturité de votre e-réputation et recevez des recommandations pour progresser.",
    points: [
      "Analyse de votre note et de votre volume d'avis",
      "Comparaison face à vos concurrents locaux",
      "Plan d'action priorisé en 3 étapes",
    ],
    href: "/outils/audit-fiche",
    cta: "Lancer l'audit",
  },
];

export default function Tools() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Outils"
          title="Outils gratuits"
          subtitle="Des ressources sans inscription pour démarrer votre collecte d'avis authentiques. Sans engagement, utilisables immédiatement."
        />
      </AnimatedSection>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {tools.map((t, i) => {
          const Icon = t.icon;
          return (
            <AnimatedSection key={t.href} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl bg-lime-400/[0.06] p-6 transition hover:-translate-y-0.5 hover:shadow-sm">
                <Icon className="h-7 w-7 text-lime-300" strokeWidth={1.5} />
                <h3 className="mt-4 font-semibold text-white">{t.title}</h3>
                <p className="mt-2 text-sm text-slate-300">
                  {t.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-400/[0.06]0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={t.href}
                  className="mt-4 inline-flex w-fit rounded-full bg-green-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                >
                  {t.cta}
                </Link>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
