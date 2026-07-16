import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";

const services = [
  {
    title: "Collecte active d'avis",
    description:
      "Liens et QR codes personnalisés pour solliciter vos vrais clients sur Google, Trustpilot et Facebook.",
  },
  {
    title: "Surveillance et alertes",
    description:
      "Soyez notifié à chaque nouvel avis pour réagir rapidement, positives comme négatives.",
  },
  {
    title: "Réponses assistées",
    description:
      "Des réponses suggérées respectueuses et professionnelles pour engager vos clients et montrer votre écoute.",
  },
  {
    title: "Tableau de bord e-réputation",
    description:
      "Note moyenne, volume, tendance et sentiment centralisés sur toutes vos plateformes.",
  },
  {
    title: "Audit de fiche",
    description:
      "Analyse de votre présence locale et recommandations concrètes pour améliorer votre visibilité.",
  },
  {
    title: "Accompagnement de crise",
    description:
      "Un protocole clair pour répondre à une vague d'avis négatifs et protéger votre image.",
  },
];

import Image from "next/image";

export const metadata = {
  title: "E-réputation",
  description:
    "Gérez et améliorez votre e-réputation : collecte d'avis authentiques, surveillance, réponses et audit de fiche.",
};

export default function EreputationPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Prenez le contrôle de votre e-réputation
        </h1>
        <p className="mt-4 text-slate-600">
          Votre réputation en ligne se construit chaque jour. Nous vous aidons à
          la piloter avec des avis authentiques et une présence soignée.
        </p>
      </div>

      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl bg-slate-100">
        <Image
          src="/images/img-04.png"
          alt="Gestion de la e-réputation en entreprise"
          fill
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover"
        />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h3 className="font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.description}</p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-slate-500">
        Notre approche repose exclusivement sur des avis réels. Nous ne
        fabriquons ni ne vendons d'avis : chaque avis collecté émane d'un
        client ayant véritablement utilisé votre service.
      </p>
      <ContentSections data={getContentSections("principal", "E-réputation")} />

    </section>
  );
}
