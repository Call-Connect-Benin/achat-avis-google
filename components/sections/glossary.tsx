import AnimatedSection from "@/components/animated-section";
import SectionHeading from "@/components/section-heading";

const terms = [
  {
    term: "E-réputation",
    definition:
      "Image et notoriété d'une entreprise sur Internet, façonnée par les avis, commentaires et mentions publiques.",
  },
  {
    term: "Avis authentique",
    definition:
      "Retour laissé librement par un vrai client suite à une expérience réelle, sans contrepartie ni incitation.",
  },
  {
    term: "Google Business Profile",
    definition:
      "Fiche gratuite permettant aux entreprises locales d'apparaître sur Google et Maps et de recevoir des avis.",
  },
  {
    term: "SEO local",
    definition:
      "Optimisation visant à apparaître dans les résultats géolocalisés (recherches « près de chez moi »).",
  },
  {
    term: "Taux de transformation",
    definition:
      "Proportion de visiteurs d'une fiche qui deviennent clients. Les avis améliorent ce taux.",
  },
  {
    term: "Guides Locaux",
    definition:
      "Contributeurs Google récompensés pour la qualité de leurs avis et de leurs ajouts cartographiques.",
  },
  {
    term: "Social proof",
    definition:
      "Preuve sociale : tendance à suivre le comportement d'autrui pour guider ses propres décisions d'achat.",
  },
  {
    term: "QR code d'avis",
    definition:
      "Code scannable redirigeant directement le client vers le formulaire de dépôt d'avis d'une plateforme.",
  },
  {
    term: "Avis négatif",
    definition:
      "Commentaire critique, souvent noté 1 à 2 étoiles. Une réponse rapide et professionnelle limite son impact.",
  },
  {
    term: "Filtre de spam Google",
    definition:
      "Algorithme de Google qui masque les avis jugés artificiels ou suspects pour préserver la confiance.",
  },
  {
    term: "Note locale",
    definition:
      "Moyenne des avis affichée sur votre fiche, calculée sur l'ensemble des évaluations publiées.",
  },
  {
    term: "Preuve sociale",
    definition:
      "Tendance psychologique poussant à imiter le comportement d'un groupe pour guider ses décisions.",
  },
];

export default function Glossary() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <AnimatedSection>
        <SectionHeading
          eyebrow="Glossaire"
          title="Le lexique de l'e-réputation"
          subtitle="Les termes clés pour comprendre et piloter votre présence en ligne, expliqués simplement."
        />
      </AnimatedSection>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {terms.map((t, i) => (
          <AnimatedSection key={t.term} delay={(i % 3) * 0.1}>
            <div className="h-full rounded-2xl border border-white/10 bg-[#0d0d12] p-6">
              <h3 className="font-semibold text-white">{t.term}</h3>
              <p className="mt-2 text-sm text-slate-300">{t.definition}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
