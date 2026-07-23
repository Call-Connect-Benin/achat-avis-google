import { Metadata } from "next";
import AnimatedSection from "@/components/animated-section";
import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";
import Link from "next/link";
import { Star, TrendingUp, CheckCircle2, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Obtenir plus d'avis Google",
  description:
    "Découvrez comment obtenir plus d'avis Google authentiques pour votre entreprise. Méthodes conformes, outils de collecte et bonnes pratiques.",
};

const benefits = [
  "Améliorer votre note moyenne sur Google",
  "Attirer plus de clients locaux",
  "Renforcer la confiance des prospects",
  "Dépasser vos concurrents dans les résultats locaux",
  "Construire une e-réputation solide et durable",
];

const methods = [
  {
    icon: Mail,
    title: "Liens de collecte personnalisés",
    description:
      "Envoyez un lien direct à vos clients après chaque prestation pour solliciter leur avis en un clic.",
  },
  {
    icon: Star,
    title: "QR codes et supports physiques",
    description:
      "Affichez un QR code sur votre comptoir, vos factures ou vos cartes de visite pour faciliter la collecte.",
  },
  {
    icon: TrendingUp,
    title: "Automatisation et suivi",
    description:
      "Automatisez vos demandes d'avis et suivez vos performances en temps réel depuis votre tableau de bord.",
  },
];

export default function ObtenirPlusAvisGooglePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-lime-400/[0.06]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d0f0a] via-[#101016] to-[#0d0d12]" />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
              <Star className="h-4 w-4" />
              Obtenir plus d'avis Google
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Obtenez plus d&apos;avis Google{" "}
              <span className="text-lime-300">authentiques</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Découvrez comment augmenter le nombre d'avis Google pour votre entreprise avec des méthodes conformes et efficaces.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-green-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
              >
                Commencer gratuitement
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

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Pourquoi obtenir plus d&apos;avis Google ?
                </h2>
                <p className="mt-4 text-lg text-slate-300">
                  Les avis Google sont devenus un critère essentiel pour les consommateurs. Plus vous avez d'avis, plus vous inspirez confiance.
                </p>
                <div className="mt-8 space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-lime-300" />
                      <span className="text-base text-slate-200">{benefit}</span>
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
                      <TrendingUp className="h-10 w-10 text-lime-400" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      +3 avis par mois en moyenne
                    </h3>
                    <p className="mt-2 text-base text-slate-300">
                      Avec notre méthode, nos clients augmentent leur volume d'avis de 150% en 3 mois.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-lime-400/[0.06] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Méthodes éprouvées pour collecter plus d&apos;avis
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Nous combinons plusieurs canaux pour maximiser votre collecte d'avis authentiques.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {methods.map((method, index) => {
              const Icon = method.icon;
              return (
                <AnimatedSection key={method.title} delay={index * 0.1}>
                  <div className="h-full rounded-3xl border border-lime-400/25 bg-[#0d0d12] p-8 transition-all duration-300 hover:shadow-lg hover:border-green-400">
                    <div className="inline-flex rounded-2xl bg-lime-400/10 p-3">
                      <Icon className="h-8 w-8 text-lime-300" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      {method.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-300">
                      {method.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Prêt à obtenir plus d&apos;avis Google ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Rejoignez plus de 2 000 entreprises qui nous font confiance pour améliorer leur e-réputation.
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
      <ContentSections data={getContentSections("principal", "Obtenir plus d'avis Google")} />

    </div>
  );
}
