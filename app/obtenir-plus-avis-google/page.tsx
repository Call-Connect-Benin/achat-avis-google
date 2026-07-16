import { Metadata } from "next";
import AnimatedSection from "@/components/animated-section";
import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";
import Link from "next/link";
import { Star, TrendingUp, CheckCircle2, ArrowRight, Mail } from "lucide-react";

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
      <section className="relative overflow-hidden bg-blue-50">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Star className="h-4 w-4" />
              Obtenir plus d'avis Google
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Obtenez plus d&apos;avis Google{" "}
              <span className="text-blue-700">authentiques</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Découvrez comment augmenter le nombre d'avis Google pour votre entreprise avec des méthodes conformes et efficaces.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                Commencer gratuitement
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

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Pourquoi obtenir plus d&apos;avis Google ?
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Les avis Google sont devenus un critère essentiel pour les consommateurs. Plus vous avez d'avis, plus vous inspirez confiance.
                </p>
                <div className="mt-8 space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                      <span className="text-base text-slate-700">{benefit}</span>
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
                      <TrendingUp className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      +3 avis par mois en moyenne
                    </h3>
                    <p className="mt-2 text-base text-slate-600">
                      Avec notre méthode, nos clients augmentent leur volume d'avis de 150% en 3 mois.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Méthodes éprouvées pour collecter plus d&apos;avis
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Nous combinons plusieurs canaux pour maximiser votre collecte d'avis authentiques.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {methods.map((method, index) => {
              const Icon = method.icon;
              return (
                <AnimatedSection key={method.title} delay={index * 0.1}>
                  <div className="h-full rounded-3xl border border-blue-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:border-blue-400">
                    <div className="inline-flex rounded-2xl bg-blue-100 p-3">
                      <Icon className="h-8 w-8 text-blue-700" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      {method.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {method.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Prêt à obtenir plus d&apos;avis Google ?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Rejoignez plus de 2 000 entreprises qui nous font confiance pour améliorer leur e-réputation.
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
      <ContentSections data={getContentSections("principal", "Obtenir plus d'avis Google")} />

    </div>
  );
}
