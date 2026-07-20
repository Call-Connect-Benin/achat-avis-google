import AnimatedSection from "@/components/animated-section";

const stats = [
  { value: "2000+", label: "Entreprises accompagnées", detail: "Tous secteurs, de l'artisan seul à la PME multi-sites." },
  { value: "50 000+", label: "Avis authentiques collectés", detail: "Uniquement issus de vrais clients après prestation." },
  { value: "4.8/5", label: "Note moyenne clients", detail: "Mesurée sur l'ensemble de nos utilisateurs actifs." },
  { value: "98%", label: "Taux de satisfaction", detail: "Ils renouvellent leur offre ou la recommandent." },
];

export default function Stats() {
  return (
    <section className="bg-blue-600 py-16">
      <AnimatedSection>
        <div className="mx-auto max-w-6xl px-4">
          <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-blue-200">
            Une méthode éprouvée, des résultats mesurables
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-white">{s.value}</p>
                <p className="mt-2 text-sm font-semibold text-blue-50">{s.label}</p>
                <p className="mt-1 text-xs text-blue-200">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
