import { Metadata } from "next";
import AnimatedSection from "@/components/animated-section";
import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";
import Link from "next/link";
import { Shield, MessageSquare, CheckCircle2, ArrowRight, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Gestion des avis Google",
  description:
    "Gérez vos avis Google efficacement : réponses, suivi, alertes et analyse de votre e-réputation en un seul endroit.",
};

const features = [
  {
    icon: MessageSquare,
    title: "Réponses aux avis",
    description:
      "Répondez à tous vos avis depuis un seul endroit. Des suggestions de réponses vous aident à rester professionnel et bienveillant.",
  },
  {
    icon: Shield,
    title: "Alertes en temps réel",
    description:
      "Soyez notifié instantanément à chaque nouvel avis pour réagir rapidement, qu'il soit positif ou négatif.",
  },
  {
    icon: Star,
    title: "Analyse de sentiment",
    description:
      "Analysez le sentiment de vos avis pour identifier les points forts et les axes d'amélioration de votre entreprise.",
  },
  {
    icon: CheckCircle2,
    title: "Suivi des performances",
    description:
      "Suivez votre note moyenne, le volume d'avis et les tendances sur toutes vos plateformes depuis un tableau de bord unifié.",
  },
];

export default function GestionAvisGooglePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-lime-400/[0.06]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d0f0a] via-[#101016] to-[#0d0d12]" />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
              <Shield className="h-4 w-4" />
              Gestion des avis Google
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Gérez vos avis Google{" "}
              <span className="text-lime-300">efficacement</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Gérez vos avis Google efficacement : réponses, suivi, alertes et analyse de votre e-réputation en un seul endroit.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-green-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
              >
                Nous contacter
              </Link>
              <Link
                href="/tarifs"
                className="rounded-full border border-lime-400/35 bg-[#0d0d12] px-8 py-3.5 text-base font-semibold text-slate-200 transition-all hover:bg-lime-400/[0.06]"
              >
                Voir les tarifs
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Des fonctionnalités puissantes
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Tous les outils dont vous avez besoin pour gérer votre e-réputation.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={feature.title} delay={index * 0.1}>
                  <div className="h-full rounded-3xl border border-lime-400/25 bg-[#0d0d12] p-8 transition-all duration-300 hover:shadow-lg hover:border-green-400">
                    <div className="inline-flex rounded-2xl bg-lime-400/10 p-3">
                      <Icon className="h-8 w-8 text-lime-300" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-lime-400/[0.06] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Tableau de bord unifié
                </h2>
                <p className="mt-4 text-lg text-slate-300">
                  Centralisez la gestion de tous vos avis Google dans un espace intuitif et performant.
                </p>
                <div className="mt-8 space-y-6">
                  {[
                    {
                      title: "Vue d'ensemble",
                      description: "Consultez votre note moyenne, le volume d'avis et les tendances en un coup d'œil.",
                    },
                    {
                      title: "Réponses intelligentes",
                      description: "Utilisez des modèles de réponse pour gagner du temps tout en restant personnel.",
                    },
                    {
                      title: "Historique complet",
                      description: "Accédez à l'historique de tous vos avis et réponses pour un suivi optimal.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10">
                          <CheckCircle2 className="h-6 w-6 text-lime-300" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-base text-slate-300">
                          {item.description}
                        </p>
                      </div>
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
                      <Shield className="h-10 w-10 text-lime-400" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      Gestion centralisée
                    </h3>
                    <p className="mt-2 text-base text-slate-300">
                      Tous vos avis, réponses et analyses dans une seule interface.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
                    >
                      Essayer gratuitement
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Prêt à gérer vos avis Google ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Simplifiez la gestion de votre e-réputation dès aujourd'hui.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-green-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
              >
                Nous contacter
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-lime-400/35 bg-[#0d0d12] px-8 py-3.5 text-base font-semibold text-slate-200 transition-all hover:bg-lime-400/[0.06]"
              >
                S'inscrire gratuitement
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <ContentSections data={getContentSections("principal", "Gestion des avis Google")} />

    </div>
  );
}
