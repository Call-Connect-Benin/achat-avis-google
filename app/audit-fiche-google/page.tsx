import { Metadata } from "next";
import AnimatedSection from "@/components/animated-section";
import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";
import Link from "next/link";
import { TrendingUp, CheckCircle2, ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Audit de fiche Google",
  description:
    "Auditez votre fiche Google Business Profile gratuitement. Analysez votre visibilité locale et obtenez des recommandations.",
};

const auditSteps = [
  {
    number: "01",
    title: "Analyse de votre fiche",
    description: "Nous analysons votre fiche Google Business Profile : nom, catégorie, horaires, photos et description.",
  },
  {
    number: "02",
    title: "Évaluation de la visibilité",
    description: "Nous évaluons votre positionnement dans les résultats de recherche locale et votre optimisation SEO.",
  },
  {
    number: "03",
    title: "Audit des avis",
    description: "Nous analysons votre note moyenne, le volume d'avis et la régularité des retours clients.",
  },
  {
    number: "04",
    title: "Recommandations",
    description: "Nous vous fournissons un rapport détaillé avec des actions concrètes pour améliorer votre fiche.",
  },
];

const reportItems = [
  "Note moyenne et évolution",
  "Volume d'avis et fréquence",
  "Optimisation du profil",
  "Mots-clés et visibilité locale",
  "Recommandations prioritaires",
  "Plan d'action sur 30 jours",
];

export default function AuditFicheGooglePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-lime-400/[0.06]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d0f0a] via-[#101016] to-[#0d0d12]" />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
              <TrendingUp className="h-4 w-4" />
              Audit gratuit
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Auditez votre fiche{" "}
              <span className="text-lime-300">Google Business Profile</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Auditez votre fiche Google Business Profile gratuitement. Analysez votre visibilité locale et obtenez des recommandations.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/outils/audit-fiche"
                className="rounded-full bg-green-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
              >
                Faire l'audit maintenant
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-lime-400/35 bg-[#0d0d12] px-8 py-3.5 text-base font-semibold text-slate-200 transition-all hover:bg-lime-400/[0.06]"
              >
                Nous contacter
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-lime-400/[0.06] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Comment se déroule l'audit ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Un processus simple et rapide pour analyser votre fiche Google.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {auditSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.1}>
                <div className="relative h-full rounded-3xl bg-[#0d0d12] p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                  <span className="text-5xl font-extrabold text-green-200">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Ce que contient votre rapport d'audit
                </h2>
                <p className="mt-4 text-lg text-slate-300">
                  Un rapport complet et actionnable pour améliorer votre visibilité locale.
                </p>
                <div className="mt-8 space-y-4">
                  {reportItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-300" />
                      <span className="text-base text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative h-full min-h-[400px] overflow-hidden rounded-3xl bg-gradient-to-br from-lime-400/10 to-[#0b0b0d]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#0d0d12] shadow-lg">
                      <Star className="h-10 w-10 text-lime-400" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      Rapport détaillé
                    </h3>
                    <p className="mt-2 text-base text-slate-300">
                      Recevez un rapport complet avec des recommandations personnalisées.
                    </p>
                    <Link
                      href="/outils/audit-fiche"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
                    >
                      Obtenir mon audit
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Prêt à améliorer votre fiche Google ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Faites l'audit gratuit de votre fiche Google Business Profile.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/outils/audit-fiche"
                className="rounded-full bg-lime-400/[0.06]0 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-400 hover:shadow-xl"
              >
                Faire l'audit
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-600 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-slate-800"
              >
                Nous contacter
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <ContentSections data={getContentSections("principal", "Audit de fiche Google")} />

    </div>
  );
}
