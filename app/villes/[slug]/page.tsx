import { notFound } from "next/navigation";
import { villeSlugs, villeFromSlug } from "@/lib/seo";
import { site } from "@/lib/site";
import SeoLocationPage from "@/components/seo-location-page";

export function generateStaticParams() {
  return villeSlugs().map((v) => ({ slug: v.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = villeFromSlug(slug);
  if (!name) return {};
  return {
    title: `Avis Google à ${name} | ${site.name}`,
    description: `Collectez des avis clients authentiques à ${name}. Outils gratuits de collecte et d'audit de fiche pour développer votre e-réputation locale.`,
  };
}

export default async function VillePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = villeFromSlug(slug);
  if (!name) notFound();

  return <SeoLocationPage name={name} kind="ville" slug={slug} />;
}
