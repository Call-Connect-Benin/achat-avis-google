import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import SectionHeading from "@/components/section-heading";
import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";
import { villeDataFromSlug } from "@/lib/villes-data";

const platforms = ["Google", "Trustpilot", "Facebook", "Pages Jaunes"];

export default function SeoLocationPage({
  name,
  kind,
  slug,
}: {
  name: string;
  kind: "ville" | "metier";
  slug?: string;
}) {
  const isVille = kind === "ville";
  const context = isVille ? "ville" : "metier";

  const title = isVille
    ? `Avis Google à ${name} : collectez des avis clients authentiques`
    : `Avis Google pour ${name} : boostez votre e-réputation`;

  const intro = isVille
    ? `À ${name}, la concurrence sur le pack local Google Maps est intense. Un volume d'avis authentiques et une bonne note moyenne font souvent la différence entre deux enseignes voisines.`
    : `En tant que ${name}, votre réputation en ligne conditionne une grande part de vos nouveaux clients. Des avis réguliers et authentiques renforcent la confiance et améliorent votre visibilité dans les recherches locales.`;

  const villeData = isVille && slug ? villeDataFromSlug(slug) : undefined;

  const contentData = getContentSections(context, name, {
    slug,
    site: name,
    eyebrow: isVille ? `Avis Google · ${name}` : `Avis Google · ${name}`,
    titleLeft: isVille ? `Votre réputation à ${name}` : `Votre e-réputation en tant que ${name}`,
    titleRight: isVille ? `Visible et crédible à ${name}` : `Démarquez-vous en tant que ${name}`,
    titleImage: `L'image de votre enseigne à ${name}`,
    titleIllustration: `La preuve en temps réel`,
    [isVille ? "ville" : "metier"]: name,
  });

  return (
    <section className="mx-auto max-w-3xl px-4 py-8">
      <AnimatedSection>
        <SectionHeading
          eyebrow={isVille ? "Avis Google local" : "Avis Google métier"}
          title={title}
          subtitle={intro}
        />
      </AnimatedSection>

      {isVille && villeData && (
        <AnimatedSection delay={0.05}>
          <div className="mt-6 rounded-2xl border border-white/10 bg-[#0d0d12] p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Spécificités de {villeData.name}</p>
            <div className="mt-3 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm font-medium text-white">Population</p>
                <p className="text-sm text-slate-300">{villeData.population}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Forces locales</p>
                <p className="text-sm text-slate-300">{villeData.specialty}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Conseil local</p>
                <p className="text-sm text-slate-300">{villeData.localTip}</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-[#111118] p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Exemple concret</p>
              <p className="mt-1 text-sm text-slate-200">{villeData.exampleBusiness}</p>
            </div>
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection delay={0.1}>
        <div className="mt-6 space-y-5 text-slate-200">
          <h2 className="text-2xl font-semibold text-white">
            Pourquoi les avis comptent pour vous
          </h2>
          <p>
            {isVille
              ? `Les consommateurs de ${name} consultent les avis avant de contacter un professionnel. Une fiche active, bien notée et régulièrement mise à jour apparaît en tête du pack local et convertit davantage.`
              : `Vos clients potentiels lisent les avis avant de vous choisir. Une fiche crédible, avec des avis variés et récents, rassure et vous démarque de vos confrères ${name.toLowerCase()}s.`}
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Augmentez votre taux de conversion sur les recherches locales.</li>
            <li>Progressz dans le classement du pack local Google Maps.</li>
            <li>Construisez une e-réputation durable, basée sur de vrais clients.</li>
          </ul>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="mt-6 rounded-2xl bg-yellow-300/[0.06] p-6">
          <h2 className="text-xl font-semibold text-white">
            Nos outils gratuits
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Démarrez sans carte bancaire : générez un QR code de collecte et
            auditez votre fiche en quelques secondes.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/outils/generateur-avis"
              className="rounded-full bg-lime-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-lime-700"
            >
              Générateur de QR code
            </Link>
            <Link
              href="/outils/audit-fiche"
              className="rounded-full border border-lime-300 bg-[#0d0d12] px-5 py-2 text-sm font-semibold text-slate-200 transition-colors hover:bg-yellow-300/[0.06]"
            >
              Audit de fiche
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-white">
            Plateformes prises en charge
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {platforms.map((p) => (
              <span
                key={p}
                className="rounded-full bg-[#0d0d12] px-3 py-1 text-sm text-slate-200 ring-1 ring-white/10"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {isVille && villeData && villeData.faqs && villeData.faqs.length > 0 && (
        <AnimatedSection delay={0.35}>
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-white">
              FAQ — Avis Google à {villeData.name}
            </h2>
            <div className="mt-4 space-y-3">
              {villeData.faqs.map((f, i) => (
                <details
                  key={i}
                  className="group rounded-2xl bg-[#0d0d12] p-5 shadow-sm transition hover:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-white">
                    {f.question}
                    <span className="ml-4 text-slate-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-300">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}

      <ContentSections data={contentData} />

      <AnimatedSection delay={0.4}>
        <div className="mt-6 flex flex-col items-center gap-3 rounded-2xl bg-slate-900 p-6 text-center sm:flex-row sm:justify-between">
          <p className="font-semibold text-white">
            Prêt à collecter vos premiers avis {isVille ? `à ${name}` : `en tant que ${name.toLowerCase()}`} ?
          </p>
          <Link
            href="/tarifs"
            className="rounded-full bg-[#0d0d12] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#17171f]"
          >
            Démarrer gratuitement
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
}
