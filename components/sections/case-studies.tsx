import AnimatedSection from "@/components/animated-section";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

const cases = [
  {
    title: "Restaurant gastronomique à Lyon",
    result: "Note passée de 3.8 à 4.6 en 2 mois",
    metric: "+40% de réservations",
    context:
      "Fiche négligée et avis rares. Mise en place d'un lien de collecte post-repas et de réponses systématiques.",
    duration: "Résultat en 2 mois",
    image: "/images/case-restaurant.png",
    href: "/e-reputation",
  },
  {
    title: "Cabinet de plomberie à Paris",
    result: "De 12 à 58 avis en 3 mois",
    metric: "Top 3 Google Maps",
    context:
      "Artisan solo sans visibilité locale. Partage de QR codes sur factures et relances après intervention.",
    duration: "Résultat en 3 mois",
    image: "/images/case-plomberie.png",
    href: "/e-reputation",
  },
  {
    title: "Salon de coiffure à Marseille",
    result: "Note stabilisée à 4.8/5",
    metric: "+35% de nouveaux clients",
    context:
      "Clientèle fidèle mais peu de avis publics. Collecte régulière en caisse et suivi de la sentiment.",
    duration: "Résultat en 4 mois",
    image: "/images/case-coiffure.png",
    href: "/e-reputation",
  },
];

export default function CaseStudies() {
  return (
    <section className="bg-[#0d0d12] py-10">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Cas clients"
            title="Ils nous font confiance"
            subtitle="Découvrez comment nos clients ont amélioré leur e-réputation et développé leur activité."
          />
        </AnimatedSection>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <AnimatedSection key={c.title} delay={i * 0.1}>
              <Link
                href={c.href}
                className="group flex flex-col rounded-2xl bg-yellow-300/[0.06] overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-lime-100">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#0d0d12]/90 px-3 py-1 text-xs font-semibold text-lime-700 backdrop-blur-sm">
                      <TrendingUp className="h-3 w-3" />
                      {c.metric}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-semibold text-white group-hover:text-lime-700 transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">{c.result}</p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">
                    {c.context}
                  </p>
                  <p className="mt-3 text-xs font-medium text-lime-700">
                    {c.duration}
                  </p>
                  <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-semibold text-lime-600">
                    Voir l'étude de cas
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
