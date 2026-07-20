import { Metadata } from "next";
import AnimatedSection from "@/components/animated-section";
import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";
import Link from "next/link";
import { CheckCircle2, Star, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Gestion de réputation en ligne",
  description:
    "Améliorez votre réputation en ligne avec des avis authentiques. Suivi, analyse et conseils pour les entreprises.",
};

const monitoringFeatures = [
  "Surveillance des avis en temps réel",
  "Analyse du sentiment et des tendances",
  "Alertes sur les nouveaux avis",
  "Suivi de la note moyenne",
  "Comparaison avec les concurrents",
  "Rapports mensuels détaillés",
];

const crisisSteps = [
  {
    number: "01",
    title: "Détection",
    description: "Nous détectons immédiatement tout avis négatif ou pic de mentions défavorables.",
  },
  {
    number: "02",
    title: "Analyse",
    description: "Nous analysons la situation et évaluons l'impact potentiel sur votre image.",
  },
  {
    number: "03",
    title: "Réponse",
    description: "Nous vous aidons à rédiger des réponses professionnelles et apaisantes.",
  },
  {
    number: "04",
    title: "Suivi",
    description: "Nous suivons l'évolution de la situation et ajustons notre stratégie si nécessaire.",
  },
];

export default function ReputationEnLignePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-blue-50">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Shield className="h-4 w-4" />
              Réputation en ligne
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Gestion de réputation{" "}
              <span className="text-blue-700">en ligne</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Améliorez votre réputation en ligne avec des avis authentiques. Suivi, analyse et conseils pour les entreprises.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                Nous contacter
              </Link>
              <Link
                href="/tarifs"
                className="rounded-full border border-blue-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all hover:bg-blue-50"
              >
                Voir les tarifs
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Surveillance continue de votre e-réputation
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Un suivi en temps réel pour anticiper et réagir rapidement.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {monitoringFeatures.map((feature, index) => (
              <AnimatedSection key={feature} delay={index * 0.1}>
                <div className="h-full rounded-3xl border border-blue-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-400">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                    <span className="text-base text-slate-700">{feature}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Gestion de crise
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Un protocole éprouvé pour protéger votre image en cas d'avis négatifs.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {crisisSteps.map((step, index) => (
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

      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Pourquoi investir dans votre réputation ?
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Votre réputation en ligne est un atout stratégique qui influence directement vos ventes.
                </p>
                <div className="mt-8 space-y-6">
                  {[
                    {
                      title: "95% des clients lisent les avis",
                      description: "Les avis en ligne sont le premier critère de confiance pour les consommateurs.",
                    },
                    {
                      title: "+1 point = +9% de chiffre d'affaires",
                      description: "Une amélioration de votre note se traduit directement par une augmentation des revenus.",
                    },
                    {
                      title: "La réputation se construit sur le long terme",
                      description: "Investir dans votre e-réputation aujourd'hui vous protégera demain.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                          <Star className="h-6 w-6 text-blue-700" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-base text-slate-600">
                          {item.description}
                        </p>
                      </div>
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
                      <Shield className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      Protégez votre image
                    </h3>
                    <p className="mt-2 text-base text-slate-600">
                      Une gestion proactive de votre réputation vous évite bien des soucis.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
                    >
                      Commencer maintenant
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Prêt à prendre le contrôle de votre réputation ?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Contactez-nous pour une consultation gratuite et personnalisée.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                Nous contacter
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-blue-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all hover:bg-blue-50"
              >
                S'inscrire gratuitement
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <ContentSections data={getContentSections("principal", "Gestion de réputation en ligne")} />

    </div>
  );
}
