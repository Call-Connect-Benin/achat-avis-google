import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AnimatedSection from "@/components/animated-section";
import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Store,
  Building2,
  Utensils,
  Hotel,
  Home,
  Car,
  Scissors,
} from "lucide-react";

type Ville = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroLead: string;
  services: { title: string; description: string }[];
  sectors: { title: string; icon: typeof Store }[];
};

const villes: Ville[] = [
  {
    slug: "paris",
    title: "Gestion avis Google Paris",
    eyebrow: "Avis Google local",
    description:
      "La gestion des avis Google à Paris est cruciale pour se démarquer dans un marché extrêmement concurrentiel. Découvrez nos solutions.",
    heroLead:
      "À Paris, la concurrence sur le pack local Google Maps est parmi les plus intenses de France. Chaque avis compte pour se démarquer et attirer de nouveaux clients dans la capitale.",
    services: [
      {
        title: "Collecte d'avis Google",
        description:
          "Nous vous accompagnons dans la collecte d'avis authentiques pour votre établissement parisien, grâce à des outils conformes aux règles Google.",
      },
      {
        title: "Gestion de votre e-réputation",
        description:
          "Surveillez et répondez à tous vos avis pour maintenir une image positive auprès des Parisiens et des touristes.",
      },
      {
        title: "Amélioration de votre note",
        description:
          "Notre stratégie personnalisée vous aide à améliorer durablement votre note Google dans un marché très compétitif.",
      },
      {
        title: "Audit de fiche Google",
        description:
          "Analysez votre fiche Google Business Profile pour identifier les axes d'amélioration et optimiser votre visibilité.",
      },
    ],
    sectors: [
      { title: "Restaurants et cafés", icon: Utensils },
      { title: "Hôtels et hébergements", icon: Hotel },
      { title: "Commerces de proximité", icon: Store },
      { title: "Agences immobilières", icon: Building2 },
      { title: "Salons de coiffure", icon: Scissors },
      { title: "Professions libérales", icon: Home },
    ],
  },
  {
    slug: "lyon",
    title: "Collecte avis Google Lyon",
    eyebrow: "Avis Google local",
    description:
      "La collecte d'avis Google à Lyon permet aux entreprises de se démarquer dans une ville dynamique où la réputation en ligne est de plus en plus déterminante.",
    heroLead:
      "À Lyon, les quartiers de la Presqu'île, de la Croix-Rousse et de la Part-Dieu concentrent une activité économique dense. Une e-réputation solide vous démarque de la concurrence.",
    services: [
      {
        title: "Collecte d'avis Google",
        description:
          "Nous générons des campagnes de collecte d'avis adaptées au tissu économique lyonnais, du Vieux Lyon à la Confluence.",
      },
      {
        title: "Gestion de la réputation en ligne",
        description:
          "Surveillez votre réputation et répondez à vos avis pour renforcer votre position dans les quartiers lyonnais.",
      },
      {
        title: "Stratégie locale personnalisée",
        description:
          "Bénéficiez d'une stratégie adaptée aux spécificités du marché lyonnais et de ses acteurs économiques.",
      },
      {
        title: "Tableau de bord analytics",
        description:
          "Suivez l'évolution de vos avis et de votre note Google en temps réel depuis votre espace personnel.",
      },
    ],
    sectors: [
      { title: "Restaurants et bouchons", icon: Utensils },
      { title: "Hôtels et auberges", icon: Hotel },
      { title: "Commerces du centre-ville", icon: Store },
      { title: "Agences immobilières", icon: Building2 },
      { title: "Salons de coiffure", icon: Scissors },
      { title: "Garages automobiles", icon: Car },
    ],
  },
  {
    slug: "marseille",
    title: "Obtenir avis Google Marseille",
    eyebrow: "Avis Google local",
    description:
      "Obtenir des avis Google à Marseille est un levier de croissance pour les entreprises qui souhaitent se démarquer dans la deuxième ville de France.",
    heroLead:
      "Marseille est une ville où la proximité et le relationnel priment. Les avis Google sont le prolongement naturel de cette culture : ils renforcent la confiance et augmentent votre visibilité locale.",
    services: [
      {
        title: "Collecte d'avis Google",
        description:
          "Développez votre collecte d'avis à Marseille grâce à nos outils et notre expertise du marché local.",
      },
      {
        title: "Gestion de votre fiche Google",
        description:
          "Optimisez votre fiche Google Business Profile pour améliorer votre classement local dans les quartiers marseillais.",
      },
      {
        title: "Amélioration de votre note",
        description:
          "Stratégie personnalisée pour améliorer votre note Google et attirer plus de clients marseillais.",
      },
      {
        title: "Réponse aux avis",
        description:
          "Nous vous accompagnons pour répondre à tous vos avis et maintenir une image positive de votre établissement.",
      },
    ],
    sectors: [
      { title: "Restaurants et bars", icon: Utensils },
      { title: "Hôtels et résidences", icon: Hotel },
      { title: "Commerces de quartier", icon: Store },
      { title: "Agences immobilières", icon: Building2 },
      { title: "Salons de coiffure", icon: Scissors },
      { title: "Artisans et services", icon: Home },
    ],
  },
  {
    slug: "bordeaux",
    title: "Gestion avis clients Bordeaux",
    eyebrow: "Avis Google local",
    description:
      "La gestion des avis clients à Bordeaux est un atout majeur pour les entreprises de la région, notamment dans le secteur du tourisme et du vin.",
    heroLead:
      "Bordeaux est une ville où l'œnologie, le tourisme et le commerce local sont rois. Les avis Google sont le meilleur moyen de renforcer votre réputation auprès des visiteurs et des Bordelais.",
    services: [
      {
        title: "Collecte d'avis Google",
        description:
          "Collectez des avis authentiques pour votre établissement bordelais grâce à notre plateforme conforme aux règles Google.",
      },
      {
        title: "Gestion de la e-réputation",
        description:
          "Surveillez et répondez à vos avis pour maintenir une image positive dans la communauté bordelaise.",
      },
      {
        title: "Optimisation de votre fiche Google",
        description:
          "Optimisez votre fiche pour améliorer votre visibilité dans les résultats de recherche locaux.",
      },
      {
        title: "Stratégie tourisme et vin",
        description:
          "Bénéficiez d'une approche spécifique pour les établissements du secteur viticole et touristique bordelais.",
      },
    ],
    sectors: [
      { title: "Restaurants et bars à vin", icon: Utensils },
      { title: "Hôtels et chambres d'hôtes", icon: Hotel },
      { title: "Commerces et boutiques", icon: Store },
      { title: "Agences immobilières", icon: Building2 },
      { title: "Salons de coiffure", icon: Scissors },
      { title: "Domaines et cavistes", icon: Home },
    ],
  },
  {
    slug: "lille",
    title: "Réputation en ligne Lille",
    eyebrow: "Avis Google local",
    description:
      "La réputation en ligne à Lille est un enjeu majeur pour les entreprises de la métropole qui souhaitent se démarquer dans un marché dynamique.",
    heroLead:
      "Lille est une métropole économique dynamique où les commerces et entreprises sont très présents. Les avis Google sont votre meilleur atout pour vous démarquer dans ce marché compétitif.",
    services: [
      {
        title: "Collecte d'avis Google",
        description:
          "Développez votre collecte d'avis à Lille grâce à nos solutions adaptées aux entreprises de la métropole.",
      },
      {
        title: "Gestion de la réputation en ligne",
        description:
          "Surveillez et répondez à vos avis pour renforcer votre position dans la communauté lilloise.",
      },
      {
        title: "Amélioration de votre note Google",
        description:
          "Stratégie personnalisée pour améliorer votre note et votre visibilité sur Google Maps à Lille.",
      },
      {
        title: "Audit de fiche Google",
        description:
          "Analysez votre fiche Google pour identifier les opportunités d'amélioration dans la métropole lilloise.",
      },
    ],
    sectors: [
      { title: "Restaurants et brasseries", icon: Utensils },
      { title: "Hôtels et auberges", icon: Hotel },
      { title: "Commerces du centre", icon: Store },
      { title: "Agences immobilières", icon: Building2 },
      { title: "Salons de coiffure", icon: Scissors },
      { title: "Garages et services auto", icon: Car },
    ],
  },
  {
    slug: "toulouse",
    title: "Collecte avis Google Toulouse",
    eyebrow: "Avis Google local",
    description:
      "La collecte d'avis Google à Toulouse est un levier puissant pour les entreprises de la ville rose, notamment dans les secteurs high-tech et aéronautique.",
    heroLead:
      "Toulouse est une ville innovante et dynamique, surnommée la capitale aéronautique européenne. Les avis Google sont essentiels pour les entreprises qui souhaitent se démarquer dans cet écosystème compétitif.",
    services: [
      {
        title: "Collecte d'avis Google",
        description:
          "Collectez des avis authentiques pour votre établissement toulousain grâce à notre plateforme conforme aux règles Google.",
      },
      {
        title: "Gestion de la e-réputation",
        description:
          "Surveillez et répondez à vos avis pour maintenir une image positive auprès de la communauté toulousaine.",
      },
      {
        title: "Optimisation de votre fiche Google",
        description:
          "Optimisez votre fiche pour améliorer votre visibilité dans les résultats de recherche locaux toulousains.",
      },
      {
        title: "Stratégie tech et aéronautique",
        description:
          "Approche spécifique pour les entreprises des secteurs high-tech et aéronautique de la région toulousaine.",
      },
    ],
    sectors: [
      { title: "Restaurants et bars", icon: Utensils },
      { title: "Hôtels et résidences", icon: Hotel },
      { title: "Commerces et boutiques", icon: Store },
      { title: "Agences immobilières", icon: Building2 },
      { title: "Salons de coiffure", icon: Scissors },
      { title: "Entreprises tech", icon: Home },
    ],
  },
  {
    slug: "nantes",
    title: "Gestion avis Google Nantes",
    eyebrow: "Avis Google local",
    description:
      "La gestion des avis Google à Nantes est un atout majeur pour les entreprises de la ville, notamment dans le secteur portuaire et créatif.",
    heroLead:
      "Nantes est une ville créative et portuaire où l'innovation et le commerce local sont en pleine expansion. Les avis Google sont votre meilleur levier pour renforcer votre réputation auprès des Nantais.",
    services: [
      {
        title: "Collecte d'avis Google",
        description:
          "Développez votre collecte d'avis à Nantes grâce à nos solutions adaptées aux entreprises locales.",
      },
      {
        title: "Gestion de la réputation en ligne",
        description:
          "Surveillez et répondez à vos avis pour renforcer votre position dans la communauté nantaise.",
      },
      {
        title: "Amélioration de votre note Google",
        description:
          "Stratégie personnalisée pour améliorer votre note et votre visibilité sur Google Maps à Nantes.",
      },
      {
        title: "Audit de fiche Google",
        description:
          "Analysez votre fiche Google pour identifier les opportunités d'amélioration dans le marché nantais.",
      },
    ],
    sectors: [
      { title: "Restaurants et crêperies", icon: Utensils },
      { title: "Hôtels et auberges", icon: Hotel },
      { title: "Commerces de quartier", icon: Store },
      { title: "Agences immobilières", icon: Building2 },
      { title: "Salons de coiffure", icon: Scissors },
      { title: "Entreprises créatives", icon: Home },
    ],
  },
  {
    slug: "nice",
    title: "Obtenir avis Google Nice",
    eyebrow: "Avis Google local",
    description:
      "Obtenir des avis Google à Nice est essentiel pour les entreprises du secteur touristique et de l'hospitalité qui souhaitent renforcer leur réputation.",
    heroLead:
      "Nice est l'une des destinations touristiques les plus prisées de France. Les avis Google sont le premier critère de choix pour les visiteurs qui recherchent un hôtel, un restaurant ou une activité sur la Côte d'Azur.",
    services: [
      {
        title: "Collecte d'avis Google",
        description:
          "Collectez des avis authentiques pour votre établissement niçois grâce à notre plateforme conforme aux règles Google.",
      },
      {
        title: "Gestion de la réputation en ligne",
        description:
          "Surveillez et répondez à vos avis pour maintenir une image positive auprès des touristes et des Niçois.",
      },
      {
        title: "Optimisation de votre fiche Google",
        description:
          "Optimisez votre fiche pour améliorer votre visibilité dans les résultats de recherche locaux niçois.",
      },
      {
        title: "Stratégie tourisme et hospitalité",
        description:
          "Approche spécifique pour les établissements du secteur touristique et de l'hospitalité de la Côte d'Azur.",
      },
    ],
    sectors: [
      { title: "Restaurants et bars", icon: Utensils },
      { title: "Hôtels et palaces", icon: Hotel },
      { title: "Commerces et boutiques", icon: Store },
      { title: "Agences immobilières", icon: Building2 },
      { title: "Salons de coiffure", icon: Scissors },
      { title: "Activités touristiques", icon: Car },
    ],
  },
  {
    slug: "strasbourg",
    title: "Gestion avis Google Strasbourg",
    eyebrow: "Avis Google local",
    description:
      "La gestion des avis Google à Strasbourg est un atout majeur pour les entreprises de la capitale alsacienne, notamment dans le tourisme et les institutions européennes.",
    heroLead:
      "Strasbourg est une ville unique au cœur de l'Europe, siège du Parlement européen et capitale de la région Grand Est. Les avis Google sont essentiels pour les entreprises qui souhaitent rayonner auprès des visiteurs et des Européens.",
    services: [
      {
        title: "Collecte d'avis Google",
        description:
          "Collectez des avis authentiques pour votre établissement strasbourgeois grâce à notre plateforme conforme aux règles Google.",
      },
      {
        title: "Gestion de la réputation en ligne",
        description:
          "Surveillez et répondez à vos avis pour maintenir une image positive auprès des Strasbourgeois et des visiteurs européens.",
      },
      {
        title: "Optimisation de votre fiche Google",
        description:
          "Optimisez votre fiche pour améliorer votre visibilité dans les résultats de recherche locaux strasbourgeois.",
      },
      {
        title: "Stratégie tourisme et institutions",
        description:
          "Approche spécifique pour les établissements du secteur touristique et ceux proches des institutions européennes.",
      },
    ],
    sectors: [
      { title: "Restaurants et brasseries", icon: Utensils },
      { title: "Hôtels et résidences", icon: Hotel },
      { title: "Commerces du centre-ville", icon: Store },
      { title: "Agences immobilières", icon: Building2 },
      { title: "Salons de coiffure", icon: Scissors },
      { title: "Cabinets et professions libérales", icon: Home },
    ],
  },
  {
    slug: "montpellier",
    title: "Avis Google Montpellier",
    eyebrow: "Avis Google local",
    description:
      "La gestion des avis Google à Montpellier est un levier de croissance pour les entreprises de cette ville dynamique et étudiante du sud de la France.",
    heroLead:
      "Montpellier est l'une des villes les plus dynamiques de France, avec sa communauté estudiantine, son pôle médical et sa proximité avec la Méditerranée. Les avis Google sont votre meilleur atout pour vous démarquer dans ce marché en pleine croissance.",
    services: [
      {
        title: "Collecte d'avis Google",
        description:
          "Collectez des avis authentiques pour votre établissement montpelliérain grâce à notre plateforme conforme aux règles Google.",
      },
      {
        title: "Gestion de la réputation en ligne",
        description:
          "Surveillez et répondez à vos avis pour maintenir une image positive auprès des Montpelliérains et des étudiants.",
      },
      {
        title: "Amélioration de votre note Google",
        description:
          "Stratégie personnalisée pour améliorer votre note et votre visibilité sur Google Maps à Montpellier.",
      },
      {
        title: "Stratégie santé et étudiants",
        description:
          "Approche spécifique pour les entreprises des secteurs de la santé et celles ciblant la population étudiante.",
      },
    ],
    sectors: [
      { title: "Restaurants et bars", icon: Utensils },
      { title: "Hôtels et résidences", icon: Hotel },
      { title: "Commerces et boutiques", icon: Store },
      { title: "Agences immobilières", icon: Building2 },
      { title: "Salons de coiffure", icon: Scissors },
      { title: "Cabinets de santé", icon: Home },
    ],
  },
];

