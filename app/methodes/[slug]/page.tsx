import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AnimatedSection from "@/components/animated-section";
import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";
import Link from "next/link";
import {
  Link as LinkIcon,
  QrCode,
  Smartphone,
  Mail,
  Nfc,
  LayoutTemplate,
  RefreshCw,
  ClipboardList,
  Star,
  MessageSquare,
  Users,
  TrendingUp,
  Shield,
  CreditCard,
  ScanLine,
  Clock,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type Method = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroLead: string;
  icon: LucideIcon;
  steps: { title: string; description: string }[];
  benefits: { icon: LucideIcon; title: string; description: string }[];
  faq: { q: string; a: string }[];
};

const methods: Method[] = [
  {
    slug: "lien-avis-google",
    title: "Lien d'avis Google",
    eyebrow: "Méthode de collecte",
    description:
      "Créez et partagez un lien direct vers votre page d'avis Google pour recueillir facilement les avis de vos clients.",
    heroLead:
      "Le lien d'avis Google est le moyen le plus simple de solliciter un avis. En un clic, vos clients sont redirigés vers votre fiche Google pour laisser leur évaluation.",
    icon: LinkIcon,
    steps: [
      {
        title: "Générez votre lien personnalisé",
        description:
          "Créez un lien court et personnalisé depuis votre tableau de bord en quelques secondes.",
      },
      {
        title: "Partagez-le au bon moment",
        description:
          "Envoyez-le par email, SMS ou intégrez-le à votre signature après chaque prestation.",
      },
      {
        title: "Vos clients laissent leur avis",
        description:
          "Ils sont redirigés directement vers votre fiche Google et notent leur expérience en un clic.",
      },
    ],
    benefits: [
      {
        icon: LinkIcon,
        title: "Partage instantané",
        description:
          "Un seul lien à diffuser sur tous vos canaux : email, SMS, réseaux sociaux et signature.",
      },
      {
        icon: Smartphone,
        title: "Mobile-friendly",
        description:
          "Le lien s'ouvre parfaitement sur smartphone, là où vos clients sont les plus actifs.",
      },
      {
        icon: Star,
        title: "Suivi en temps réel",
        description:
          "Consultez le nombre de clics et d'avis générés depuis votre tableau de bord.",
      },
    ],
    faq: [
      {
        q: "Le lien d'avis Google est-il conforme aux règles de Google ?",
        a: "Oui. Nous redirigeons simplement vos clients vers votre fiche officielle. Aucun avis n'est rédigé à leur place.",
      },
      {
        q: "Puis-je personnaliser le lien ?",
        a: "Oui. Vous pouvez créer un lien court incluant le nom de votre enseigne pour le rendre plus crédible.",
      },
      {
        q: "Le lien expire-t-il ?",
        a: "Non. Votre lien de collecte reste actif aussi longtemps que votre compte, sans limite de clics.",
      },
    ],
  },
  {
    slug: "qr-code-avis-google",
    title: "QR code avis Google",
    eyebrow: "Méthode de collecte",
    description:
      "Générez un QR code avis Google à imprimer sur vos tickets de caisse, flyers et vitrines pour collecter plus d'avis.",
    heroLead:
      "Le QR code avis Google transforme n'importe quel support physique en point de collecte. Vos clients scannent et laissent leur avis instantanément.",
    icon: QrCode,
    steps: [
      {
        title: "Générez votre QR code",
        description:
          "Créez un QR code unique lié à votre fiche Google en un clic depuis votre espace.",
      },
      {
        title: "Imprimez et affichez",
        description:
          "Posez-le sur vos factures, flyers, comptoirs et vitrines en magasin.",
      },
      {
        title: "Vos clients scannent",
        description:
          "Ils ouvrent directement la page d'avis Google et notent leur expérience.",
      },
    ],
    benefits: [
      {
        icon: QrCode,
        title: "Zéro friction",
        description:
          "Un scan suffit, sans taper d'adresse ni chercher votre fiche manuellement.",
      },
      {
        icon: ScanLine,
        title: "Multi-supports",
        description:
          "Parfait pour les reçus, les menus, les affiches et les vitrines.",
      },
      {
        icon: Smartphone,
        title: "Compatible tous mobiles",
        description:
          "Fonctionne avec l'appareil photo de n'importe quel smartphone récent.",
      },
    ],
    faq: [
      {
        q: "Le QR code mène-t-il directement au formulaire d'avis ?",
        a: "Oui, il ouvre la fenêtre de notation Google, prête à l'emploi sur l'appareil du client.",
      },
      {
        q: "Puis-je modifier le QR code après impression ?",
        a: "Le QR code pointe vers votre lien de collecte, modifiable à tout moment sans réimprimer si vous utilisez un lien dynamique.",
      },
      {
        q: "Le QR code est-il gratuit ?",
        a: "Oui, la génération de QR code est incluse dans tous nos forfaits.",
      },
    ],
  },
  {
    slug: "demande-avis-par-sms",
    title: "Demande d'avis par SMS",
    eyebrow: "Méthode de collecte",
    description:
      "Envoyez des demandes d'avis par SMS à vos clients après chaque achat ou prestation pour maximiser vos retours.",
    heroLead:
      "Le SMS affiche un taux d'ouverture supérieur à 95 %. Sollicitez vos clients au moment idéal, juste après une prestation réussie.",
    icon: Smartphone,
    steps: [
      {
        title: "Renseignez le numéro du client",
        description:
          "Ajoutez le contact à la suite d'une vente ou d'une intervention.",
      },
      {
        title: "Envoyez la demande personnalisée",
        description:
          "Un SMS court avec votre lien d'avis, au nom de votre enseigne.",
      },
      {
        title: "Le client clique et note",
        description:
          "Il est redirigé vers Google et laisse son avis en quelques secondes.",
      },
    ],
    benefits: [
      {
        icon: Smartphone,
        title: "Taux d'ouverture élevé",
        description: "Plus de 95 % des SMS sont lus dans les 3 minutes qui suivent.",
      },
      {
        icon: MessageSquare,
        title: "Personnalisable",
        description:
          "Insérez le prénom du client et le contexte de la prestation.",
      },
      {
        icon: Clock,
        title: "Au bon moment",
        description:
          "Déclenchez l'envoi automatiquement après l'achat ou le rendez-vous.",
      },
    ],
    faq: [
      {
        q: "L'envoi de SMS est-il conforme au RGPD ?",
        a: "Oui, à condition d'avoir recueilli le consentement du client. Nous gérons la désinscription automatiquement.",
      },
      {
        q: "Combien coûte l'envoi de SMS ?",
        a: "Les SMS sont facturés à l'unité selon votre forfait, sans engagement.",
      },
      {
        q: "Puis-je planifier les envois ?",
        a: "Oui, vous programmez l'envoi au moment optimal après chaque prestation.",
      },
    ],
  },
  {
    slug: "demande-avis-par-email",
    title: "Demande d'avis par email",
    eyebrow: "Méthode de collecte",
    description:
      "Lancez des campagnes email pour collecter des avis Google auprès de votre base clients de façon automatisée.",
    heroLead:
      "L'email reste le canal le plus polyvalent pour solliciter un avis. Ajoutez un lien clair et augmentez durablement votre volume d'avis.",
    icon: Mail,
    steps: [
      {
        title: "Importez votre base clients",
        description:
          "Connectez votre CRM ou importez vos contacts en quelques clics.",
      },
      {
        title: "Concevez votre email",
        description:
          "Utilisez nos modèles prêts à l'emploi avec un bouton d'avis proéminent.",
      },
      {
        title: "Analysez les résultats",
        description:
          "Suivez taux d'ouverture, clics et avis générés dans votre tableau de bord.",
      },
    ],
    benefits: [
      {
        icon: Mail,
        title: "Campagnes soignées",
        description:
          "Des modèles professionnels qui reflètent votre image de marque.",
      },
      {
        icon: Users,
        title: "Ciblage précis",
        description:
          "Segmentez par date d'achat, produit ou niveau de satisfaction.",
      },
      {
        icon: TrendingUp,
        title: "Mesurable",
        description:
          "Taux d'ouverture, de clic et avis attribués en temps réel.",
      },
    ],
    faq: [
      {
        q: "Puis-je automatiser les relances email ?",
        a: "Oui, configurez une séquence de relance pour les clients n'ayant pas répondu.",
      },
      {
        q: "L'email respecte-t-il les règles anti-spam ?",
        a: "Oui, nos modèles incluent lien de désinscription et conformité CAN-SPAM/RGPD.",
      },
      {
        q: "Puis-je connecter mon CRM ?",
        a: "Oui, l'intégration CRM est disponible selon le forfait choisi.",
      },
    ],
  },
  {
    slug: "carte-nfc-avis-google",
    title: "Carte NFC avis Google",
    eyebrow: "Méthode de collecte",
    description:
      "Utilisez des cartes NFC qui s'ouvrent au contact du smartphone pour diriger vos clients vers votre avis Google.",
    heroLead:
      "La carte NFC avis Google offre l'expérience la plus fluide : un simple geste et la page d'avis s'ouvre sur le téléphone de votre client.",
    icon: Nfc,
    steps: [
      {
        title: "Programmez votre carte",
        description:
          "Associez la carte NFC à votre lien d'avis Google en quelques secondes.",
      },
      {
        title: "Proposez-la à vos clients",
        description:
          "Sur le comptoir, à l'accueil ou remise en main propre après la prestation.",
      },
      {
        title: "Le client tape et note",
        description:
          "Son smartphone ouvre directement la page d'avis Google.",
      },
    ],
    benefits: [
      {
        icon: Nfc,
        title: "Sans application",
        description:
          "Fonctionne nativement sur la plupart des smartphones récents.",
      },
      {
        icon: ScanLine,
        title: "Ultra simple",
        description:
          "Un simple effleurement, aucune manipulation compliquée.",
      },
      {
        icon: CreditCard,
        title: "Élégant et durable",
        description:
          "Un support haut de gamme qui valorise votre enseigne.",
      },
    ],
    faq: [
      {
        q: "Tous les téléphones lisent les cartes NFC ?",
        a: "La plupart des smartphones Android et iPhone récents, oui. Sinon, un QR code de secours est prévu.",
      },
      {
        q: "Puis-je reprogrammer la carte ?",
        a: "Oui, nos cartes NFC réinscriptibles pointent vers votre lien de collecte modifiable.",
      },
      {
        q: "La carte NFC remplace-t-elle le QR code ?",
        a: "Elle les complète : proposez les deux pour couvrir tous les appareils.",
      },
    ],
  },
  {
    slug: "plaque-qr-code-avis",
    title: "Plaque QR code pour commerce",
    eyebrow: "Méthode de collecte",
    description:
      "Installez une plaque QR code durable en magasin pour inviter vos clients à laisser un avis Google en sortant.",
    heroLead:
      "La plaque QR code pour commerce est un support permanent et résistant. Placez-la à l'entrée ou à la caisse pour une collecte continue d'avis.",
    icon: LayoutTemplate,
    steps: [
      {
        title: "Recevez votre plaque",
        description:
          "Livrée avec votre QR code avis Google gravé ou imprimé.",
      },
      {
        title: "Fixez-la en boutique",
        description:
          "À l'accueil, en caisse ou sur la vitrine, à hauteur de vue.",
      },
      {
        title: "Vos clients scannent",
        description:
          "Ils notent leur expérience avant même de quitter le magasin.",
      },
    ],
    benefits: [
      {
        icon: LayoutTemplate,
        title: "Résistante",
        description:
          "Support plastique ou métal conçu pour durer en magasin.",
      },
      {
        icon: QrCode,
        title: "Toujours visible",
        description:
          "Une présence permanente qui rappelle de laisser un avis.",
      },
      {
        icon: Shield,
        title: "Professionnelle",
        description:
          "Renforce la confiance et l'image de votre commerce.",
      },
    ],
    faq: [
      {
        q: "La plaque est-elle personnalisée à mon enseigne ?",
        a: "Oui, vous pouvez ajouter votre logo et le nom de votre commerce.",
      },
      {
        q: "Où l'installer pour un meilleur résultat ?",
        a: "À la caisse ou à la sortie, là où le client vient d'être satisfait.",
      },
      {
        q: "Le QR code de la plaque peut-il être modifié ?",
        a: "Oui via un lien dynamique, sans changer la plaque physique.",
      },
    ],
  },
  {
    slug: "automatisation-avis-clients",
    title: "Automatisation avis clients",
    eyebrow: "Méthode de collecte",
    description:
      "Automatisez vos séquences de demande d'avis pour collecter plus de retours sans y passer de temps.",
    heroLead:
      "L'automatisation avis clients déclenche des relances au bon moment. Gagnez du temps tout en augmentant régulièrement votre volume d'avis.",
    icon: RefreshCw,
    steps: [
      {
        title: "Définissez vos déclencheurs",
        description:
          "Après une vente, un rendez-vous ou un événement CRM.",
      },
      {
        title: "Créez votre séquence",
        description:
          "Email et/ou SMS programmés à J+1, J+3, J+7.",
      },
      {
        title: "Laissez tourner",
        description:
          "Les avis arrivent automatiquement, et vous suivez tout en temps réel.",
      },
    ],
    benefits: [
      {
        icon: RefreshCw,
        title: "Gain de temps",
        description:
          "Plus besoin de solliciter manuellement chaque client.",
      },
      {
        icon: Clock,
        title: "Au moment idéal",
        description:
          "Sollicitez tant que l'expérience est fraîche en mémoire.",
      },
      {
        icon: CheckCircle2,
        title: "Sans oubli",
        description:
          "Aucun client satisfait n'est manqué grâce aux relances.",
      },
    ],
    faq: [
      {
        q: "Puis-je éviter de solliciter les clients mécontents ?",
        a: "Oui, dirigez les insatisfaits vers un formulaire interne avant de demander un avis public.",
      },
      {
        q: "L'automatisation est-elle configurable ?",
        a: "Oui, canaux, délais et messages sont entièrement paramétrables.",
      },
      {
        q: "Est-ce conforme aux règles Google ?",
        a: "Oui. Nous ne forçons aucun avis positif ; le client choisit librement.",
      },
    ],
  },
  {
    slug: "questionnaire-satisfaction-client",
    title: "Questionnaire satisfaction client",
    eyebrow: "Méthode de collecte",
    description:
      "Menez des questionnaires de satisfaction qui orientent naturellement vos clients satisfaits vers un avis Google.",
    heroLead:
      "Le questionnaire satisfaction client mesure votre performance et convertit les clients heureux en avis Google publics, tout en capturant les insatisfaits en privé.",
    icon: ClipboardList,
    steps: [
      {
        title: "Envoyez le questionnaire",
        description:
          "Après la prestation, par email ou SMS avec un lien court.",
      },
      {
        title: "Analysez la satisfaction",
        description:
          "Le client note son expérience et laisse un commentaire.",
      },
      {
        title: "Convertissez en avis",
        description:
          "Les satisfaits sont invités à publier leur avis sur Google.",
      },
    ],
    benefits: [
      {
        icon: ClipboardList,
        title: "Écoute active",
        description:
          "Identifiez vos points forts et vos axes d'amélioration.",
      },
      {
        icon: Star,
        title: "Conversion naturelle",
        description:
          "Les clients heureux sont orientés vers Google au bon moment.",
      },
      {
        icon: MessageSquare,
        title: "Gestion des insatisfaits",
        description:
          "Captez les remarques négatives en privé avant qu'elles ne deviennent publiques.",
      },
    ],
    faq: [
      {
        q: "Que se passe-t-il si le client est insatisfait ?",
        a: "Il est dirigé vers un formulaire privé pour que vous puissiez régler le problème en interne.",
      },
      {
        q: "Le questionnaire est-il personnalisable ?",
        a: "Oui, questions, échelle et mise en page adaptées à votre activité.",
      },
      {
        q: "Combien de questions recommandez-vous ?",
        a: "3 à 5 questions courtes pour maximiser le taux de réponse.",
      },
    ],
  },
];

