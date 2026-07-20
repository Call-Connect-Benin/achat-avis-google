export type VilleData = {
  slug: string;
  name: string;
  population: string;
  specialty: string;
  localTip: string;
  exampleBusiness: string;
  faqs: { question: string; answer: string }[];
};

export const villesData: VilleData[] = [
  {
    slug: "paris",
    name: "Paris",
    population: "~2,2 millions d'habitants",
    specialty: "Restauration, hôtellerie, services haut de gamme",
    localTip: "Dans la capitale, la concurrence est maximale : chaque arrondissement a ses adresses stars, et les avis Google sont le premier filtre des consommateurs avant de réserver une table ou un hôtel.",
    exampleBusiness: "Un restaurant du Marais qui passe de 3,8 à 4,6/5 en 2 mois grâce à des demandes d'avis post-repas et des réponses personnalisées.",
    faqs: [
      {
        question: "Comment obtenir plus d'avis Google à Paris ?",
        answer:
          "Demandez l'avis juste après l'expérience, partagez un QR code sur vos factures et utilisez un lien direct. Les Parisiens sont exigeants : une note de 4,5/5 ou plus est souvent nécessaire pour se démarquer.",
      },
      {
        question: "Quel est le meilleur moment pour demander un avis dans un restaurant parisien ?",
        answer:
          "Juste après le repas, quand l'expérience est encore fraîche. Un message SMS ou un QR code sur l'addition maximise le taux de réponse.",
      },
    ],
  },
  {
    slug: "lyon",
    name: "Lyon",
    population: "~540 000 habitants",
    specialty: "Restauration, artisans du bâtiment, services aux entreprises",
    localTip: "À Lyon, le bouche-à-oreille est roi : les avis Google renforcent une réputation déjà traditionnellement fondée sur le réseau et la recommandation.",
    exampleBusiness: "Un plombier lyonnais qui passe de 12 à 58 avis en 3 mois en partageant un QR code sur ses factures et en relançant par SMS après chaque intervention.",
    faqs: [
      {
        question: "Comment améliorer sa note Google à Lyon ?",
        answer:
          "Collectez des avis après chaque intervention, répondez systématiquement et partagez des photos de vos réalisations. Les Lyonnais valorisent l'authenticité et le savoir-faire.",
      },
      {
        question: "Les avis Google sont-ils importants pour les artisans à Lyon ?",
        answer:
          "Oui, plus de 60% des clients consultent les avis avant de faire appel à un artisan. Une note de 4,3/5 ou plus génère 2 fois plus de demandes de devis.",
      },
    ],
  },
  {
    slug: "marseille",
    name: "Marseille",
    population: "~870 000 habitants",
    specialty: "Commerce de proximité, restauration, services aux particuliers",
    localTip: "À Marseille, la franchise et l'authenticité sont très valorisées : les avis Google sincères et détaillés sont particulièrement lus et partagés.",
    exampleBusiness: "Un salon de coiffure qui stabilise sa note à 4,8/5 en collectant systématiquement les avis en caisse et en y répondant avec personnalité.",
    faqs: [
      {
        question: "Comment obtenir des avis Google à Marseille ?",
        answer:
          "Demandez l'avis en fin de prestation, soyez transparent sur vos tarifs et répondez à chaque commentaire. Les Marseillais apprécient la franchise et l'humain.",
      },
      {
        question: "Quel canal marche le mieux à Marseille ?",
        answer:
          "Le SMS et le QR code en boutique sont très efficaces. Un message court et direct, sans langue de bois, génère plus de réponses.",
      },
    ],
  },
  {
    slug: "bordeaux",
    name: "Bordeaux",
    population: "~260 000 habitants",
    specialty: "Vin, restauration, artisanat, tourisme",
    localTip: "Bordeaux attire une clientèle locale et internationale : les avis Google sont essentiels pour convertir les recherches touristiques et renforcer la confiance des habitants.",
    exampleBusiness: "Un artisan viticulteur qui utilise un lien d'avis direct sur ses factures et gagne +40% de visibilité locale en 3 mois.",
    faqs: [
      {
        question: "Comment gérer sa e-réputation à Bordeaux ?",
        answer:
          "Mettez en avant vos spécificités locales (vin, gastronomie, savoir-faire) dans vos réponses aux avis. Les touristes comme les locaux recherchent l'authenticité.",
      },
      {
        question: "Les avis Google sont-ils importants pour le tourisme à Bordeaux ?",
        answer:
          "Oui, plus de 75% des touristes consultent les avis avant de choisir un restaurant ou un hôtel. Une note élevée peut faire la différence pendant la haute saison.",
      },
    ],
  },
  {
    slug: "lille",
    name: "Lille",
    population: "~235 000 habitants",
    specialty: "Commerce, services, événementiel",
    localTip: "Lille est une ville très commerçante : la proximité prime, et les avis Google sont le premier critère de choix pour les habitants qui recherchent un service ou un magasin proche.",
    exampleBusiness: "Un commerce de centre-ville qui double son nombre d'avis en ajoutant un QR code sur le ticket de caisse et en relançant par email.",
    faqs: [
      {
        question: "Comment collecter des avis dans un commerce à Lille ?",
        answer:
          "Affichez un QR code sur le ticket de caisse, envoyez un email de remerciement avec un lien direct et formez votre équipe à demander l'avis de vive voix.",
      },
      {
        question: "Quel est l'impact des avis Google sur les commerces lillois ?",
        answer:
          "Les commerces avec plus de 30 avis et une note de 4,3/5 ou plus voient leur fréquentation augmenter de 25% en moyenne, selon les études locales.",
      },
    ],
  },
  {
    slug: "toulouse",
    name: "Toulouse",
    population: "~500 000 habitants",
    specialty: "Aéronautique, tech, restauration, services",
    localTip: "Les Toulousains apprécient la clarté et l'efficacité : une fiche Google bien structurée, avec des avis authentiques et des réponses précises, attire naturellement plus de clients.",
    exampleBusiness: "Une agence de services qui améliore sa note de 3,9 à 4,5/5 en 2 mois grâce à des demandes d'avis automatisées après chaque prestation.",
    faqs: [
      {
        question: "Comment améliorer sa note Google à Toulouse ?",
        answer:
          "Automatisez vos demandes d'avis après chaque prestation, répondez aux avis sous 24h et optimisez votre fiche avec des photos et des descriptions détaillées.",
      },
      {
        question: "Les Toulousains font-ils confiance aux avis Google ?",
        answer:
          "Oui, 68% des Toulousains consultent les avis Google avant de choisir un prestataire. Une note élevée et des avis récents sont des signaux de confiance forts.",
      },
    ],
  },
  {
    slug: "nantes",
    name: "Nantes",
    population: "~320 000 habitants",
    specialty: "Créativité, services, restauration, tech",
    localTip: "Nantes valorise l'originalité et l'engagement local : les avis Google reflètent l'identité de la ville et influencent fortement le choix des consommateurs.",
    exampleBusiness: "Un institut de beauté qui fidélise sa clientèle et attire de nouvelles clientes en partageant ses meilleurs avis sur Instagram et Google.",
    faqs: [
      {
        question: "Comment utiliser les avis Google pour un commerce à Nantes ?",
        answer:
          "Partagez vos avis sur les réseaux locaux, répondez avec créativité et mettez en avant vos spécificités nantaises. Les Nantais apprécient l'authenticité et l'originalité.",
      },
      {
        question: "Quel est l'impact des avis Google sur les entreprises nantaises ?",
        answer:
          "Les entreprises avec une note de 4,4/5 ou plus et plus de 40 avis voient leur visibilité locale augmenter de 35% en moyenne.",
      },
    ],
  },
  {
    slug: "nice",
    name: "Nice",
    population: "~340 000 habitants",
    specialty: "Tourisme, hôtellerie, restauration, services",
    localTip: "Nice est une ville très saisonnière : les avis Google publiés pendant la haute saison ont un impact direct sur les réservations futures et la visibilité sur Google Travel.",
    exampleBusiness: "Un hôtel qui augmente ses réservations de +25% en répondant à tous les avis et en collectant systématiquement les retours au check-out.",
    faqs: [
      {
        question: "Comment optimiser sa fiche Google pour un hôtel à Nice ?",
        answer:
          "Mettez à jour vos disponibilités, répondez aux avis en plusieurs langues et collectez les retours juste après le check-out. Les voyageurs consultent les avis avant de réserver.",
      },
      {
        question: "Quel est l'impact des avis Google sur les réservations à Nice ?",
        answer:
          "Les hôtels avec une note de 4,4/5 ou plus reçoivent 3 fois plus de demandes de réservation. Les avis récents pendant la haute saison sont décisifs.",
      },
    ],
  },
  {
    slug: "strasbourg",
    name: "Strasbourg",
    population: "~290 000 habitants",
    specialty: "Administration européenne, tourisme, restauration, commerce",
    localTip: "Strasbourg accueille une population internationale et locale : les avis Google en plusieurs langues renforcent la confiance et améliorent le référencement local.",
    exampleBusiness: "Un restaurant du centre-ville qui attire plus de touristes et de locaux en affichant un QR code sur les tables et en répondant aux avis en français et en anglais.",
    faqs: [
      {
        question: "Comment répondre aux avis Google en plusieurs langues à Strasbourg ?",
        answer:
          "Utilisez un ton poli et concis, remerciez le client et proposez un contact si nécessaire. Une réponse en anglais ou en allemand renforce la confiance des visiteurs internationaux.",
      },
      {
        question: "Les avis Google sont-ils importants pour le tourisme à Strasbourg ?",
        answer:
          "Oui, plus de 70% des touristes consultent les avis avant de choisir un restaurant ou un hôtel. Une note élevée et des réponses multilingues sont un atout majeur.",
      },
    ],
  },
  {
    slug: "montpellier",
    name: "Montpellier",
    population: "~300 000 habitants",
    specialty: "Éducation, santé, restauration, services",
    localTip: "Montpellier est une ville dynamique et jeune : les avis Google sont particulièrement lus par les étudiants et les nouveaux arrivants qui cherchent des services de proximité.",
    exampleBusiness: "Un cabinet de santé qui renforce la confiance des patients en affichant ses avis Google dans la salle d'attente et en y répondant systématiquement.",
    faqs: [
      {
        question: "Comment gérer sa e-réputation à Montpellier ?",
        answer:
          "Mettez à jour vos horaires et services, répondez aux avis avec empathie et collectez les retours après chaque consultation. Les étudiants et nouveaux arrivants sont très sensibles aux avis.",
      },
      {
        question: "Quel est l'impact des avis Google sur les cabinets de santé à Montpellier ?",
        answer:
          "92% des patients lisent les avis avant de choisir un praticien. Une note de 4,4/5 ou plus et des témoignages détaillés augmentent la confiance et les rendez-vous.",
      },
    ],
  },
];

export function villeDataFromSlug(slug: string): VilleData | undefined {
  return villesData.find((v) => v.slug === slug);
}
