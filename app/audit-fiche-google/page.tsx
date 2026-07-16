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
      <section className="relative overflow-hidden bg-blue-50">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <TrendingUp className="h-4 w-4" />
              Audit gratuit
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Auditez votre fiche{" "}
              <span className="text-blue-700">Google Business Profile</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Auditez votre fiche Google Business Profile gratuitement. Analysez votre visibilité locale et obtenez des recommandations.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/outils/audit-fiche"
                className="rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                Faire l'audit maintenant
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-blue-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all hover:bg-blue-50"
              >
                Nous contacter
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Comment se déroule l'audit ?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Un processus simple et rapide pour analyser votre fiche Google.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {auditSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.1}>
                <div className="relative h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                  <span className="text-5xl font-extrabold text-blue-200">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Ce que contient votre rapport d'audit
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Un rapport complet et actionnable pour améliorer votre visibilité locale.
                </p>
                <div className="mt-8 space-y-4">
                  {reportItems.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                      <span className="text-base text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative h-full min-h-[400px] overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                      <Star className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      Rapport détaillé
                    </h3>
                    <p className="mt-2 text-base text-slate-600">
                      Recevez un rapport complet avec des recommandations personnalisées.
                    </p>
                    <Link
                      href="/outils/audit-fiche"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
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

      <section className="bg-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Prêt à améliorer votre fiche Google ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Faites l'audit gratuit de votre fiche Google Business Profile.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/outils/audit-fiche"
                className="rounded-full bg-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-400 hover:shadow-xl"
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
