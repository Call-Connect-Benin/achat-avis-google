import AnimatedSection from "@/components/animated-section";
import SectionHeading from "@/components/section-heading";
import { Store, Utensils, Home, Stethoscope, Scale, Briefcase } from "lucide-react";

const audiences = [
  { icon: Store, title: "Commerçants", description: "Boutiques, magasins, commerces de proximité. Transformez chaque vente en avis public." },
  { icon: Utensils, title: "Restauration", description: "Restaurants, cafés, bars, food trucks. Vos avis Google font directement fluctuer vos réservations." },
  { icon: Home, title: "Artisans", description: "Plombiers, électriciens, couvreurs, serruriers. Un avis après chaque intervention, même en solo." },
  { icon: Stethoscope, title: "Professions de santé", description: "Dentistes, kinés, vétérinaires, médecins. Rassurez les patients qui cherchent localement." },
  { icon: Scale, title: "Services professionnels", description: "Avocats, comptables, consultants. Votre réputation numérique devance souvent le premier rendez-vous." },
  { icon: Briefcase, title: "PME & startups", description: "Toutes les entreprises locales et régionales. Pilotez plusieurs fiches depuis un seul dashboard." },
];

const audienceExtras = [
  "Partagez un QR code à chaque point de contact client",
  "Relancez automatiquement les clients satisfaits",
  "Répondez depuis un tableau de bord unique",
  "Suivez la progression de votre note mois après mois",
];

export default function Audiences() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Pour qui ?"
            title="Une solution adaptée à tous les métiers"
            subtitle="Que vous soyez artisan, commerçant ou professionnel libéral, notre plateforme s'adapte à votre activité."
          />
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <AnimatedSection key={a.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                    <Icon className="h-6 w-6 text-blue-700" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 font-semibold text-slate-900">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{a.description}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.2}>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {audienceExtras.map((e) => (
              <div
                key={e}
                className="flex items-center gap-3 rounded-xl bg-blue-50 px-5 py-4 text-sm text-slate-700 ring-1 ring-blue-100"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                {e}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
