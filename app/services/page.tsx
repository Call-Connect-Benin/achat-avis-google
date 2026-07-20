import { Metadata } from "next";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";
import { CheckCircle2, Star, TrendingUp, Shield, Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Découvrez nos services de collecte d'avis Google, d'amélioration de votre note et de gestion d'avis vérifiés pour les entreprises en France.",
};

const services = [
  {
    icon: Star,
    title: "Collecte d'avis Google",
    description:
      "Générez des liens personnalisés et des QR codes pour collecter des avis authentiques de vos clients sur Google. Simple, rapide et conforme aux règles Google.",
    features: [
      "Liens de collecte personnalisés",
      "QR codes imprimables",
      "Suivi des clics et conversions",
      "Conforme aux règles Google",
      "Support technique dédié",
    ],
    color: "sky",
  },
  {
    icon: TrendingUp,
    title: "Amélioration de votre note",
    description:
      "Analysez votre e-réputation et obtenez des conseils personnalisés pour améliorer votre note Google et attirer plus de clients.",
    features: [
      "Audit complet de votre fiche",
      "Analyse des avis existants",
      "Plan d'action personnalisé",
      "Suivi mensuel des performances",
      "Conseils d'experts",
    ],
    color: "blue",
  },
  {
    icon: Shield,
    title: "Avis vérifiés",
    description:
      "Collectez des avis vérifiés et authentiques pour renforcer la confiance de vos clients et améliorer votre visibilité locale.",
    features: [
      "Vérification de l'identité",
      "Avis 100% authentiques",
      "Réponse automatique aux avis",
      "Badge de confiance",
      "Reporting détaillé",
    ],
    color: "indigo",
  },
];

const steps = [
  {
    number: "01",
    title: "Demande de compte",
    description: "Remplissez votre demande en 2 minutes et ajoutez votre entreprise.",
    cta: { label: "Faire une demande", href: "/contact" },
  },
  {
    number: "02",
    title: "Configuration",
    description:
      "Connectez-vous et configurez votre entreprise dans votre espace personnel.",
    cta: { label: "Accéder à mon espace", href: "/espace" },
  },
  {
    number: "03",
    title: "Collecte",
    description:
      "Depuis votre tableau de bord, envoyez le lien à vos clients et collectez les avis automatiquement.",
    cta: { label: "Voir le tableau de bord", href: "/espace" },
  },
  {
    number: "04",
    title: "Analyse",
    description:
      "Suivez vos performances et améliorez votre e-réputation depuis votre espace.",
    cta: { label: "Consulter mes statistiques", href: "/espace" },
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-blue-50">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Star className="h-4 w-4" />
              Nos Services
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Solutions complètes pour votre{" "}
              <span className="text-blue-700">e-réputation</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              De la collecte d'avis à l'analyse de votre réputation en ligne, nous vous accompagnons à chaque étape pour améliorer votre visibilité et attirer plus de clients.
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

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Des services adaptés à vos besoins
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Chaque entreprise est unique. Nous proposons des solutions sur mesure pour améliorer votre e-réputation.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colorMap = {
                sky: {
                  bg: "bg-sky-100",
                  text: "text-sky-700",
                  border: "border-sky-200",
                  hover: "hover:border-sky-400",
                },
                blue: {
                  bg: "bg-blue-100",
                  text: "text-blue-700",
                  border: "border-blue-200",
                  hover: "hover:border-blue-400",
                },
                indigo: {
                  bg: "bg-indigo-100",
                  text: "text-indigo-700",
                  border: "border-indigo-200",
                  hover: "hover:border-indigo-400",
                },
              };
              const colors = colorMap[service.color as keyof typeof colorMap];

              return (
                <AnimatedSection key={service.title} delay={index * 0.1}>
                  <div
                    className={`h-full rounded-3xl border ${colors.border} ${colors.hover} bg-white p-8 transition-all duration-300 hover:shadow-lg`}
                  >
                    <div className={`inline-flex rounded-2xl ${colors.bg} p-3`}>
                      <Icon className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">
                      {service.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2
                            className={`mt-0.5 h-5 w-5 flex-shrink-0 ${colors.text}`}
                          />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Comment ça marche ?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              4 étapes simples pour améliorer votre e-réputation.
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
                      className="mt-6 inline-flex rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
                    >
                      {step.cta.label}
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
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Pourquoi choisir nos services ?
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Nous combinons technologie et expertise humaine pour vous offrir les meilleurs résultats.
                </p>
                <div className="mt-8 space-y-6">
                  {[
                    {
                      icon: Shield,
                      title: "Conformité garantie",
                      description:
                        "Nos outils respectent strictement les conditions d'utilisation de Google et la réglementation européenne.",
                    },
                    {
                      icon: MessageSquare,
                      title: "Support dédié",
                      description:
                        "Une équipe d'experts vous accompagne à chaque étape et répond à toutes vos questions.",
                    },
                    {
                      icon: TrendingUp,
                      title: "Résultats mesurables",
                      description:
                        "Suivez l'impact de vos campagnes en temps réel avec des tableaux de bord détaillés.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex gap-4">
                         <div className="flex-shrink-0">
                           <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                             <Icon className="h-6 w-6 text-blue-700" />
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
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative h-full min-h-[400px] overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
                      <Mail className="h-10 w-10 text-blue-600" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
                      Besoin d'un service personnalisé ?
                    </h3>
                    <p className="mt-2 text-base text-slate-600">
                      Contactez-nous pour discuter de vos besoins spécifiques.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-6 inline-flex rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
                    >
                      Nous contacter
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
              Prêt à améliorer votre e-réputation ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Rejoignez plus de 2 000 entreprises qui nous font confiance pour collecter des avis Google.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-400 hover:shadow-xl"
              >
                Nous contacter
              </Link>
              <Link
                href="/tarifs"
                className="rounded-full border border-slate-600 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-slate-800"
              >
                Voir les tarifs
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
