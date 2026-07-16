import { Metadata } from "next";
import AnimatedSection from "@/components/animated-section";
import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";
import Link from "next/link";
import { Shield, Star, CheckCircle2, ArrowRight, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Achat avis Google : risques et alternatives",
  description:
    "Pourquoi acheter des avis Google est risqué. Découvrez les sanctions Google et notre alternative conforme pour obtenir des avis authentiques.",
};

const risks = [
  {
    icon: AlertTriangle,
    title: "Suppression de la fiche Google",
    description:
      "Google peut supprimer définitivement votre fiche Business Profile si il détecte des avis achetés ou frauduleux.",
  },
  {
    icon: Shield,
    title: "Pénalités de référencement",
    description:
      "Les avis frauduleux peuvent entraîner une baisse de votre classement dans les résultats de recherche locale.",
  },
  {
    icon: Star,
    title: "Perte de confiance des clients",
    description:
      "Les consommateurs sont de plus en plus vigilants et peuvent détecter les avis faux, nuisant à votre crédibilité.",
  },
  {
    icon: CheckCircle2,
    title: "Conséquences légales",
    description:
      "Dans certains pays, l'achat d'avis est considéré comme une pratique commerciale trompeuse passible de sanctions.",
  },
];

const comparisonRows = [
  { label: "Avis authentiques", achatAvis: "Non", alternative: "Oui" },
  { label: "Conforme aux règles Google", achatAvis: "Non", alternative: "Oui" },
  { label: "Risque de suppression", achatAvis: "Élevé", alternative: "Aucun" },
  { label: "Durabilité", achatAvis: "Faible", alternative: "Élevée" },
  { label: "Confiance client", achatAvis: "Négative", alternative: "Positive" },
];

export default function AchatAvisGooglePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-red-50">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-red-50 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
              <AlertTriangle className="h-4 w-4" />
              Attention aux risques
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Achat d&apos;avis Google :{" "}
              <span className="text-red-600">risques et alternatives</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Acheter des avis Google peut sembler une solution rapide, mais les risques sont bien réels. Découvrez pourquoi et adoptez une alternative conforme.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                Alternative conforme
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-red-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all hover:bg-red-50"
              >
                Nous contacter
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-red-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Les risques de l'achat d'avis Google
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Les conséquences peuvent être graves et durables pour votre entreprise.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {risks.map((risk, index) => {
              const Icon = risk.icon;
              return (
                <AnimatedSection key={risk.title} delay={index * 0.1}>
                  <div className="h-full rounded-3xl border border-red-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:border-red-400">
                    <div className="inline-flex rounded-2xl bg-red-100 p-3">
                      <Icon className="h-8 w-8 text-red-600" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      {risk.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {risk.description}
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
              Comparaison : achat vs collecte authentique
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              La différence entre une solution risquée et une approche durable.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-12">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                      Critère
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-red-600">
                      Achat d'avis
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-700">
                      Collecte authentique
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {comparisonRows.map((row) => (
                    <tr key={row.label}>
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">
                        {row.label}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-red-600 font-medium">
                        {row.achatAvis}
                      </td>
                      <td className="px-6 py-4 text-center text-sm text-blue-700 font-medium">
                        {row.alternative}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              L'alternative conforme : la collecte d'avis authentiques
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Notre méthode respecte les règles Google et la réglementation. Collectez des avis de vos vrais clients.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Liens de collecte",
                description: "Générez des liens personnalisés pour solliciter vos clients après chaque prestation.",
              },
              {
                title: "QR codes",
                description: "Affichez des QR codes sur votre lieu de vente pour faciliter la collecte.",
              },
              {
                title: "Automatisation",
                description: "Automatisez vos demandes d'avis par email ou SMS pour maximiser votre collecte.",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="h-full rounded-3xl border border-blue-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:border-blue-400">
                  <div className="inline-flex rounded-2xl bg-blue-100 p-3">
                    <CheckCircle2 className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {item.description}
                  </p>
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
              Choisissez la bonne méthode
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Optez pour une solution durable et conforme pour votre e-réputation.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                S'inscrire gratuitement
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
      <ContentSections data={getContentSections("principal", "Achat avis Google : risques et alternatives")} />

    </div>
  );
}
