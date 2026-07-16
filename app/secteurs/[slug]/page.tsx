import { notFound } from "next/navigation";
import type { Metadata } from "next";
import AnimatedSection from "@/components/animated-section";
import ContentSections from "@/components/content-sections";
import { getContentSections } from "@/lib/content-sections";
import Link from "next/link";
import {
  Utensils,
  Home,
  Car,
  Hotel,
  Building2,
  Scissors,
  Sparkles,
  Stethoscope,
  Store,
  HardHat,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

type Secteur = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroLead: string;
  icon: LucideIcon;
  reasons: { title: string; description: string }[];
  steps: { title: string; description: string }[];
  tips: { title: string; description: string }[];
  example: string;
};

const secteurs: Secteur[] = [
  {
    slug: "avis-google-restaurant",
    title: "Avis Google restaurant",
    eyebrow: "Secteur restauration",
    description:
      "Les avis Google sont déterminants pour le choix d'un restaurant. Découvrez comment les exploiter pour attirer plus de clients.",
    heroLead:
      "Dans la restauration, chaque avis compte. Une note élevée et des commentaires réguliers influencent directement le choix des clients potentiels qui recherchent un bon table sur Google Maps.",
    icon: Utensils,
    reasons: [
      {
        title: "Influence directe sur la fréquentation",
        description:
          "Les consommateurs consultent systématiquement les avis avant de réserver ou de se déplacer. Un restaurant bien noté attire significativement plus de nouveaux clients.",
      },
      {
        title: "Visibilité dans les recherches locales",
        description:
          "Google privilégie les établissements avec un volume d'avis récents et une note élevée dans ses résultats de recherche et sur Maps.",
      },
      {
        title: "Amélioration continue grâce aux retours",
        description:
          "Les avis révèlent les points forts (ambiance, service, qualité des plats) et les axes d'amélioration pour parfaire l'expérience client.",
      },
    ],
    steps: [
      {
        title: "Demandez l'avis au bon moment",
        description:
          "Solicitez vos clients satisfaits après leur repas, quand l'expérience est fraîche dans leur esprit.",
      },
      {
        title: "Envoyez un lien simplifié",
        description:
          "Utilisez un QR code ou un lien direct vers votre fiche Google pour réduire les frictions.",
      },
      {
        title: "Répondez à tous les avis",
        description:
          "Remerciez pour les commentaires positifs et répondez avec professionnalisme aux avis négatifs.",
      },
      {
        title: "Analysez et améliorez",
        description:
          "Identifiez les tendances dans vos avis pour améliorer continuellement votre service.",
      },
    ],
    tips: [
      {
        title: "Personnalisez votre demande",
        description:
          "Évitez les messages génériques. Mentionnez un plat spécifique ou un moment du repas pour montrer que vous avez apprécié la visite.",
      },
      {
        title: "Affichez votre QR code",
        description:
          "Placez-le sur l'addition, au comptoir ou sur les tables pour faciliter la publication d'avis.",
      },
      {
        title: "Mettez en avant vos avis",
        description:
          "Partagez vos meilleurs avis sur vos réseaux sociaux et votre site web pour renforcer votre crédibilité.",
      },
    ],
    example:
      'Bonjour ! Merci pour votre passage ce midi au Bistrot du Port. Si vous avez apprécié notre plateau de fruits de mer, nous serions ravis de lire votre avis sur Google : [lien]. Cela nous aide énormément ! Bonne journée.',
  },
  {
    slug: "avis-google-artisan",
    title: "Avis Google artisan",
    eyebrow: "Secteur artisanat",
    description:
      "Les avis Google sont essentiels pour les artisans qui souhaitent développer leur activité et gagner la confiance de nouveaux clients.",
    heroLead:
      "Pour un artisan, chaque avis est une preuve de qualité. Les clients recherchent un professionnel de confiance et les avis Google sont le premier critère de sélection dans leur choix.",
    icon: Home,
    reasons: [
      {
        title: "Preuve de qualité et de savoir-faire",
        description:
          "Les avis clients démontrent concrètement la qualité de vos réalisations et renforcent votre crédibilité auprès de prospects.",
      },
      {
        title: "Différenciation face à la concurrence",
        description:
          "Dans un secteur concurrentiel, une note Google élevée et des avis détaillés vous démarquent immédiatement des autres artisans.",
      },
      {
        title: "Génération de recommandations",
        description:
          "Des avis positifs poussent les clients à recommander vos services à leur entourage, générant un bouche-à-oreille digital.",
      },
    ],
    steps: [
      {
        title: "Collectez après chaque intervention",
        description:
          "Demandez l'avis juste après la fin des travaux ou de la prestation, quand la satisfaction est maximale.",
      },
      {
        title: "Simplifiez le processus",
        description:
          "Envoyez un SMS ou un email avec un lien direct vers votre fiche Google pour faciliter la publication.",
      },
      {
        title: "Suivez vos performances",
        description:
          "Utilisez un tableau de bord pour suivre vos avis et identifier les périodes où vous êtes le plus sollicité.",
      },
      {
        title: "Communiquez sur vos avis",
        description:
          "Mettez en avant vos meilleures notes sur votre devis et vos supports de communication.",
      },
    ],
    tips: [
      {
        title: "Montrez votre expertise",
        description:
          "Partagez des photos de vos réalisations sur votre fiche Google pour accompagner les avis clients.",
      },
      {
        title: "Répondez avec authenticité",
        description:
          "Une réponse personnalisée et sincère renforce la confiance bien plus qu'une réponse générique.",
      },
      {
        title: "Fidélisez via les avis",
        description:
          "Les clients qui ont laissé un avis positif sont plus susceptibles de faire appel à vous à nouveau.",
      },
    ],
    example:
      'Bonjour ! Merci de m\'avoir confié la rénovation de votre salle de bain. Si vous êtes satisfait du résultat, un petit avis sur Google m\'aiderait beaucoup : [lien]. Je reste à votre disposition pour tout besoin futur.',
  },
  {
    slug: "avis-google-garage",
    title: "Avis Google garage automobile",
    eyebrow: "Secteur automobile",
    description:
      "Les avis Google sont un levier de croissance essentiel pour les garages automobiles qui souhaitent renforcer leur réputation.",
    heroLead:
      "Pour un garage automobile, la confiance est primordiale. Les clients consultent les avis Google pour choisir un mécanicien fiable et compétent avant de confier leur véhicule.",
    icon: Car,
    reasons: [
      {
        title: "Confiance avant l'engagement",
        description:
          "Confier son véhicule nécessite une grande confiance. Les avis Google sont le premier facteur de rassurance pour les automobilistes.",
      },
      {
        title: "Preuve de compétence technique",
        description:
          "Des avis détaillés sur vos interventions démontrent votre expertise et la qualité de vos réparations.",
      },
      {
        title: "Fidélisation de la clientèle",
        description:
          "Une note élevée fidélise les clients existants et en attire de nouveaux grâce au référencement local.",
      },
    ],
    steps: [
      {
        title: "Demandez après chaque service",
        description:
          "Solicitez l'avis une fois le véhicule réparé et le client satisfait, idéalement au moment de la récupération.",
      },
      {
        title: "Utilisez un canal direct",
        description:
          "Envoyez un SMS personnalisé avec le lien vers votre fiche Google pour maximiser le taux de réponse.",
      },
      {
        title: "Répondez systématiquement",
        description:
          "Une réponse à chaque avis montre votre engagement et votre professionnalisme.",
      },
      {
        title: "Mettez en avant vos certifications",
        description:
          "Complétez votre fiche Google avec vos agréments et certifications pour renforcer votre crédibilité.",
      },
    ],
    tips: [
      {
        title: "Soyez transparent sur les tarifs",
        description:
          "Les avis mentionnent souvent la transparence des prix ; soyez clair sur vos devis et factures.",
      },
      {
        title: "Proposez des services complémentaires",
        description:
          "Des avis sur la qualité de vos services annexes (vidange, pneumatiques) enrichissent votre fiche.",
      },
      {
        title: "Partagez vos réussites",
        description:
          "Publiez des photos avant/après vos interventions avec l'accord des clients pour illustrer votre travail.",
      },
    ],
    example:
      'Bonjour ! Merci de nous avoir confié la révision de votre véhicule. Si vous êtes satisfait de notre travail, nous serions ravis de lire votre avis sur Google : [lien]. Votre retour est précieux !',
  },
  {
    slug: "avis-google-hotel",
    title: "Avis Google hôtel",
    eyebrow: "Secteur hôtellerie",
    description:
      "Les avis Google sont un facteur clé dans le choix d'un hôtel. Apprenez à les valoriser pour augmenter vos réservations.",
    heroLead:
      "Dans l'hôtellerie, les avis Google sont le premier critère de choix pour les voyageurs. Une note élevée et des commentaires positifs boostent votre visibilité et vos réservations.",
    icon: Hotel,
    reasons: [
      {
        title: "Impact direct sur les réservations",
        description:
          "Plus de 80% des voyageurs consultent les avis avant de réserver. Une note élevée augmente considérablement votre taux de conversion.",
      },
      {
        title: "Visibilité sur Google Travel",
        description:
          "Les hôtels bien notés apparaissent en tête des résultats Google Travel et sur Google Maps, générant plus de trafic.",
      },
      {
        title: "Construction de la réputation",
        description:
          "Les avis détaillés sur la propreté, le service et les équipements renforcent la confiance des futurs clients.",
      },
    ],
    steps: [
      {
        title: "Sollicitez au moment du check-out",
        description:
          "Demandez l'avis quand l'expérience est encore fraîche et que le client est satisfait de son séjour.",
      },
      {
        title: "Envoyez un email personnalisé",
        description:
          "Un email post-séjour avec des photos du séjour et un lien direct vers Google maximise les réponses.",
      },
      {
        title: "Répondez à tous les avis",
        description:
          "Remerciez les clients satisfaits et répondez aux critiques avec diplomatie pour montrer votre réactivité.",
      },
      {
        title: "Analysez les retours",
        description:
          "Identifiez les points mentionnés dans les avis pour améliorer vos services et vos installations.",
      },
    ],
    tips: [
      {
        title: "Mettez en avant vos atouts",
        description:
          "Photos de qualité, description détaillée des chambres et des services pour accompagner vos avis.",
      },
      {
        title: "Répondez aux avis dans plusieurs langues",
        description:
          "Pour les hôtels accueillant une clientèle internationale, répondez dans la langue du client.",
      },
      {
        title: "Utilisez les avis pour améliorer",
        description:
          "Un avis négatif bien géré peut transformer la perception de votre établissement auprès des futurs clients.",
      },
    ],
    example:
      'Cher voyageur, merci d\'avoir séjourné chez nous ! Nous espérons que votre séjour a été à la hauteur de vos attentes. Si vous avez apprécié votre chambre et notre petit-déjeuner, n\'hésitez pas à partager votre expérience sur Google : [lien]. À bientôt !',
  },
  {
    slug: "avis-google-agence-immobiliere",
    title: "Avis Google agence immobilière",
    eyebrow: "Secteur immobilier",
    description:
      "Les avis Google sont cruciaux pour les agences immobilières qui souhaitent renforcer leur crédibilité et attirer de nouveaux vendeurs et acheteurs.",
    heroLead:
      "Dans l'immobilier, la confiance est la monnaie principale. Les avis Google des clients satisfaits sont votre meilleure carte de visite pour attirer de nouveaux mandats.",
    icon: Building2,
    reasons: [
      {
        title: "Crédibilité pour les mandats",
        description:
          "Les vendeurs et acheteurs choisissent une agence en fonction de sa réputation. Des avis positifs renforcent votre légitimité.",
      },
      {
        title: "Visibilité locale renforcée",
        description:
          "Une agence bien notée apparaît en tête des recherches Google sur sa zone d'activité.",
      },
      {
        title: "Preuve d'accompagnement",
        description:
          "Les avis clients témoignent de la qualité de votre accompagnement dans les transactions immobilières.",
      },
    ],
    steps: [
      {
        title: "Demandez après chaque vente",
        description:
          "Solicitez l'avis juste après la signature chez le notaire, quand la satisfaction du client est à son comble.",
      },
      {
        title: "Partagez votre lien personnalisé",
        description:
          "Envoyez un SMS ou un email avec un QR code vers votre fiche Google pour faciliter la publication.",
      },
      {
        title: "Répondez avec empathie",
        description:
          "Une réponse personnalisée à chaque avis montre votre engagement envers chaque client.",
      },
      {
        title: "Mettez en avant vos réussites",
        description:
          "Complétez votre fiche avec des photos de biens vendus et des témoignages clients.",
      },
    ],
    tips: [
      {
        title: "Valorisez chaque transaction",
        description:
          "Chaque vente réussie est une opportunité d'avis. N'hésitez pas à solliciter vos clients satisfaits.",
      },
      {
        title: "Créez du contenu local",
        description:
          "Publiez des articles sur le marché immobilier local pour renforcer votre expertise et votre visibilité.",
      },
      {
        title: "Suivez vos concurrents",
        description:
          "Analysez les avis des agences concurrentes pour identifier leurs forces et leurs faiblesses.",
      },
    ],
    example:
      'Madame, Monsieur, merci de nous avoir fait confiance pour la vente de votre appartement. Si vous êtes satisfait de notre accompagnement, votre avis sur Google nous serait précieux : [lien]. Nous restons à votre disposition pour tout projet futur.',
  },
  {
    slug: "avis-google-salon-coiffure",
    title: "Avis Google salon de coiffure",
    eyebrow: "Secteur beauté",
    description:
      "Les avis Google sont essentiels pour les salons de coiffure qui souhaitent attirer de nouveaux clients et fidéliser leur clientèle.",
    heroLead:
      "Pour un salon de coiffure, les avis Google sont le meilleur ambassadeur. Ils influencent directement le choix des clients qui recherchent un nouveau coiffeur ou coloriste.",
    icon: Scissors,
    reasons: [
      {
        title: "Influence sur le choix du coiffeur",
        description:
          "Les clients consultent systématiquement les avis avant de choisir un nouveau salon, surtout pour des prestations techniques comme la coloration.",
      },
      {
        title: "Visibilité dans les recherches locales",
        description:
          "Un salon bien noté apparaît en tête des résultats Google Maps et attire plus de nouveaux clients.",
      },
      {
        title: "Construction de la réputation du styliste",
        description:
          "Les avis sur la qualité de la coupe, le conseil et l'ambiance renforcent la réputation individuelle des coiffeurs.",
      },
    ],
    steps: [
      {
        title: "Demandez en fin de prestation",
        description:
          "Solicitez l'avis quand le client est satisfait de sa coupe, idéalement au moment du paiement.",
      },
      {
        title: "Proposez un accès simplifié",
        description:
          "Affichez un QR code à l'accueil et envoyez un SMS avec le lien vers votre fiche Google.",
      },
      {
        title: "Répondez à tous les avis",
        description:
          "Remerciez pour les compliments et répondez aux critiques pour montrer votre professionnalisme.",
      },
      {
        title: "Utilisez les avis comme contenu",
        description:
          "Partagez vos meilleurs avis sur Instagram et Facebook pour renforcer votre communauté.",
      },
    ],
    tips: [
      {
        title: "Prenez des photos de vos réalisations",
        description:
          "Des photos avant/après avec l'accord des clients illustrent votre talent et accompagnent vos avis.",
      },
      {
        title: "Proposez des prestations signature",
        description:
          "Des services uniques génèrent des avis plus marquants et mémorables pour les clients.",
      },
      {
        title: "Fidélisez par la personnalisation",
        description:
          "Un accueil personnalisé et des conseils adaptés génèrent des avis plus élogieux et authentiques.",
      },
    ],
    example:
      'Merci pour votre visite ! Nous espérons que votre nouvelle coupe vous plaît. Si vous êtes satisfait, un petit avis sur Google nous ferait très plaisir : [lien]. À très bientôt !',
  },
  {
    slug: "avis-google-institut-beaute",
    title: "Avis Google institut de beauté",
    eyebrow: "Secteur bien-être",
    description:
      "Les avis Google sont un levier de croissance pour les instituts de beauté qui souhaitent renforcer leur réputation et fidéliser leur clientèle.",
    heroLead:
      "Pour un institut de beauté, les avis Google sont la meilleure preuve de la qualité de vos prestations. Ils influencent directement le choix des futures clientes.",
    icon: Sparkles,
    reasons: [
      {
        title: "Preuve de qualité des soins",
        description:
          "Les avis détaillés sur vos prestations démontrent votre expertise et rassurent les nouvelles clientes.",
      },
      {
        title: "Visibilité pour les nouvelles clientes",
        description:
          "Un institut bien noté apparaît en tête des recherches locales et attire naturellement plus de clientes.",
      },
      {
        title: "Fidélisation et bouche-à-oreille",
        description:
          "Des avis positifs fidélisent la clientèle existante et génèrent des recommandations.",
      },
    ],
    steps: [
      {
        title: "Solicitez après chaque soin",
        description:
          "Demandez l'avis quand la cliente est détendue et satisfaite de sa prestation.",
      },
      {
        title: "Envoyez un message personnalisé",
        description:
          "Un SMS ou email post-soin avec un lien vers votre fiche Google maximise les réponses.",
      },
      {
        title: "Répondez avec douceur",
        description:
          "Une réponse attentionnée à chaque avis renforce l'image de votre institut.",
      },
      {
        title: "Mettez en avant vos résultats",
        description:
          "Partagez des témoignages et des photos (avec accord) sur vos réseaux sociaux.",
      },
    ],
    tips: [
      {
        title: "Offrez une expérience mémorable",
        description:
          "Un accueil personnalisé et des conseils adaptés génèrent naturellement des avis plus élogieux.",
      },
      {
        title: "Proposez des soins signature",
        description:
          "Des prestations uniques créent des expériences que les clientes auront envie de partager.",
      },
      {
        title: "Créez une ambiance Instagrammable",
        description:
          "Un décor soigné encourage les clientes à partager leur expérience sur les réseaux.",
      },
    ],
    example:
      'Nous espérons que votre soin vous a détendue et satisfaite ! Si vous avez apprécié votre passage, votre avis sur Google nous aiderait beaucoup : [lien]. Merci pour votre confiance !',
  },
  {
    slug: "avis-google-cabinet-dentaire",
    title: "Avis Google dentiste",
    eyebrow: "Secteur santé",
    description:
      "Les avis Google sont essentiels pour les cabinets dentaires qui souhaitent renforcer la confiance des patients et développer leur patientèle.",
    heroLead:
      "Pour un dentiste, la confiance des patients est la clé. Les avis Google sont le premier contact pour de nombreux patients qui recherchent un praticien de confiance.",
    icon: Stethoscope,
    reasons: [
      {
        title: "Rassurance avant la première consultation",
        description:
          "Les patients consultent les avis pour choisir un dentiste. Une note élevée et des témoignages positifs sont déterminants.",
      },
      {
        title: "Preuve de qualité des soins",
        description:
          "Les avis détaillés sur la douceur, l'écoute et la qualité des soins renforcent votre réputation professionnelle.",
      },
      {
        title: "Référencement local accru",
        description:
          "Un cabinet bien noté apparaît en tête des résultats Google Maps et génère plus de demandes de rendez-vous.",
      },
    ],
    steps: [
      {
        title: "Demandez après un soin réussi",
        description:
          "Solicitez l'avis après une intervention courante (détartrage, soin simple) quand le patient est satisfait.",
      },
      {
        title: "Envoyez un message discret",
        description:
          "Un SMS ou email personnalisé avec un lien vers votre fiche Google, sans pression excessive.",
      },
      {
        title: "Répondez avec empathie",
        description:
          "Une réponse attentionnée à chaque avis renforce la relation de confiance avec vos patients.",
      },
      {
        title: "Mettez à jour votre fiche",
        description:
          "Ajoutez vos spécialités, horaires et équipements pour enrichir votre profil Google.",
      },
    ],
    tips: [
      {
        title: "Soyez transparent sur vos tarifs",
        description:
          "Des avis mentionnant la transparence des prix renforcent la confiance des futurs patients.",
      },
      {
        title: "Valorisez votre écoute",
        description:
          "Les patients apprécient les praticiens qui prennent le temps d'expliquer et de rassurer.",
      },
      {
        title: "Répondez aux préoccupations",
        description:
          "Un avis négatif bien géré montre votre professionnalisme et votre souci de la qualité des soins.",
      },
    ],
    example:
      'Nous espérons que votre soin s\'est bien passé. Si vous êtes satisfait de votre visite, n\'hésitez pas à partager votre expérience sur Google : [lien]. Votre avis est précieux pour nous et aide d\'autres patients à nous faire confiance.',
  },
  {
    slug: "avis-google-commerce",
    title: "Avis Google commerce",
    eyebrow: "Secteur retail",
    description:
      "Les avis Google sont un levier de croissance pour les commerces de proximité qui souhaitent attirer plus de clients locaux.",
    heroLead:
      "Pour un commerce de proximité, les avis Google sont votre meilleure publicité. Ils influencent directement le choix des consommateurs qui recherchent un magasin local.",
    icon: Store,
    reasons: [
      {
        title: "Influence sur le choix du magasin",
        description:
          "Les consommateurs consultent les avis avant de choisir un commerce. Un magasin bien noté attire naturellement plus de clients.",
      },
      {
        title: "Visibilité locale optimisée",
        description:
          "Google privilégie les commerces avec des avis récents et une note élevée dans ses résultats de recherche.",
      },
      {
        title: "Preuve de la qualité des produits",
        description:
          "Les avis clients témoignent de la qualité de vos produits et de la satisfaction de votre clientèle.",
      },
    ],
    steps: [
      {
        title: "Demandez au moment de l'achat",
        description:
          "Solicitez l'avis quand le client est satisfait de son achat, idéalement au moment du paiement.",
      },
      {
        title: "Proposez un accès simplifié",
        description:
          "Affichez un QR code en caisse et envoyez un SMS avec le lien vers votre fiche Google.",
      },
      {
        title: "Répondez à tous les avis",
        description:
          "Remerciez pour les compliments et répondez aux critiques pour montrer votre réactivité.",
      },
      {
        title: "Analysez les retours",
        description:
          "Identifiez les produits les plus appréciés pour mettre en avant votre offre.",
      },
    ],
    tips: [
      {
        title: "Mettez en avant vos produits populaires",
        description:
          "Les avis sur des produits spécifiques enrichissent votre fiche et aident les futurs clients.",
      },
      {
        title: "Créez une expérience client mémorable",
        description:
          "Un accueil chaleureux et des conseils personnalisés génèrent des avis plus élogieux.",
      },
      {
        title: "Participez à la vie locale",
        description:
          "Les événements locaux et partenariats renforcent votre notoriété et génèrent des avis positifs.",
      },
    ],
    example:
      'Merci pour votre achat ! Nous espérons que votre produit vous plaît. Si vous êtes satisfait, votre avis sur Google nous aiderait beaucoup : [lien]. À bientôt dans notre magasin !',
  },
  {
    slug: "avis-google-entreprise-btp",
    title: "Avis Google entreprise bâtiment",
    eyebrow: "Secteur BTP",
    description:
      "Les avis Google sont essentiels pour les entreprises du BTP qui souhaitent renforcer leur réputation et remporter de nouveaux marchés.",
    heroLead:
      "Dans le BTP, la confiance est fondamentale. Les avis Google sont la preuve de la qualité de vos réalisations et votre meilleur argument pour remporter de nouveaux chantiers.",
    icon: HardHat,
    reasons: [
      {
        title: "Preuve de la qualité des travaux",
        description:
          "Les avis détaillés sur vos réalisations démontrent votre expertise et la qualité de vos finitions.",
      },
      {
        title: "Visibilité pour les appels d'offres",
        description:
          "Une entreprise bien notée est plus susceptible d'être choisie pour des projets importants et des appels d'offres.",
      },
      {
        title: "Recommandations et bouche-à-oreille",
        description:
          "Des avis positifs génèrent des recommandations de clients satisfaits vers de nouveaux projets.",
      },
    ],
    steps: [
      {
        title: "Demandez après la fin du chantier",
        description:
          "Solicitez l'avis quand le client est satisfait de la réalisation, après la réception des travaux.",
      },
      {
        title: "Envoyez un message personnalisé",
        description:
          "Un email avec des photos du chantier terminé et un lien vers votre fiche Google maximise les réponses.",
      },
      {
        title: "Répondez avec professionnalisme",
        description:
          "Une réponse détaillée à chaque avis renforce votre image d'entreprise sérieuse.",
      },
      {
        title: "Documentez vos réalisations",
        description:
          "Ajoutez des photos avant/après et des vidéos sur votre fiche Google pour illustrer votre travail.",
      },
    ],
    tips: [
      {
        title: "Documentez vos chantiers",
        description:
          "Des photos de qualité du chantier avant, pendant et après enrichissent votre fiche et accompagnent les avis.",
      },
      {
        title: "Mettez en avant vos certifications",
        description:
          "Vos qualifications, assurances et labels renforcent la confiance et apparaissent sur votre fiche Google.",
      },
      {
        title: "Partagez vos projets terminés",
        description:
          "Publiez vos réalisations sur les réseaux sociaux et invitez vos clients à laisser un avis.",
      },
    ],
    example:
      'Merci de nous avoir confié la rénovation de votre maison. Si vous êtes satisfait du résultat, votre avis sur Google nous serait très précieux : [lien]. Il nous aidera à développer notre activité et à gagner la confiance de nouveaux clients.',
  },
];

