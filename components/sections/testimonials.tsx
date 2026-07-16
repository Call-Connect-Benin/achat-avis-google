import Image from "next/image";
import { Star } from "lucide-react";
import AnimatedSection from "@/components/animated-section";
import SectionHeading from "@/components/section-heading";

const testimonials = [
  {
    quote:
      "Depuis qu'on partage le lien de collecte après chaque chantier, nos avis Google naturels ont doublé en 4 mois. Nos clients nous recommandent spontanément.",
    image: "/images/testimonials/pierre.jpg",
    name: "Pierre L.",
    role: "Plombier, Paris",
    detail: "Passé de 14 à 52 avis en 4 mois",
  },
  {
    quote:
      "Le tableau de bord me fait gagner un temps fou. Je réponds aux avis en quelques minutes et ma note Google s'est stabilisée au-dessus de 4,7.",
    image: "/images/testimonials/sophie.jpg",
    name: "Sophie M.",
    role: "Coiffeuse, Lyon",
    detail: "Note stabilisée à 4,8/5",
  },
  {
    quote:
      "Enfin une approche honnête. Pas de faux avis, juste la vraie voix de nos clients. Notre e-réputation est solide et durable.",
    image: "/images/testimonials/jean-marc.jpg",
    name: "Jean-Marc D.",
    role: "Restaurateur, Marseille",
    detail: "Client depuis 2024",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Témoignages"
            title="Ce que disent nos clients"
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <figure className="flex flex-col rounded-2xl bg-white p-6 transition hover:shadow-sm">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm text-slate-700 italic">
                  {t.quote}
                </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3">
                    <span className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </span>
                    <span className="text-sm">
                      <span className="block font-semibold text-slate-900">
                        {t.name}
                      </span>
                      <span className="block text-slate-500">{t.role}</span>
                      <span className="mt-0.5 block text-xs font-medium text-blue-700">
                        {t.detail}
                      </span>
                    </span>
                  </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
