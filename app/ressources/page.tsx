import { Metadata } from "next";
import AnimatedSection from "@/components/animated-section";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ressources et guides e-réputation",
  description:
    "Guides complets, modèles et outils pour améliorer votre e-réputation et collecter plus d'avis Google.",
};

const resources = [
  {
    title: "Guide complet de l'e-réputation entreprise",
    description:
      "De l'audit à la stratégie : toutes les étapes pour construire, surveiller et protéger votre image en ligne.",
    href: "/blog/e-reputation-entreprise-guide-complet",
    tag: "Guide",
  },
  {
    title: "Modèles de demande d'avis par SMS et email",
    description:
      "Exemples de messages personnalisés pour solliciter vos clients et maximiser votre taux de réponse.",
    href: "/blog/exemple-sms-demander-avis",
    tag: "Exemples",
  },
  {
    title: "Répondre à un avis négatif : modèle et conseils",
    description:
      "Structure, ton et exemple de réponse pour transformer une critique en opportunité de confiance.",
    href: "/blog/comment-repondre-avis-google-negatif-modele",
    tag: "Exemples",
  },
  {
    title: "QR code avis Google : guide pratique",
    description:
      "Comment créer, personnaliser et utiliser un QR code pour collecter des avis en boutique, sur vos factures ou vos flyers.",
    href: "/blog/comment-creer-qr-code-avis-google",
    tag: "Guide",
  },
  {
    title: "Audit de fiche Google : les 5 indicateurs",
    description:
      "Note, volume, régularité, taux de réponse, mots-clés : les indicateurs qui révèlent la maturité de votre e-réputation.",
    href: "/blog/audit-de-fiche-les-5-indicateurs",
    tag: "Outils",
  },
  {
    title: "Pack local Google Maps : comment ça marche",
    description:
      "Pourquoi les 3 fiches du pack local dominent les recherches locales et comment améliorer votre classement.",
    href: "/blog/comprendre-le-pack-local-google-maps",
    tag: "Référencement local",
  },
  {
    title: "9 méthodes pour obtenir plus d'avis Google",
    description:
      "SMS, email, QR code, NFC, automatisation : tous les canaux pour collecter des avis authentiques.",
    href: "/blog/9-methodes-pour-obtenir-plus-davis-google",
    tag: "Guide",
  },
  {
    title: "Acheter des avis Google : quels risques ?",
    description:
      "Sanctions Google, conséquences légales et alternative éthique pour obtenir des avis authentiques.",
    href: "/blog/acheter-avis-google-risques",
    tag: "Avertissement",
  },
];

export default function RessourcesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-lime-400/[0.06]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d0f0a] via-[#101016] to-[#0d0d12]" />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
              Ressources
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Guides et ressources{" "}
              <span className="text-lime-300">e-réputation</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Modèles, guides pratiques et outils pour améliorer votre visibilité locale et collecter des avis authentiques.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Tout pour réussir votre e-réputation
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Des contenus détaillés, des exemples concrets et des outils gratuits pour passer à l'action.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, index) => (
              <AnimatedSection key={r.title} delay={index * 0.05}>
                <Link
                  href={r.href}
                  className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#0d0d12] p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="inline-flex w-fit rounded-full bg-lime-400/[0.06] px-3 py-1 text-xs font-semibold text-lime-300">
                    {r.tag}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-300">
                    {r.description}
                  </p>
                  <span className="mt-auto pt-4 text-sm font-semibold text-lime-700">
                    Lire le guide →
                  </span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Prêt à améliorer votre e-réputation ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Contactez-nous pour une consultation gratuite et personnalisée.
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
