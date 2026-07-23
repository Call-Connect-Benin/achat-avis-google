import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AnimatedSection from "@/components/animated-section";
import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";
import Link from "next/link";
import {
  MessageSquare,
  AlertTriangle,
  Flag,
  Trash2,
  Search,
  TrendingDown,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type Gestion = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroLead: string;
  icon: LucideIcon;
  steps: { title: string; description: string }[];
  tips: { title: string; description: string }[];
  warning?: { title: string; text: string };
};

const gestions: Gestion[] = [
  {
    slug: "repondre-avis-google",
    title: "Répondre aux avis Google",
    eyebrow: "Gestion des avis",
    description:
      "Apprenez à répondre à tous types d'avis Google avec professionnalisme pour renforcer votre e-réputation.",
    heroLead:
      "Répondre à vos avis Google, positifs comme négatifs, montre que vous écoutez vos clients. Une réponse bien rédigée transforme une critique en preuve de sérieux.",
    icon: MessageSquare,
    steps: [
      {
        title: "Lisez l'avis attentivement",
        description:
          "Comprenez le fond avant de répondre, sans réagir à chaud.",
      },
      {
        title: "Remerciez et personnalisez",
        description:
          "Adressez-vous au client par son prénom et remerciez-le pour son retour.",
      },
      {
        title: "Apportez une réponse adaptée",
        description:
          "Proposez une solution concrète aux problèmes soulevés, sans être défensif.",
      },
      {
        title: "Publiez et suivez",
        description:
          "Répondez rapidement, puis vérifiez que l'action promise a bien été prise.",
      },
    ],
    tips: [
      {
        title: "Répondez sous 24 à 48 h",
        description:
          "La rapidité montre votre réactivité aux futurs prospects.",
      },
      {
        title: "Restez professionnel et courtois",
        description:
          "Même face à une critique injuste, gardez votre calme.",
      },
      {
        title: "Ne copiez jamais-collez",
        description:
          "Les réponses génériques nuisent à votre crédibilité.",
      },
      {
        title: "Poursuivez en privé",
        description:
          "Pour les cas sensibles, proposez un contact direct.",
      },
    ],
    warning: {
      title: "À éviter",
      text: "Ne proposez jamais une contrepartie financière en échange de la modification ou suppression d'un avis : cela enfreint les règles de Google.",
    },
  },
  {
    slug: "repondre-avis-negatif",
    title: "Répondre à un avis négatif",
    eyebrow: "Gestion des avis",
    description:
      "Transformez les avis négatifs en opportunités grâce à des réponses professionnelles et rassurantes.",
    heroLead:
      "Un avis négatif bien géré rassure plus vos prospects qu'un avis positif sans réponse. Montrez votre capacité à écouter et à corriger.",
    icon: AlertTriangle,
    steps: [
      {
        title: "Ne réagissez pas à chaud",
        description:
          "Laissez passer quelques heures pour répondre avec sang-froid.",
      },
      {
        title: "Reconnaissez le problème",
        description:
          "Validez le ressenti du client sans chercher à le contredire.",
      },
      {
        title: "Proposez une solution",
        description:
          "Invitez le client à vous contacter pour résoudre concrètement la situation.",
      },
      {
        title: "Agissez et faites un suivi",
        description:
          "Corrigez en interne et informez le client de l'évolution.",
      },
    ],
    tips: [
      {
        title: "Montrez de l'empathie",
        description:
          "Un ton humain apaise bien plus qu'un discours corporate.",
      },
      {
        title: "Soyez spécifique",
        description:
          "Citez les mesures concrètes prises pour éviter la répétition.",
      },
      {
        title: "Publiquement et en privé",
        description:
          "La réponse rassure, le suivi en privé fidélise.",
      },
      {
        title: "Apprenez de chaque avis",
        description:
          "Alimentez votre amélioration continue à partir des retours.",
      },
    ],
    warning: {
      title: "À éviter",
      text: "Ne supprimez jamais un avis négatif légitime : tenter de le faire disparaître enfreint les règles de Google et peut nuire à votre crédibilité.",
    },
  },
  {
    slug: "signaler-faux-avis-google",
    title: "Signaler un faux avis Google",
    eyebrow: "Gestion des avis",
    description:
      "Identifiez et signalez un faux avis Google pour protéger votre e-réputation de manière conforme.",
    heroLead:
      "Les faux avis polluent votre fiche et faussent votre note. Apprenez à les repérer et à les signaler à Google par les bons canaux.",
    icon: Flag,
    steps: [
      {
        title: "Identifiez le faux avis",
        description:
          "Pas de détail, ton promotionnel ou profil suspect : autant d'indicateurs.",
      },
      {
        title: "Vérifiez la légitimité",
        description:
          "Contrôlez que le client n'a pas réellement utilisé votre service.",
      },
      {
        title: "Signalez via Google",
        description:
          "Utilisez le menu « Signaler un avis » sous l'avis concerné.",
      },
      {
        title: "Fournissez des preuves",
        description:
          "Joignez tout élément justifiant la demande de suppression.",
      },
    ],
    tips: [
      {
        title: "Agissez rapidement",
        description:
          "Plus un faux avis reste, plus il influence votre note.",
      },
      {
        title: "Restez factuel",
        description:
          "Présentez des preuves, pas des émotions, à Google.",
      },
      {
        title: "Ne répondez pas agressivement",
        description:
          "Une réponse calme et professionnelle vaut mieux qu'une polémique.",
      },
      {
        title: "Surveillez régulièrement",
        description:
          "Un suivi continu limite l'impact des contenus frauduleux.",
      },
    ],
    warning: {
      title: "À éviter",
      text: "Ne demandez jamais à des tiers de « nettoyer » vos avis par des moyens non conformes : cela peut entraîner la suspension de votre fiche Google.",
    },
  },
  {
    slug: "supprimer-avis-google",
    title: "Supprimer un avis Google",
    eyebrow: "Gestion des avis",
    description:
      "Comprenez quand et comment demander la suppression d'un avis Google inapproprié, conformément aux règles.",
    heroLead:
      "Google supprime un avis uniquement s'il enfreint ses règles. Découvrez les critères et la procédure pour faire une demande recevable.",
    icon: Trash2,
    steps: [
      {
        title: "Vérifiez les règles Google",
        description:
          "Spam, langage haineux, contenu hors sujet : autant de motifs valides.",
      },
      {
        title: "Repérez la violation",
        description:
          "Relisez l'avis à l'aune des politiques de contenu de Google.",
      },
      {
        title: "Demandez la suppression",
        description:
          "Signalez l'avis depuis votre compte professionnel ou via l'option dédiée.",
      },
      {
        title: "Patientez et relancez",
        description:
          "Google traite sous quelques jours ; relancez si nécessaire.",
      },
    ],
    tips: [
      {
        title: "Vous ne pouvez pas supprimer",
        description:
          "Vous ne pouvez pas effacer un avis vous-même ; seule Google le peut.",
      },
      {
        title: "Documentez votre demande",
        description:
          "Des preuves claires accélèrent le traitement.",
      },
      {
        title: "Privilégiez la réponse",
        description:
          "Beaucoup d'avis désagréables restent conformes et ne seront pas retirés.",
      },
      {
        title: "Encouragez les avis positifs",
        description:
          "La meilleure parade est un volume d'avis authentiques élevé.",
      },
    ],
    warning: {
      title: "À éviter",
      text: "Tenter de faire supprimer un avis légitime sous un faux prétexte contrevient aux règles de Google et peut aggraver la situation.",
    },
  },
  {
    slug: "avis-google-ne-saffiche-pas",
    title: "Avis Google non affiché",
    eyebrow: "Gestion des avis",
    description:
      "Dépannez quand un avis Google ne s'affiche pas sur votre fiche et comprenez les délais de modération.",
    heroLead:
      "Vous avez reçu un avis qui n'apparaît pas ? Plusieurs causes expliquent ce décalage. Voici comment vérifier et agir.",
    icon: Search,
    steps: [
      {
        title: "Vérifiez le délai",
        description:
          "Google peut mettre jusqu'à 48 h pour afficher un avis après modération.",
      },
      {
        title: "Contrôlez la conformité",
        description:
          "Un avis contrevenant aux règles peut être filtré automatiquement.",
      },
      {
        title: "Checkez la connexion",
        description:
          "L'avis peut apparaître sur un appareil et pas un autre selon la synchronisation.",
      },
      {
        title: "Signalez le problème",
        description:
          "Si le délai est dépassé, contactez le support Google.",
      },
    ],
    tips: [
      {
        title: "Ne paniquez pas",
        description:
          "Un délai de quelques heures est tout à fait normal.",
      },
      {
        title: "Évitez la sollicitation en masse",
        description:
          "Trop d'avis simultanés peuvent déclencher un filtre anti-spam.",
      },
      {
        title: "Vérifiez sur plusieurs supports",
        description:
          "Application et navigateur peuvent différer.",
      },
      {
        title: "Gardez une trace",
        description:
          "Notez la date et l'auteur de l'avis manquant.",
      },
    ],
    warning: {
      title: "À éviter",
      text: "Ne demandez pas à vos clients de publier le même avis plusieurs fois : cela peut être perçu comme du spam et conduire à un filtrage.",
    },
  },
  {
    slug: "avis-google-disparus",
    title: "Avis Google disparus",
    eyebrow: "Gestion des avis",
    description:
      "Que faire quand des avis Google disparaissent soudainement de votre fiche : causes et actions.",
    heroLead:
      "La disparition soudaine d'avis inquiète, mais elle a souvent une explication. Identifiez la cause et les étapes pour récupérer vos avis.",
    icon: TrendingDown,
    steps: [
      {
        title: "Vérifiez un filtrage automatique",
        description:
          "Google filtre parfois les avis jugés non authentiques.",
      },
      {
        title: "Consultez vos notifications",
        description:
          "Un email de Google peut expliquer la suppression.",
      },
      {
        title: "Identifiez un motif de règle",
        description:
          "Contenu rémunéré, hors sujet ou spam supprimé par Google.",
      },
      {
        title: "Contactez le support",
        description:
          "Ouvrez un dossier si des avis légitimes ont disparu sans raison.",
      },
    ],
    tips: [
      {
        title: "Ne recréez pas la fiche",
        description:
          "Cela compliquerait la restauration des avis.",
      },
      {
        title: "Diversifiez vos sources",
        description:
          "Ayez aussi des avis sur d'autres plateformes.",
      },
      {
        title: "Surveillez régulièrement",
        description:
          "Un suivi hebdomadaire repère vite les anomalies.",
      },
      {
        title: "Documentez l'historique",
        description:
          "Conservez une capture de votre note avant la chute.",
      },
    ],
    warning: {
      title: "À éviter",
      text: "Évitez les services promettant de « restaurer » vos avis moyennant paiement : ils sont souvent non conformes et risqués.",
    },
  },
  {
    slug: "note-google-baisse",
    title: "Note Google baisse",
    eyebrow: "Gestion des avis",
    description:
      "Comprenez les causes d'une baisse de votre note Google et les actions pour la redresser durablement.",
    heroLead:
      "Une chute de note Google inquiète, mais elle est souvent réversible. Analysez les causes et relancez votre collecte d'avis positifs.",
    icon: TrendingDown,
    steps: [
      {
        title: "Analysez la tendance",
        description:
          "Comparez le volume et le sentiment récents de vos avis.",
      },
      {
        title: "Identifiez les causes",
        description:
          "Avis négatifs, baisse de collecte ou changement de perception client.",
      },
      {
        title: "Corrigez en interne",
        description:
          "Traitez les problèmes pointés par les clients mécontents.",
      },
      {
        title: "Relancez la collecte",
        description:
          "Sollicitez vos clients satisfaits pour équilibrer la note.",
      },
    ],
    tips: [
      {
        title: "Ne brusquez pas la note",
        description:
          "Un pic d'avis positifs artificiels déclenche des filtres.",
      },
      {
        title: "Répondez aux avis négatifs",
        description:
          "Cela limite leur impact sur les prospects.",
      },
      {
        title: "Améliorez le service",
        description:
          "La vraie solution est une meilleure expérience client.",
      },
      {
        title: "Soyez régulier",
        description:
          "Une collecte continue lisse les fluctuations.",
      },
    ],
    warning: {
      title: "À éviter",
      text: "Méfiez-vous des offres de « remontée de note express » : acheter des avis enfreint les règles de Google et expose votre fiche.",
    },
  },
  {
    slug: "recuperer-avis-clients",
    title: "Récupérer avis clients",
    eyebrow: "Gestion des avis",
    description:
      "Stratégies pour reconquérir vos clients perdus et relancer la collecte d'avis Google de façon authentique.",
    heroLead:
      "Les clients qui se sont éloignés sont une opportunité. Reconquérez-les et transformez leur retour en avis positifs sur Google.",
    icon: HeartHandshake,
    steps: [
      {
        title: "Segmentez vos clients perdus",
        description:
          "Identifiez ceux inactifs depuis plusieurs mois.",
      },
      {
        title: "Relancez avec soin",
        description:
          "Un email ou SMS personnalisé pour renouer le contact.",
      },
      {
        title: "Offrez une raison de revenir",
        description:
          "Avantage, nouveauté ou prise en compte de leur retour.",
      },
      {
        title: "Sollicitez leur avis",
        description:
          "Une fois satisfaits, invitez-les à publier sur Google.",
      },
    ],
    tips: [
      {
        title: "Personnalisez la relance",
        description:
          "Une approche générique a peu d'effet.",
      },
      {
        title: "Montrez que vous avez évolué",
        description:
          "Citez les améliorations issues de leurs retours passés.",
      },
      {
        title: "Restez authentique",
        description:
          "Aucune pression, laissez le client libre de son avis.",
      },
      {
        title: "Mesurez vos progrès",
        description:
          "Suivez le taux de retour et de nouveaux avis.",
      },
    ],
    warning: {
      title: "À éviter",
      text: "N'incitez jamais à laisser un avis positif contre une récompense : cela viole les règles de Google et fausse votre e-réputation.",
    },
  },
];

