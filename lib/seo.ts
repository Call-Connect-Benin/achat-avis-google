import { villes, metiers } from "@/lib/site";
import { slugify } from "@/lib/slug";

export type VilleSlug = { slug: string; name: string };
export type MetierSlug = { slug: string; name: string };

export function villeSlugs(): VilleSlug[] {
  return villes.map((name) => ({ slug: slugify(name), name }));
}

export function metierSlugs(): MetierSlug[] {
  return metiers.map((name) => ({ slug: slugify(name), name }));
}

export function villeFromSlug(slug: string): string | null {
  return villes.find((v) => slugify(v) === slug) ?? null;
}

export function metierFromSlug(slug: string): string | null {
  return metiers.find((m) => slugify(m) === slug) ?? null;
}
