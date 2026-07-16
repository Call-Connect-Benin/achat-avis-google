import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/lib/blog";
import { villeSlugs, metierSlugs } from "@/lib/seo";

const staticPaths = [
  "",
  "/tarifs",
  "/contact",
  "/e-reputation",
  "/obtenir-plus-avis-google",
  "/collecte-avis-google",
  "/gestion-avis-google",
  "/reputation-en-ligne",
  "/audit-fiche-google",
  "/fonctionnement",
  "/achat-avis-google",
  "/outils/generateur-avis",
  "/outils/audit-fiche",
  "/mentions-legales",
  "/confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = staticPaths.map((p) => ({
    url: `${site.url}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  const blogUrls = articles.map((a) => ({
    url: `${site.url}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const villeUrls = villeSlugs().map((v) => ({
    url: `${site.url}/villes/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const metierUrls = metierSlugs().map((m) => ({
    url: `${site.url}/metiers/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const methodSlugs = [
    "lien-avis-google",
    "qr-code-avis-google",
    "demande-avis-par-sms",
    "demande-avis-par-email",
    "carte-nfc-avis-google",
    "plaque-qr-code-avis",
    "automatisation-avis-clients",
    "questionnaire-satisfaction-client",
  ];

  const gestionSlugs = [
    "repondre-avis-google",
    "repondre-avis-negatif",
    "signaler-faux-avis-google",
    "supprimer-avis-google",
    "avis-google-ne-saffiche-pas",
    "avis-google-disparus",
    "note-google-baisse",
    "recuperer-avis-clients",
  ];

  const secteurSlugs = [
    "avis-google-restaurant",
    "avis-google-artisan",
    "avis-google-garage",
    "avis-google-hotel",
    "avis-google-agence-immobiliere",
    "avis-google-salon-coiffure",
    "avis-google-institut-beaute",
    "avis-google-cabinet-dentaire",
    "avis-google-commerce",
    "avis-google-entreprise-btp",
  ];

  const franceSlugs = [
    "paris",
    "lyon",
    "marseille",
    "bordeaux",
    "lille",
    "toulouse",
    "nantes",
    "nice",
    "strasbourg",
    "montpellier",
  ];

  const methodUrls = methodSlugs.map((slug) => ({
    url: `${site.url}/methodes/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const gestionUrls = gestionSlugs.map((slug) => ({
    url: `${site.url}/gestion/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const secteurUrls = secteurSlugs.map((slug) => ({
    url: `${site.url}/secteurs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const franceUrls = franceSlugs.map((slug) => ({
    url: `${site.url}/france/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...base,
    ...blogUrls,
    ...villeUrls,
    ...metierUrls,
    ...methodUrls,
    ...gestionUrls,
    ...secteurUrls,
    ...franceUrls,
  ];
}
