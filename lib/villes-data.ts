export type VilleData = {
  slug: string;
  name: string;
  population: string;
  specialty: string;
  localTip: string;
  exampleBusiness: string;
};

export const villesData: VilleData[] = [
  {
    slug: "paris",
    name: "Paris",
    population: "~2,2 millions d'habitants",
    specialty: "Restauration, hôtellerie, services haut de gamme",
    localTip: "Dans la capitale, la concurrence est maximale : chaque arrondissement a ses adresses stars, et les avis Google sont le premier filtre des consommateurs avant de réserver une table ou un hôtel.",
    exampleBusiness: "Un restaurant du Marais qui passe de 3,8 à 4,6/5 en 2 mois grâce à des demandes d'avis post-repas et des réponses personnalisées.",
  },
  {
    slug: "lyon",
    name: "Lyon",
    population: "~540 000 habitants",
    specialty: "Restauration, artisans du bâtiment, services aux entreprises",
    localTip: "À Lyon, le bouche-à-oreille est roi : les avis Google renforcent une réputation déjà traditionnellement fondée sur le réseau et la recommandation.",
    exampleBusiness: "Un plombier lyonnais qui passe de 12 à 58 avis en 3 mois en partageant un QR code sur ses factures et en relançant par SMS après chaque intervention.",
  },
  {
    slug: "marseille",
    name: "Marseille",
    population: "~870 000 habitants",
    specialty: "Commerce de proximité, restauration, services aux particuliers",
    localTip: "À Marseille, la franchise et l'authenticité sont très valorisées : les avis Google sincères et détaillés sont particulièrement lus et partagés.",
    exampleBusiness: "Un salon de coiffure qui stabilise sa note à 4,8/5 en collectant systématiquement les avis en caisse et en y répondant avec personnalité.",
  },
  {
    slug: "bordeaux",
    name: "Bordeaux",
    population: "~260 000 habitants",
    specialty: "Vin, restauration, artisanat, tourisme",
    localTip: "Bordeaux attire une clientèle locale et internationale : les avis Google sont essentiels pour convertir les recherches touristiques et renforcer la confiance des habitants.",
    exampleBusiness: "Un artisan viticulteur qui utilise un lien d'avis direct sur ses factures et gagne +40% de visibilité locale en 3 mois.",
  },
  {
    slug: "lille",
    name: "Lille",
    population: "~235 000 habitants",
    specialty: "Commerce, services, événementiel",
    localTip: "Lille est une ville très commerçante : la proximité prime, et les avis Google sont le premier critère de choix pour les habitants qui recherchent un service ou un magasin proche.",
    exampleBusiness: "Un commerce de centre-ville qui double son nombre d'avis en ajoutant un QR code sur le ticket de caisse et en relançant par email.",
  },
  {
    slug: "toulouse",
    name: "Toulouse",
    population: "~500 000 habitants",
    specialty: "Aéronautique, tech, restauration, services",
    localTip: "Les Toulousains apprécient la clarté et l'efficacité : une fiche Google bien structurée, avec des avis authentiques et des réponses précises, attire naturellement plus de clients.",
    exampleBusiness: "Une agence de services qui améliore sa note de 3,9 à 4,5/5 en 2 mois grâce à des demandes d'avis automatisées après chaque prestation.",
  },
  {
    slug: "nantes",
    name: "Nantes",
    population: "~320 000 habitants",
    specialty: "Créativité, services, restauration, tech",
    localTip: "Nantes valorise l'originalité et l'engagement local : les avis Google reflètent l'identité de la ville et influencent fortement le choix des consommateurs.",
    exampleBusiness: "Un institut de beauté qui fidélise sa clientèle et attire de nouvelles clientes en partageant ses meilleurs avis sur Instagram et Google.",
  },
  {
    slug: "nice",
    name: "Nice",
    population: "~340 000 habitants",
    specialty: "Tourisme, hôtellerie, restauration, services",
    localTip: "Nice est une ville très saisonnière : les avis Google publiés pendant la haute saison ont un impact direct sur les réservations futures et la visibilité sur Google Travel.",
    exampleBusiness: "Un hôtel qui augmente ses réservations de +25% en répondant à tous les avis et en collectant systématiquement les retours au check-out.",
  },
  {
    slug: "strasbourg",
    name: "Strasbourg",
    population: "~290 000 habitants",
    specialty: "Administration européenne, tourisme, restauration, commerce",
    localTip: "Strasbourg accueille une population internationale et locale : les avis Google en plusieurs langues renforcent la confiance et améliorent le référencement local.",
    exampleBusiness: "Un restaurant du centre-ville qui attire plus de touristes et de locaux en affichant un QR code sur les tables et en répondant aux avis en français et en anglais.",
  },
  {
    slug: "montpellier",
    name: "Montpellier",
    population: "~300 000 habitants",
    specialty: "Éducation, santé, restauration, services",
    localTip: "Montpellier est une ville dynamique et jeune : les avis Google sont particulièrement lus par les étudiants et les nouveaux arrivants qui cherchent des services de proximité.",
    exampleBusiness: "Un cabinet de santé qui renforce la confiance des patients en affichant ses avis Google dans la salle d'attente et en y répondant systématiquement.",
  },
];

export function villeDataFromSlug(slug: string): VilleData | undefined {
  return villesData.find((v) => v.slug === slug);
}
