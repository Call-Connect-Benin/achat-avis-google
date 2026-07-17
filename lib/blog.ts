export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readingTime: string;
  blocks: ArticleBlock[];
  faq?: ArticleFaq[];
};

export const articles: Article[] = [
  {
    slug: "9-methodes-pour-obtenir-plus-davis-google",
    title: "9 méthodes pour obtenir plus d'avis Google",
    description:
      "Demander l'avis au bon moment, sur le bon canal et avec le parcours le plus court : notre guide pratique pour collecter des avis clients authentiques.",
    category: "Guide",
    date: "2026-06-20",
    readingTime: "6 min",
    blocks: [
      {
        type: "p",
        text: "Les avis Google sont devenus le premier réflexe des consommateurs avant de choisir un prestataire local. Plus votre fiche est riche, récente et bien notée, plus vous gagnez en visibilité dans le pack local. Voici comment mettre la collecte d'avis au centre de votre quotidien.",
      },
      { type: "h2", text: "1. Récupérez votre lien d'avis direct" },
      {
        type: "p",
        text: "Dans Google Business Profile, cliquez sur « Demander des avis » pour obtenir votre lien direct (g.page/r/…). Il ouvre directement le formulaire 5 étoiles, sans recherche.",
      },
      { type: "h2", text: "2. Demandez à chaud" },
      {
        type: "p",
        text: "Sollicitez l'avis juste après une expérience positive : fin de prestation, livraison réussie, encaissement. L'émotion positive fait grimper le taux de dépôt.",
      },
      { type: "h2", text: "3. Envoyez le lien par SMS" },
      {
        type: "p",
        text: "Un message court avec le lien direct, envoyé dans l'heure, reste le canal le plus performant pour les artisans et les commerces de proximité.",
      },
      { type: "h2", text: "4 à 9. Multipliez les points de contact" },
      {
        type: "ul",
        items: [
          "Relancez par e-mail quelques jours après l'achat.",
          "Affichez un QR code en boutique et sur le ticket de caisse.",
          "Ajoutez le lien en signature d'e-mail et sur vos factures.",
          "Formez votre équipe à demander l'avis de vive voix.",
          "Répondez à tous les avis, positifs comme négatifs.",
          "Faites de la demande d'avis un réflexe hebdomadaire.",
        ],
      },
      {
        type: "p",
        text: "L'objectif n'est pas un pic isolé mais un flux régulier : c'est ce qui rassure Google et vos futurs clients. Notre générateur de QR code et notre audit de fiche vous aident à démarrer gratuitement.",
      },
    ],
    faq: [
      {
        question: "Comment obtenir plus d'avis Google rapidement ?",
        answer:
          "Le moyen le plus rapide est d'envoyer le lien direct d'avis (g.page/r/…) ou un QR code à chaud, juste après une expérience positive, par SMS ou e-mail.",
      },
      {
        question: "Quel est le meilleur moment pour demander un avis Google ?",
        answer:
          "Demandez l'avis juste après une expérience positive : fin de prestation, livraison réussie ou encaissement, quand l'émotion positive est encore fraîche.",
      },
      {
        question: "Combien d'avis Google faut-il pour être crédible ?",
        answer:
          "Un volume régulier de 30 à 50 avis authentiques et récents suffit à établir une crédibilité locale solide, la fraîcheur comptant autant que le volume.",
      },
    ],
  },
  {
    slug: "comprendre-le-pack-local-google-maps",
    title: "Comprendre le pack local de Google Maps",
    description:
      "Pourquoi les 3 fiches du pack local dominent les recherches locales, et comment votre volume et votre note d'avis influent sur votre classement.",
    category: "Référencement local",
    date: "2026-06-12",
    readingTime: "5 min",
    blocks: [
      {
        type: "p",
        text: "Lors d'une recherche locale (« plombier Paris », « coiffeur Lyon »), Google affiche en priorité trois fiches appelées le pack local. Apparaître dans ce trio multiplie vos contacts.",
      },
      { type: "h2", text: "Ce qui pèse dans le classement" },
      {
        type: "ul",
        items: [
          "La pertinence de votre fiche avec l'intention de recherche.",
          "La proximité géographique du demandeur.",
          "La notoriété de la fiche : nombre d'avis, note moyenne et fraîcheur.",
        ],
      },
      {
        type: "p",
        text: "La fraîcheur des avis compte souvent plus que le volume total. Un flux régulier d'avis authentiques signale une activité réelle à Google.",
      },
      {
        type: "p",
        text: "Un audit de fiche gratuit permet d'identifier rapidement vos leviers d'amélioration prioritaires.",
      },
    ],
  },
  {
    slug: "repondre-aux-avis-negatifs",
    title: "Pourquoi répondre à tous vos avis, même négatifs",
    description:
      "Répondre aux avis négatifs avec calme et professionnalisme est un signal de confiance puissant pour les futurs clients.",
    category: "E-réputation",
    date: "2026-05-28",
    readingTime: "4 min",
    blocks: [
      {
        type: "p",
        text: "Ignorer un avis négatif l'amplifie. Y répondre montre que vous êtes présent et soucieux de la satisfaction — exactement ce que lisent les futurs clients.",
      },
      { type: "h2", text: "Une réponse en 3 temps" },
      {
        type: "ul",
        items: [
          "Remerciez et reconnaissez le retour sans être défensif.",
          "Proposez un canal de résolution (téléphone, e-mail).",
          "Restez bref et professionnel : l'objectif est l'exemple donné aux lectures.",
        ],
      },
      {
        type: "p",
        text: "Au-delà de l'image, répondre régulièrement encourage mécaniquement davantage d'avis, positifs comme négatifs, et nourrit votre présence en ligne.",
      },
    ],
  },
  {
    slug: "audit-de-fiche-les-5-indicateurs",
    title: "Audit de fiche : les 5 indicateurs à suivre",
    description:
      "Note moyenne, volume, régularité, taux de réponse, mots-clés : les indicateurs qui révèlent la maturité de votre e-réputation.",
    category: "Outils",
    date: "2026-05-15",
    readingTime: "4 min",
    blocks: [
      {
        type: "p",
        text: "Un audit de fiche ne doit pas être un bilan moral mais un diagnostic actionnable. Voici les cinq indicateurs à surveiller.",
      },
      {
        type: "ul",
        items: [
          "Note moyenne : visez 4,3/5 ou plus.",
          "Volume : un minimum de 40 à 50 avis pour être crédible localement.",
          "Régularité : des avis publiés chaque mois, pas par à-coups.",
          "Taux de réponse : 100 % des avis traités.",
          "Mots-clés : présence de votre métier et de votre ville dans les avis.",
        ],
      },
      {
        type: "p",
        text: "Notre outil d'audit de fiche estime cette maturité en quelques secondes, gratuitement et sans inscription.",
      },
    ],
  },
  {
    slug: "comment-demander-avis-google-client",
    title: "Comment demander un avis Google à un client ?",
    description:
      "Le moment, le canal et les mots pour demander un avis Google sans paraître intrusif. Guide pratique pour les entreprises.",
    category: "Guide",
    date: "2026-07-01",
    readingTime: "5 min",
    blocks: [
      {
        type: "p",
        text: "Demander un avis Google est un art : il faut solliciter au bon moment, sur le bon canal et avec le bon ton. Voici la méthode éprouvée.",
      },
      { type: "h2", text: "1. Choisissez le bon moment" },
      {
        type: "p",
        text: "Demandez l'avis juste après une expérience positive : fin de prestation, livraison réussie, encaissement. L'émotion positive est encore fraîche et le taux de réponse est maximal.",
      },
      { type: "h2", text: "2. Utilisez le canal le plus simple" },
      {
        type: "p",
        text: "Le SMS et l'e-mail sont les plus efficaces. Un message court avec votre lien direct ou QR code permet au client de publier son avis en moins d'une minute.",
      },
      { type: "h2", text: "3. Adoptez le bon ton" },
      {
        type: "ul",
        items: [
          "Soyez personnel : utilisez le prénom du client.",
          "Soyez précis : mentionnez la prestation ou le produit concerné.",
          "Soyez concis : une phrase suffit.",
          "Proposez le chemin le plus court : lien direct vers le formulaire d'avis.",
        ],
      },
      {
        type: "p",
        text: "Évitez les messages génériques ou trop commerciaux. L'authenticité du message encourage l'authenticité de l'avis.",
      },
    ],
  },
  {
    slug: "comment-creer-lien-direct-avis-google",
    title: "Comment créer un lien direct vers les avis Google",
    description:
      "Générez et partagez votre lien direct d'avis Google pour simplifier la collecte. Étape par étape.",
    category: "Guide",
    date: "2026-07-02",
    readingTime: "4 min",
    blocks: [
      {
        type: "p",
        text: "Un lien direct d'avis Google envoie le client straight au formulaire 5 étoiles, sans recherche ni navigation. C'est le moyen le plus rapide de collecter des avis.",
      },
      { type: "h2", text: "Étape 1 : récupérez votre lien" },
      {
        type: "p",
        text: "Depuis Google Business Profile, cliquez sur « Demander des avis ». Copiez le lien court (g.page/r/…) ou le lien long de votre fiche.",
      },
      { type: "h2", text: "Étape 2 : raccourcissez si nécessaire" },
      {
        type: "p",
        text: "Utilisez un raccourcisseur ou notre générateur pour obtenir un lien propre et personnalisé. Évitez les URLs trop longues ou incompréhensibles.",
      },
      { type: "h2", text: "Étape 3 : partagez partout" },
      {
        type: "ul",
        items: [
          "En signature d'e-mail et sur vos factures.",
          "Sur votre site web et vos réseaux sociaux.",
          "Dans vos messages de confirmation SMS ou e-mail.",
          "Sur vos documents papier : flyers, cartes de visite, tickets de caisse.",
        ],
      },
      {
        type: "p",
        text: "Notre générateur de lien et QR code vous permet de créer et personnaliser votre lien en quelques secondes.",
      },
    ],
  },
  {
    slug: "comment-creer-qr-code-avis-google",
    title: "Comment créer un QR code d'avis Google",
    description:
      "Générez un QR code lié à votre fiche Google, à imprimer en boutique, sur vos flyers ou vos cartes de visite.",
    category: "Guide",
    date: "2026-07-03",
    readingTime: "4 min",
    blocks: [
      {
        type: "p",
        text: "Un QR code d'avis Google transforme n'importe quel support physique en point de collecte. Le client scanne, il est redirigé directement vers le formulaire d'avis.",
      },
      { type: "h2", text: "Comment créer votre QR code" },
      {
        type: "p",
        text: "Utilisez notre générateur gratuit : copiez votre lien d'avis Google, personnalisez les couleurs et le design, puis téléchargez le QR code en haute résolution.",
      },
      { type: "h2", text: "Où l'utiliser" },
      {
        type: "ul",
        items: [
          "À l'accueil de votre boutique ou sur votre comptoir.",
          "Sur les tickets de caisse et les factures.",
          "Dans vos salles d'attente ou sur vos tables.",
          "Sur vos véhicules ou vos uniformes.",
          "Dans vos campagnes e-mailing et sur vos flyers.",
        ],
      },
      { type: "h2", text: "Bonnes pratiques" },
      {
        type: "p",
        text: "Testez le QR code avant impression. Vérifiez qu'il ouvre bien le formulaire d'avis et pas seulement votre fiche Google. Ajoutez un call-to-action clair : « Laissez votre avis ».",
      },
    ],
  },
  {
    slug: "pourquoi-avis-google-disparaissent",
    title: "Pourquoi mes avis Google disparaissent-ils ?",
    description:
      "Avis Google supprimés, filtrés ou non publiés : les causes possibles et ce que vous pouvez faire.",
    category: "Problèmes",
    date: "2026-07-04",
    readingTime: "5 min",
    blocks: [
      {
        type: "p",
        text: "Vos avis Google baissent ou disparaissent sans raison apparente ? Plusieurs explications existent, et des actions sont possibles.",
      },
      { type: "h2", text: "Les causes fréquentes" },
      {
        type: "ul",
        items: [
          "Avis non conformes aux règles Google (fake, rémunérés, hors sujet).",
          "Avis signalés par d'autres utilisateurs et modérés.",
          "Problème technique temporaire sur la fiche.",
          "Changement de nom ou de catégorie de la fiche.",
          "Fusion de fiches Google Business Profile.",
        ],
      },
      { type: "h2", text: "Que faire ?" },
      {
        type: "p",
        text: "Vérifiez d'abord que les avis respectent les règles. Si la suppression vous semble injustifiée, vous pouvez signaler le problème via le centre d'aide Google. Conservez vos preuves : captures d'écran, liens, témoignages.",
      },
      {
        type: "p",
        text: "Notre audit de fiche peut vous aider à détecter les anomalies et à restaurer votre réputation.",
      },
    ],
  },
  {
    slug: "comment-repondre-avis-negatif",
    title: "Comment répondre à un avis négatif ?",
    description:
      "Méthode et exemples pour répondre à un avis négatif sans se braquer, et transformer l'incident en opportunité.",
    category: "Guide",
    date: "2026-07-05",
    readingTime: "5 min",
    blocks: [
      {
        type: "p",
        text: "Un avis négatif bien répondu peut rassurer plus qu'un avis positif seul. Les futurs clients lisent d'abord la réponse.",
      },
      { type: "h2", text: "La structure d'une bonne réponse" },
      {
        type: "ul",
        items: [
          "Saluez et remerciez le client pour son retour.",
          "Reconnaissez le problème sans être défensif.",
          "Proposez une solution ou un contact direct.",
          "Restez professionnel, même si le ton est vif.",
        ],
      },
      { type: "h2", text: "Exemple concret" },
      {
        type: "p",
        text: "« Bonjour Marie, merci pour votre retour. Nous sommes désolés que votre expérience n'ait pas été à la hauteur. Nous prenons ce point très au sérieux et souhaitons échanger avec vous directement : pouvez-vous nous contacter au 01 84 16 35 29 ? »",
      },
      {
        type: "p",
        text: "Répondre rapidement et courtoisement montre votre sérieux. C'est aussi l'occasion de corriger un fait ou de renvoyer vers un canal privé.",
      },
    ],
    faq: [
      {
        question: "Comment répondre à un avis négatif sur Google ?",
        answer:
          "Remerciez le client, reconnaissez le problème sans être défensif, proposez un contact direct (téléphone ou e-mail) et restez professionnel. Répondre sous 24 h limite l'impact négatif.",
      },
      {
        question: "Faut-il répondre aux avis négatifs ?",
        answer:
          "Oui. Ignorer un avis négatif l'amplifie, tandis qu'une réponse calme et professionnelle est un signal de confiance pour les futurs clients qui lisent d'abord la réponse.",
      },
    ],
  },
  {
    slug: "peut-on-supprimer-faux-avis-google",
    title: "Peut-on supprimer un faux avis Google ?",
    description:
      "Signalement Google, conditions de suppression et délais : ce qu'il faut savoir pour faire retirer un avis frauduleux.",
    category: "Problèmes",
    date: "2026-07-06",
    readingTime: "5 min",
    blocks: [
      {
        type: "p",
        text: "Google supprime les avis qui violent ses règles : avis fictifs, rémunérés, diffamatoires ou sans lien avec l'établissement. Mais la procédure demande de la rigueur.",
      },
      { type: "h2", text: "Étape 1 : vérifiez la règle violée" },
      {
        type: "p",
        text: "Identifiez précisément pourquoi l'avis est contraire aux règles : pas de passage client, contenu offensant, conflit d'intérêts avéré.",
      },
      { type: "h2", text: "Étape 2 : signalez depuis Google Maps" },
      {
        type: "p",
        text: "Ouvrez la fiche, cliquez sur les trois points à côté de l'avis, puis « Signaler comme abusif ». Remplissez le formulaire avec le plus de détails possible.",
      },
      { type: "h2", text: "Étape 3 : suivez le dossier" },
      {
        type: "p",
        text: "Google traite les signalements en quelques jours. Si rien ne se passe, vous pouvez renouveler le signalement ou contacter le support Google Business Profile.",
      },
      {
        type: "p",
        text: "Notre équipe vous accompagne dans la gestion des avis litigieux et le suivi de votre réputation.",
      },
    ],
  },
  {
    slug: "combien-avis-faut-il-rassurer-clients",
    title: "Combien d'avis faut-il pour rassurer les clients ?",
    description:
      "Le nombre d'avis Google idéal pour renforcer la confiance et améliorer votre classement local.",
    category: "Guide",
    date: "2026-07-07",
    readingTime: "4 min",
    blocks: [
      {
        type: "p",
        text: "Il n'y a pas de nombre magique, mais des paliers de crédibilité. Plus votre fiche comporte d'avis récents et variés, plus elle inspire confiance.",
      },
      { type: "h2", text: "Les paliers clés" },
      {
        type: "ul",
        items: [
          "Moins de 10 avis : la fiche semble peu active.",
          "10 à 30 avis : vous commencez à rassurer.",
          "30 à 50 avis : crédibilité locale solide.",
          "Plus de 50 avis : vous apparaissez comme une référence.",
          "Au-delà de 100 avis : vous dominez la concurrence locale.",
        ],
      },
      { type: "h2", text: "La fraîcheur compte autant que le volume" },
      {
        type: "p",
        text: "Google valorise les avis récents. Un flux régulier est plus important qu'un pic isolé. Visez au moins quelques avis par mois, toute l'année.",
      },
      {
        type: "p",
        text: "Notre générateur de lien et notre outil d'audit vous aident à structurer votre collecte et à atteindre ces objectifs.",
      },
    ],
    faq: [
      {
        question: "Combien d'avis Google faut-il pour rassurer les clients ?",
        answer:
          "Comptez 10 à 30 avis pour commencer à rassurer, 30 à 50 pour une crédibilité locale solide, et plus de 100 pour dominer la concurrence locale. La fraîcheur compte autant que le volume.",
      },
      {
        question: "Le volume d'avis est-il plus important que la note ?",
        answer:
          "Les deux comptent. Google privilégie les fiches actives avec un flux régulier d'avis authentiques ; une note de 4,3/5 ou plus avec 40 à 50 avis est un bon objectif.",
      },
    ],
  },
  {
    slug: "acheter-avis-google-risques",
    title: "Acheter des avis Google : quels risques ?",
    description:
      "Sanctions Google, conséquences légales et alternative éthique pour obtenir des avis authentiques.",
    category: "Avertissement",
    date: "2026-07-08",
    readingTime: "6 min",
    blocks: [
      {
        type: "p",
        text: "Acheter des avis Google peut sembler tentant, mais les risques l'emportent largement sur les bénéfices supposés.",
      },
      { type: "h2", text: "Les risques pour votre fiche" },
      {
        type: "ul",
        items: [
          "Suppression de tous les avis suspects par Google.",
          "Bannissement temporaire ou définitif de votre fiche.",
          "Perte de visibilité dans le pack local.",
          "Déclassement dans les résultats de recherche.",
          "Signalement aux autorités de concurrence.",
        ],
      },
      { type: "h2", text: "Les risques légaux" },
      {
        type: "p",
        text: "En France, le Code de la consommation interdit les avis falsifiés. Les amendes peuvent atteindre plusieurs milliers d'euros. La DGCCRF peut ouvrir une enquête.",
      },
      { type: "h2", text: "L'alternative conforme" },
      {
        type: "p",
        text: "Préférez une collecte d'avis auprès de vos vrais clients. C'est durable, conforme et bien plus efficace à long terme. Nos outils vous aident à mettre en place un système de collecte éthique et performant.",
      },
    ],
  },
  {
    slug: "exemple-sms-demander-avis",
    title: "Exemple de SMS pour demander un avis Google",
    description:
      "Modèles de SMS prêts à envoyer pour solliciter un avis Google de vos clients, avec un taux de réponse élevé.",
    category: "Exemples",
    date: "2026-07-09",
    readingTime: "3 min",
    blocks: [
      {
        type: "p",
        text: "Le SMS reste le canal le plus direct et le plus personnel pour demander un avis. Voici des modèles adaptés à différents secteurs.",
      },
      { type: "h2", text: "Modèle général" },
      {
        type: "p",
        text: "« Bonjour {prénom}, merci pour votre visite chez {entreprise} ! Si vous avez apprécié votre expérience, laissez-nous votre avis Google : {lien}. Cela nous aide beaucoup. »",
      },
      { type: "h2", text: "Modèle pour un artisan" },
      {
        type: "p",
        text: "« Bonjour {prénom}, j'espère que l'intervention chez vous s'est bien passée. Votre avis compte : {lien}. Merci pour votre confiance ! »"
      },
      { type: "h2", text: "Modèle pour un commerce" },
      {
        type: "p",
        text: "« Merci {prénom} pour votre achat aujourd'hui ! Un petit geste pour nous : laissez votre avis Google en 30 secondes ici : {lien}. Bonne journée ! »"
      },
      {
        type: "p",
        text: "Personnalisez chaque message avec le prénom et le contexte de la visite. Un SMS trop générique a moins d'impact.",
      },
    ],
  },
  {
    slug: "exemple-email-demande-avis",
    title: "Exemple d'email de demande d'avis",
    description:
      "Modèles d'e-mails pour demander un avis Google à vos clients, avec un objet accrocheur et un CTA clair.",
    category: "Exemples",
    date: "2026-07-10",
    readingTime: "4 min",
    blocks: [
      {
        type: "p",
        text: "L'e-mail permet de détailler votre demande et de rappeler votre relation. Un bon objet et un CTA clair font la différence.",
      },
      { type: "h2", text: "Modèle de demande classique" },
      {
        type: "ul",
        items: [
          "Objet : Votre avis compte pour {entreprise}",
          "Corps : Rappel de la prestation, lien direct, remerciement.",
          "CTA : Bouton « Laisser mon avis Google »",
        ],
      },
      { type: "h2", text: "Exemple complet" },
      {
        type: "p",
        text: "« Bonjour {prénom},\n\nMerci encore pour votre confiance lors de votre {prestation} du {date}. Si vous avez été satisfait, nous serions ravis de lire votre avis Google : {lien}.\n\nCela ne prend que 30 secondes et ça nous aide énormément.\n\nMerci,\n{L'équipe} »"
      },
      { type: "h2", text: "Bonnes pratiques" },
      {
        type: "ul",
        items: [
          "Envoyez l'e-mail dans les 24 à 48h suivant la prestation.",
          "Mentionnez un détail précis de la visite pour personnaliser.",
          "Ajoutez un bouton visible plutôt qu'un simple lien.",
          "Relancez une fois si vous n'avez pas de réponse.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
