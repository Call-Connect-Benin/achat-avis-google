import { Metadata } from "next";
import AnimatedSection from "@/components/animated-section";
import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";
import Link from "next/link";
import { Mail, Star, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Collecte d'avis Google",
  description:
    "Solution de collecte d'avis Google conforme et efficace. Générez des liens et QR codes pour recueillir les avis de vos vrais clients.",
};

const steps = [
  {
    number: "01",
    title: "Créez votre lien de collecte",
    description: "Générez un lien personnalisé en quelques clics depuis votre tableau de bord.",
  },
  {
    number: "02",
    title: "Partagez avec vos clients",
    description: "Envoyez le lien par email, SMS ou affichez un QR code sur votre lieu de vente.",
  },
  {
    number: "03",
    title: "Les clients laissent leur avis",
    description: "Vos clients sont redirigés vers Google et laissent leur avis en toute simplicité.",
  },
  {
    number: "04",
    title: "Suivez vos résultats",
    description: "Analysez vos performances et votre note en temps réel depuis votre espace.",
  },
];

const benefits = [
  "Liens et QR codes personnalisés",
  "Conforme aux règles Google",
  "Suivi des performances en temps réel",
  "Avis 100% authentiques de vrais clients",
  "Intégration avec votre CRM",
  "Support technique dédié",
];

export default function CollecteAvisGooglePage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-lime-400/[0.06]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d0f0a] via-[#101016] to-[#0d0d12]" />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
              <Mail className="h-4 w-4" />
              Collecte d'avis Google
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Collectez des avis Google{" "}
              <span className="text-lime-300">conformes et efficaces</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Solution de collecte d'avis Google conforme et efficace. Générez des liens et QR codes pour recueillir les avis de vos vrais clients.
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

      <section className="bg-lime-400/[0.06] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Comment fonctionne la collecte ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Un processus simple en 4 étapes pour collecter des avis authentiques.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
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
                  Pourquoi choisir notre solution de collecte ?
                </h2>
                <p className="mt-4 text-lg text-slate-300">
                  Notre plateforme est conçue pour maximiser votre collecte d'avis tout en respectant les règles Google.
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
                      <Star className="h-10 w-10 text-lime-400" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      Collecte 100% conforme
                    </h3>
                    <p className="mt-2 text-base text-slate-300">
                      Tous nos outils respectent strictement les conditions d'utilisation de Google.
                    </p>
                    <Link
                      href="/tarifs"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
                    >
                      Voir les tarifs
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
              Prêt à collecter plus d'avis ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Rejoignez plus de 2 000 entreprises qui nous font confiance.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-lime-400/[0.06]0 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-400 hover:shadow-xl"
              >
                Créer mon compte
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
      <ContentSections data={getContentSections("principal", "Collecte d'avis Google")} />

    </div>
  );
}