export function generateStaticParams() {
  return villes.map((v) => ({ slug: v.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ville = villes.find((v) => v.slug === slug);
  if (!ville) return {};
  return {
    title: `${ville.title} | Achat Avis Google`,
    description: ville.description,
  };
}

export default async function VillePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ville = villes.find((v) => v.slug === slug);
  if (!ville) notFound();

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-lime-400/[0.06]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d0f0a] via-[#101016] to-[#0d0d12]" />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
              <MapPin className="h-4 w-4" />
              {ville.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {ville.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {ville.heroLead}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-green-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
              >
                Nous contacter
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-lime-400/35 bg-[#0d0d12] px-8 py-3.5 text-base font-semibold text-slate-200 transition-all hover:bg-lime-400/[0.06]"
              >
                S'inscrire gratuitement
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Nos services à votre disposition
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              4 solutions pour améliorer votre e-réputation locale.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ville.services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <div className="relative h-full rounded-3xl bg-[#0d0d12] p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                  <span className="text-5xl font-extrabold text-green-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lime-400/[0.06] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Secteurs d'activité que nous accompagnons
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Nous travaillons avec tous les secteurs d'activité à {ville.title.split(" ").pop()}.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ville.sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <AnimatedSection key={sector.title} delay={index * 0.1}>
                  <div className="flex h-full items-center gap-4 rounded-3xl border border-lime-400/25 bg-[#0d0d12] p-6 transition-all duration-300 hover:shadow-lg hover:border-green-400">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10">
                        <Icon className="h-6 w-6 text-lime-300" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {sector.title}
                    </h3>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Pourquoi les avis Google sont essentiels à {ville.title.split(" ").pop()}
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              3 raisons pour lesquelles les avis Google transforment votre activité locale.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <div className="flex h-full items-start gap-4 rounded-3xl border border-lime-400/25 bg-[#0d0d12] p-8 transition-all duration-300 hover:shadow-lg hover:border-green-400">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10">
                    <CheckCircle2 className="h-6 w-6 text-lime-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Visibilité locale renforcée
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-300">
                    Les consommateurs de {ville.title.split(" ").pop()} consultent les avis avant de contacter un professionnel. Une fiche active et bien notée convertit davantage.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex h-full items-start gap-4 rounded-3xl border border-lime-400/25 bg-[#0d0d12] p-8 transition-all duration-300 hover:shadow-lg hover:border-green-400">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10">
                    <CheckCircle2 className="h-6 w-6 text-lime-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Confiance des clients
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-300">
                    Une note élevée et des avis détaillés rassurent les prospects et renforcent votre crédibilité sur le marché local.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="flex h-full items-start gap-4 rounded-3xl border border-lime-400/25 bg-[#0d0d12] p-8 transition-all duration-300 hover:shadow-lg hover:border-green-400">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10">
                    <CheckCircle2 className="h-6 w-6 text-lime-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Différenciation concurrentielle
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-300">
                    Dans un marché local compétitif, des avis authentiques vous démarquent de vos concurrents et attirent plus de clients.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ContentSections data={getContentSections("ville", ville.title, { ville: ville.title, ...(ville.slug === "paris" ? { imageSrc: "/image copy 27.png" } : ville.slug === "lyon" ? { imageSrc: "/image copy 28.png" } : ville.slug === "marseille" ? { imageSrc: "/image copy 29.png" } : ville.slug === "bordeaux" ? { imageSrc: "/image copy 30.png" } : ville.slug === "lille" ? { imageSrc: "/image copy 31.png" } : ville.slug === "toulouse" ? { imageSrc: "/image copy 32.png" } : ville.slug === "nantes" ? { imageSrc: "/image copy 33.png" } : ville.slug === "nice" ? { imageSrc: "/image copy 34.png" } : ville.slug === "strasbourg" ? { imageSrc: "/image copy 35.png" } : ville.slug === "montpellier" ? { imageSrc: "/image copy 37.png" } : {}) })} />

      <section className="bg-slate-900 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Prêt à améliorer votre e-réputation à {ville.title.split(" ").pop()} ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Notre équipe vous accompagne dans la collecte et la gestion de vos avis Google.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-lime-400/[0.06]0 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-400 hover:shadow-xl"
              >
                Nous contacter
                <ArrowRight className="ml-2 inline h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-600 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-slate-800"
              >
                S'inscrire gratuitement
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
