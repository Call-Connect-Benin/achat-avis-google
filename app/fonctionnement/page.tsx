import { Metadata } from "next";
import AnimatedSection from "@/components/animated-section";
import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fonctionnement du service",
  description:
    "Découvrez comment fonctionne notre service de collecte d'avis clients. Processus simple, transparent et conforme aux règles Google.",
};

const steps = [
  {
    number: "01",
    title: "Demande de compte",
    description: "Remplissez votre demande en 2 minutes et ajoutez votre fiche Google Business Profile.",
    cta: { label: "Faire une demande", href: "/contact" },
  },
  {
    number: "02",
    title: "Configuration",
    description: "Personnalisez vos demandes d'avis et générez vos liens et QR codes.",
    cta: { label: "Voir les tarifs", href: "/tarifs" },
  },
  {
    number: "03",
    title: "Collecte",
    description: "Envoyez le lien à vos clients et collectez des avis authentiques automatiquement.",
    cta: { label: "Nous contacter", href: "/contact" },
  },
  {
    number: "04",
    title: "Analyse",
    description: "Suivez vos performances et améliorez votre e-réputation depuis votre tableau de bord.",
    cta: { label: "Faire une demande", href: "/contact" },
  },
];

const faqs = [
  {
    q: "Le service est-il conforme aux règles Google ?",
    a: "Oui, nous respectons strictement les conditions d'utilisation de Google. Nous ne collectons que des avis de vrais clients qui ont réellement utilisé vos services.",
  },
  {
    q: "Combien de temps faut-il pour voir des résultats ?",
    a: "La plupart de nos clients voient leurs premiers avis arriver dans les 48h suivant l'envoi des premières demandes.",
  },
  {
    q: "Les avis collectés sont-ils authentiques ?",
    a: "Absolument. Tous les avis proviennent de vrais clients qui ont accepté de laisser leur retour. Nous ne fabriquons ni n'achetons aucun avis.",
  },
  {
    q: "Puis-je personnaliser les demandes d'avis ?",
    a: "Oui, vous pouvez personnaliser le message envoyé à vos clients pour qu'il corresponde à votre ton et votre marque.",
  },
  {
    q: "Que se passe-t-il si un avis est supprimé ?",
    a: "Nous proposons un programme de remplacement pour compenser les avis supprimés selon votre forfait.",
  },
];

export default function FonctionnementPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-blue-50">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Star className="h-4 w-4" />
              Comment ça marche
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Fonctionnement du{" "}
              <span className="text-blue-700">service</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Découvrez comment fonctionne notre service de collecte d'avis clients. Processus simple, transparent et conforme aux règles Google.
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

      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              4 étapes simples pour collecter des avis
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Un processus simple et transparent pour améliorer votre e-réputation.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
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
                  {"cta" in step && step.cta && (
                    <Link
                      href={step.cta.href}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
                    >
                      {step.cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
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
              Questions fréquentes
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tout ce qu'il faut savoir sur le fonctionnement de notre service.
            </p>
          </AnimatedSection>

          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <AnimatedSection key={f.q} delay={i * 0.05}>
                <details
                  className="group rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
                    {f.q}
                    <span className="ml-4 text-slate-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600">{f.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Prêt à améliorer votre e-réputation ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Rejoignez plus de 2 000 entreprises qui nous font confiance.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-400 hover:shadow-xl"
              >
                Faire une demande
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
      <ContentSections data={getContentSections("principal", "Fonctionnement du service")} />

    </div>
  );
}