export function generateStaticParams() {
  return gestions.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gestion = gestions.find((g) => g.slug === slug);
  if (!gestion) return {};
  return {
    title: gestion.title,
    description: gestion.description,
  };
}

export default async function GestionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const gestion = gestions.find((g) => g.slug === slug);
  if (!gestion) notFound();

  const Icon = gestion.icon;

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-lime-400/[0.06]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d0f0a] via-[#101016] to-[#0d0d12]" />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
              <Icon className="h-4 w-4" />
              {gestion.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {gestion.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {gestion.heroLead}
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

      <section className="bg-lime-400/[0.06] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Guide étape par étape
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Suivez ces 4 étapes pour gérer efficacement votre situation.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gestion.steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.1}>
                <div className="relative h-full rounded-3xl bg-[#0d0d12] p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                  <span className="text-5xl font-extrabold text-green-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-300">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {gestion.warning && (
        <section className="py-8 sm:py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="flex items-start gap-4 rounded-3xl border border-lime-400/35 bg-lime-400/[0.06] p-6 sm:p-8">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10">
                    <AlertTriangle className="h-6 w-6 text-lime-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-lime-300">
                    {gestion.warning.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-300">
                    {gestion.warning.text}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Conseils et bonnes pratiques
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Les réflexes à adopter pour protéger et améliorer votre e-réputation.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {gestion.tips.map((tip, index) => (
              <AnimatedSection key={tip.title} delay={index * 0.1}>
                <div className="flex h-full items-start gap-4 rounded-3xl border border-lime-400/25 bg-[#0d0d12] p-8 transition-all duration-300 hover:shadow-lg hover:border-green-400">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10">
                      <CheckCircle2 className="h-6 w-6 text-lime-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {tip.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-300">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <ContentSections
        data={getContentSections("gestion", gestion.title, {
          slug: gestion.slug,
          site: gestion.title,
          eyebrow: gestion.eyebrow,
          titleLeft: gestion.title,
          titleRight: gestion.heroLead,
          titleImage: `Visualisez ${gestion.title}`,
          titleIllustration: `La preuve : ${gestion.title}`,
          ...(gestion.slug === "repondre-avis-google" ? { imageSrc: "/image copy 9.png" } : gestion.slug === "repondre-avis-negatif" ? { imageSrc: "/image copy 10.png" } : gestion.slug === "signaler-faux-avis-google" ? { imageSrc: "/image copy 11.png" } : gestion.slug === "supprimer-avis-google" ? { imageSrc: "/image copy 12.png" } : gestion.slug === "avis-google-ne-saffiche-pas" ? { imageSrc: "/image copy 13.png" } : gestion.slug === "avis-google-disparus" ? { imageSrc: "/image copy 14.png" } : gestion.slug === "note-google-baisse" ? { imageSrc: "/image copy 15.png" } : gestion.slug === "recuperer-avis-clients" ? { imageSrc: "/image copy 16.png" } : {}),
        })}
      />

      <section className="bg-slate-900 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Besoin d'aide pour {gestion.title.toLowerCase()} ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Notre équipe vous accompagne dans la gestion de votre e-réputation.
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
