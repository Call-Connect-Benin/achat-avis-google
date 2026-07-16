import AnimatedSection from "@/components/animated-section";
import SectionHeading from "@/components/section-heading";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  {
    title: "Comment obtenir plus d'avis Google en 2026",
    excerpt:
      "Les 9 méthodes éprouvées pour augmenter votre note Google Maps et attirer plus de clients locaux.",
    date: "15 janvier 2026",
    readTime: "5 min",
    category: "Acquisition",
    href: "/outils/generateur-avis",
  },
  {
    title: "Pourquoi la publication progressive est essentielle",
    excerpt:
      "Comment un rythme naturel d'avis protège votre fiche Google contre les suppressions algorithmiques.",
    date: "8 janvier 2026",
    readTime: "4 min",
    category: "Conformité",
    href: "/e-reputation",
  },
  {
    title: "RGPD et avis clients : ce qu'il faut savoir",
    excerpt:
      "Conformité légale, consentement et droits des consommateurs : guide complet pour les entreprises.",
    date: "2 janvier 2026",
    readTime: "6 min",
    category: "Légal",
    href: "/confidentialite",
  },
  {
    title: "Répondre aux avis négatifs : le guide pratique",
    excerpt:
      "Templates et méthode pour transformer une critique en démonstration de professionnalisme.",
    date: "20 décembre 2025",
    readTime: "5 min",
    category: "Gestion",
    href: "/gestion/repondre-avis-negatif",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-sky-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Conseils"
            title="Ressources et guides"
            subtitle="Articles, guides pratiques et actualités pour maîtriser votre e-réputation et transformer vos avis en levier de croissance."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.1}>
              <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="rounded-full bg-sky-100 px-2.5 py-1 font-semibold text-sky-700">
                    {a.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {a.readTime}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-slate-900 leading-snug">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{a.excerpt}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500">{a.date}</span>
                  <Link
                    href={a.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-sky-600 hover:text-sky-700"
                  >
                    Lire l'article
                    <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
            >
              Voir tous les articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
