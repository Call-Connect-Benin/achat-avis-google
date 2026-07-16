import { notFound } from "next/navigation";
import { metierSlugs, metierFromSlug } from "@/lib/seo";
import { site } from "@/lib/site";
import SeoLocationPage from "@/components/seo-location-page";

export function generateStaticParams() {
  return metierSlugs().map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = metierFromSlug(slug);
  if (!name) return {};
  return {
    title: `Avis Google pour ${name} | ${site.name}`,
    description: `Collectez des avis clients authentiques pour votre activité de ${name}. Outils gratuits de collecte et d'audit de fiche pour développer votre e-réputation.`,
  };
}

export default async function MetierPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const name = metierFromSlug(slug);
  if (!name) notFound();

  return <SeoLocationPage name={name} kind="metier" slug={slug} />;
}