export function generateStaticParams() {
  return methods.map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const method = methods.find((m) => m.slug === slug);
  if (!method) return {};
  return {
    title: method.title,
    description: method.description,
  };
}

export default async function MethodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const method = methods.find((m) => m.slug === slug);
  if (!method) notFound();

  const Icon = method.icon;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: method.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-lime-400/[0.06]">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d0f0a] via-[#101016] to-[#0d0d12]" />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-lime-400/10 px-4 py-2 text-sm font-semibold text-lime-300">
              <Icon className="h-4 w-4" />
              {method.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {method.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              {method.heroLead}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-green-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
              >
                Nous contacter
              </Link>
              <Link
                href="/tarifs"
                className="rounded-full border border-lime-400/35 bg-[#0d0d12] px-8 py-3.5 text-base font-semibold text-slate-200 transition-all hover:bg-lime-400/[0.06]"
              >
                Voir les tarifs
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-green-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-700 hover:shadow-xl"
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
              Comment ça fonctionne ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Un processus simple en 3 étapes pour collecter des avis authentiques.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {method.steps.map((step, index) => (
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

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Les avantages de {method.title.toLowerCase()}
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Pourquoi cette méthode booste votre collecte d'avis Google.
            </p>
          </AnimatedSection>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {method.benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <AnimatedSection key={benefit.title} delay={index * 0.1}>
                  <div className="h-full rounded-3xl border border-lime-400/25 bg-[#0d0d12] p-8 transition-all duration-300 hover:shadow-lg hover:border-green-400">
                    <div className="inline-flex rounded-2xl bg-lime-400/10 p-3">
                      <BenefitIcon className="h-8 w-8 text-lime-300" />
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-300">
                      {benefit.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-lime-400/[0.06] py-8 sm:py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Questions fréquentes
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Tout ce qu'il faut savoir sur {method.title.toLowerCase()}.
            </p>
          </AnimatedSection>

          <div className="mt-6 space-y-3">
            {method.faq.map((f) => (
              <AnimatedSection key={f.q}>
                <details className="group rounded-2xl bg-[#0d0d12] p-5 transition hover:bg-lime-400/10/40">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-white">
                    {f.q}
                    <span className="ml-4 text-slate-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-300">{f.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </div>
      </section>

      <ContentSections
        data={getContentSections("methode", method.title, {
          slug: method.slug,
          site: method.title,
          eyebrow: method.eyebrow,
          titleLeft: method.title,
          titleRight: method.heroLead,
          titleImage: `Visualisez ${method.title}`,
          titleIllustration: `La preuve : ${method.title}`,
          ...(method.slug === "qr-code-avis-google" ? { imageSrc: "/image copy 2.png" } : method.slug === "demande-avis-par-sms" ? { imageSrc: "/image copy 3.png" } : method.slug === "demande-avis-par-email" ? { imageSrc: "/image copy 4.png" } : method.slug === "carte-nfc-avis-google" ? { imageSrc: "/image copy 5.png" } : method.slug === "plaque-qr-code-avis" ? { imageSrc: "/image copy 6.png" } : method.slug === "automatisation-avis-clients" ? { imageSrc: "/image copy 7.png" } : method.slug === "questionnaire-satisfaction-client" ? { imageSrc: "/image copy 8.png" } : {}),
        })}
      />

      <section className="bg-slate-900 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Prêt à utiliser {method.title.toLowerCase()} ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Rejoignez plus de 2 000 entreprises qui collectent des avis authentiques.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-lime-400/[0.06]0 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-green-400 hover:shadow-xl"
              >
                Créer mon compte
                <ArrowRight className="ml-2 inline h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-600 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-slate-800"
              >
                Nous contacter
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