export function generateStaticParams() {
  return secteurs.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const secteur = secteurs.find((s) => s.slug === slug);
  if (!secteur) return {};
  return {
    title: `${secteur.title} | Achat Avis Google`,
    description: secteur.description,
  };
}

export default async function SecteurPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const secteur = secteurs.find((s) => s.slug === slug);
  if (!secteur) notFound();

  const Icon = secteur.icon;

  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-blue-50">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <Icon className="h-4 w-4" />
              {secteur.eyebrow}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              {secteur.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              {secteur.heroLead}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl"
              >
                Nous contacter
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-blue-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all hover:bg-blue-50"
              >
                S'inscrire gratuitement
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Pourquoi les avis Google sont essentiels
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              3 raisons pour lesquelles les avis Google transforment votre activité.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {secteur.reasons.map((reason, index) => (
              <AnimatedSection key={reason.title} delay={index * 0.1}>
                <div className="flex h-full items-start gap-4 rounded-3xl border border-blue-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:border-blue-400">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                      <CheckCircle2 className="h-6 w-6 text-blue-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Comment notre service vous aide
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              4 étapes simples pour collecter plus d'avis authentiques.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {secteur.steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.1}>
                <div className="relative h-full rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                  <span className="text-5xl font-extrabold text-blue-200">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Bonnes pratiques
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              3 conseils pour maximiser vos avis Google.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {secteur.tips.map((tip, index) => (
              <AnimatedSection key={tip.title} delay={index * 0.1}>
                <div className="flex h-full items-start gap-4 rounded-3xl border border-blue-200 bg-white p-8 transition-all duration-300 hover:shadow-lg hover:border-blue-400">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                      <CheckCircle2 className="h-6 w-6 text-blue-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {tip.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-slate-600">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Exemple de demande d'avis
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Voici un message type que vous pouvez adapter pour solliciter vos clients.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-blue-200 bg-white p-8 shadow-sm">
              <p className="text-base leading-7 text-slate-600 italic">
                "{secteur.example}"
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ContentSections
        data={getContentSections("secteur", secteur.title, {
          slug: secteur.slug,
          site: secteur.title,
          eyebrow: secteur.eyebrow,
          titleLeft: secteur.title,
          titleRight: secteur.heroLead,
          titleImage: `Visualisez ${secteur.title}`,
          titleIllustration: `La preuve : ${secteur.title}`,
          ...(secteur.slug === "avis-google-restaurant" ? { imageSrc: "/image copy 17.png" } : secteur.slug === "avis-google-artisan" ? { imageSrc: "/image copy 18.png" } : secteur.slug === "avis-google-garage" ? { imageSrc: "/image copy 19.png" } : secteur.slug === "avis-google-hotel" ? { imageSrc: "/image copy 20.png" } : secteur.slug === "avis-google-agence-immobiliere" ? { imageSrc: "/image copy 21.png" } : secteur.slug === "avis-google-salon-coiffure" ? { imageSrc: "/image copy 22.png" } : secteur.slug === "avis-google-institut-beaute" ? { imageSrc: "/image copy 23.png" } : secteur.slug === "avis-google-cabinet-dentaire" ? { imageSrc: "/image copy 24.png" } : secteur.slug === "avis-google-commerce" ? { imageSrc: "/image copy 25.png" } : secteur.slug === "avis-google-entreprise-btp" ? { imageSrc: "/image copy 26.png" } : {}),
        })}
      />

      <section className="bg-slate-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Prêt à développer votre {secteur.title.toLowerCase()} ?
            </h2>
            <p className="mt-4 text-lg text-slate-300">
              Notre équipe vous accompagne dans la collecte d'avis Google pour votre activité.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-blue-400 hover:shadow-xl"
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
