import Pricing from "@/components/sections/pricing";
import Cta from "@/components/sections/cta";
import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";

export const metadata = {
  title: "Tarifs",
  description:
    "Forfaits Achat Avis Google pour collecter et gérer des avis clients authentiques. Sans engagement.",
};

export default function TarifsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-16 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Des tarifs adaptés à chaque ambition
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-600">
          Que vous soyez un indépendant ou un réseau multi-établissements,
          choisissez la formule qui collecte vos avis réels.
        </p>
      </section>
      <ContentSections data={getContentSections("principal", "Tarifs")} />
      <Pricing />
      <Cta />
    </>
  );
}
