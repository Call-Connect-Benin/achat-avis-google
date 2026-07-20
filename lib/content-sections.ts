import type { ContentSectionsData } from "@/components/content-sections";

type Context = "methode" | "gestion" | "secteur" | "ville" | "metier" | "principal";

function pickReviews(seed: string): { name: string; city: string; color: string }[] {
  const sets: Record<string, { name: string; city: string; color: string }[]> = {
    default: [
      { name: "Camille", city: "Lyon", color: "bg-blue-500" },
      { name: "Karim", city: "Paris", color: "bg-emerald-500" },
      { name: "Sylvie", city: "Nice", color: "bg-amber-500" },
    ],
    restaurant: [
      { name: "Jean-Marc", city: "Marseille", color: "bg-rose-500" },
      { name: "Sophie", city: "Lyon", color: "bg-emerald-500" },
      { name: "Pierre", city: "Paris", color: "bg-blue-500" },
    ],
    artisan: [
      { name: "Alain", city: "Bordeaux", color: "bg-amber-500" },
      { name: "Chloé", city: "Nantes", color: "bg-sky-500" },
      { name: "Marc", city: "Lille", color: "bg-emerald-500" },
    ],
    sante: [
      { name: "Dr. Lefevre", city: "Paris", color: "bg-blue-500" },
      { name: "Nadia", city: "Toulouse", color: "bg-emerald-500" },
      { name: "Thomas", city: "Nice", color: "bg-rose-500" },
    ],
  };
  if (seed.includes("restaurant")) return sets.restaurant;
  if (seed.includes("artisan") || seed.includes("plombier") || seed.includes("électricien") || seed.includes("chauffag"))
    return sets.artisan;
  if (seed.includes("dentiste") || seed.includes("sant") || seed.includes("kin") || seed.includes("vétér"))
    return sets.sante;
  return sets.default;
}

type BuildOpts = {
  context: Context;
  site: string;
  eyebrow: string;
  titleLeft: string;
  titleRight: string;
  titleImage: string;
  titleIllustration: string;
  imageSrc?: string;
};

function buildContent(o: BuildOpts): ContentSectionsData {
  const { context, site, eyebrow, titleLeft, titleRight, titleImage, titleIllustration } = o;

  let textLeft1: string;
  let textLeft2: string;
  let textRight1: string;
  let textRight2: string;
  let textImageBody: string;
  let textIllustration1: string;
  let textIllustration2: string;
  let reviewEyebrow: string;

  if (context === "ville") {
    const ville = site;
    textLeft1 = `À ${ville}, « ${titleLeft} » n’est pas qu’une promesse : c’est ce que vivent chaque jour les entreprises locales. Les avis Google en sont le reflet direct, et votre fiche en est la vitrine.`;
    textLeft2 = `Sur « ${titleRight} », l’approche change complètement : à ${ville}, la confiance se construit autrement selon les quartiers, les métiers et les habitudes des consommateurs.`;
    textRight1 = `« ${titleRight} » : à ${ville}, cet état d’esprit se traduit par des fiches Google mieux remplies, des réponses aux avis plus personnalisées et une visibilité accrue dans les recherches locales.`;
    textRight2 = `Chaque entreprise de ${ville} peut incarner « ${titleRight} » à sa façon, simplement en valorisant ce qui la rend unique auprès de ses clients.`;
    textImageBody = `« ${titleImage} » dans le contexte de ${ville} : ce n’est pas un concept générique, c’est la manière dont votre établissement apparaît aux yeux des habitants et des visiteurs de la ville.`;
    textIllustration1 = `« ${titleIllustration} » à ${ville} : les avis se succèdent en temps réel sur votre fiche, et chaque nouveau commentaire renforce la crédibilité de votre établissement auprès des prospects.`;
    textIllustration2 = `L’animation ci-contre montre comment ${ville} vit au rythme des avis : pas de contenu figé, mais une preuve dynamique que votre réputation évolue constamment.`;
    reviewEyebrow = `Avis récents — ${site}`;
  } else if (context === "methode") {
    textLeft1 = `« ${titleLeft} » est une méthode de collecte d’avis Google qui repose sur la simplicité : vos clients n’ont qu’une seule action à faire, et vous recevez leurs retours sans friction.`;
    textLeft2 = `Appliquée au bon moment, « ${titleLeft} » transforme une expérience satisfaite en avis public, sans interrompre le parcours client et sans alourdir votre quotidien.`;
    textRight1 = `« ${titleRight} » : cette méthode ne se limite pas à demander un avis, elle structure votre démarche pour que chaque sollicitation ait plus de chances d’aboutir.`;
    textRight2 = `En variant les canaux et le timing, « ${titleLeft} » devient un levier durable : vos clients deviennent vos meilleurs ambassadeurs, et votre fiche gagne en authenticité.`;
    textImageBody = `« ${titleImage} » : cette méthode ne dépend pas d’un outil unique, mais d’un enchaînement logique qui maximise le taux de réponse à chaque étape.`;
    textIllustration1 = `« ${titleIllustration} » : chaque avis collecté via « ${titleLeft} » apparaît en temps réel sur votre fiche Google, renforçant votre crédibilité auprès des nouveaux prospects.`;
    textIllustration2 = `L’animation ci-contre suit le parcours d’un avis depuis la demande jusqu’à sa publication : pas de copier-coller, mais une preuve vivante de l’efficacité de la méthode.`;
    reviewEyebrow = `Avis collectés via ${site}`;
  } else if (context === "gestion") {
    textLeft1 = `« ${titleLeft} » : la gestion des avis Google commence par une règle simple : chaque retour mérite une réponse, qu’il soit positif ou négatif.`;
    textLeft2 = `En traitant « ${titleRight} » avec méthode, vous montrez que votre entreprise écoute, corrige et progresse : un signal fort pour les prospects comme pour Google.`;
    textRight1 = `« ${titleRight} » : une réponse bien calibrée ne désamorce pas seulement une critique, elle renforce la confiance de tous les lecteurs qui la consultent.`;
    textRight2 = `La gestion proactive des avis transforme « ${titleLeft} » en outil de différenciation : vous ne subissez plus votre e-réputation, vous la construisez.`;
    textImageBody = `« ${titleImage} » : une bonne gestion passe par un tableau de bord clair, des alertes rapides et des réponses personnalisées, pas par des réponses copiées-collées.`;
    textIllustration1 = `« ${titleIllustration} » : les avis gérés en temps réel créent un cercle vertueux : plus vous répondez, plus votre fiche apparaît comme active et fiable.`;
    textIllustration2 = `L’animation ci-contre montre le flux continu des avis et des réponses : chaque interaction compte, et votre image de marque se construit au quotidien.`;
    reviewEyebrow = `Avis gérés — ${site}`;
  } else if (context === "secteur" || context === "metier") {
    textLeft1 = `« ${titleLeft} » : dans le secteur ${site}, les avis Google ne sont pas un détail, c’est souvent le premier critère de choix pour les clients potentiels.`;
    textLeft2 = `Sur « ${titleRight} », la spécificité de votre activité fait la différence : ce n’est pas le nombre d’avis qui compte seul, mais leur pertinence et leur authenticité.`;
    textRight1 = `« ${titleRight} » : chaque secteur a ses codes, et ${site} ne fait pas exception. Votre fiche doit parler le langage de vos clients pour convertir les recherches en visites.`;
    textRight2 = `En adaptant votre collecte et vos réponses aux attentes de ${site}, « ${titleLeft} » devient une preuve de professionnalisme que vos concurrents ne peuvent pas copier.`;
    textImageBody = `« ${titleImage} » : dans ${site}, la fiche Google idéale ne ressemble à aucune autre : elle met en valeur ce qui compte vraiment pour vos clients.`;
    textIllustration1 = `« ${titleIllustration} » : les avis de vos pairs dans ${site} montrent que la confiance se gagne avis par avis, et que chaque commentaire renforce votre position locale.`;
    textIllustration2 = `L’animation ci-contre synthétise l’expérience client typique dans ${site} : de la recherche à la décision, les avis sont le fil conducteur.`;
    reviewEyebrow = `Avis vérifiés — ${site}`;
  } else {
    textLeft1 = `« ${titleLeft} » : ce sujet est au cœur de votre stratégie d’e-réputation. Votre fiche Google est le point de rencontre entre votre offre et les attentes des internautes.`;
    textLeft2 = `En approfondissant « ${titleRight} », vous rendez votre page plus crédible et plus proche des préoccupations réelles de vos visiteurs.`;
    textRight1 = `« ${titleRight} » : chaque action compte pour améliorer votre visibilité locale. Votre fiche devient alors un atout commercial, pas seulement une page d’information.`;
    textRight2 = `En rendant votre contenu unique et pertinent, « ${titleLeft} » vous démarque des concurrents qui se contentent du minimum.`;
    textImageBody = `« ${titleImage} » : une image vaut mille mots, mais dans votre contexte, elle doit surtout raconter une histoire qui ressemble à votre entreprise.`;
    textIllustration1 = `« ${titleIllustration} » : la preuve par l’exemple est plus efficace qu’un long discours. Cette animation montre concrètement ce que vos clients vivent.`;
    textIllustration2 = `L’animation ci-contre illustre le parcours client : une preuve vivante et dynamique qui renforce la crédibilité de votre démarche.`;
    reviewEyebrow = `Avis vérifiés — ${site}`;
  }

  return {
    eyebrow,
    titleLeft,
    textLeft1,
    textLeft2,
    titleRight,
    textRight1,
    textRight2,
    titleImage,
    textImage: textImageBody,
    bullets: [
      `${titleLeft} — appliqué à ${site}`,
      `${titleRight} — adapté à votre activité`,
      `Cohérence avec « ${titleImage} »`,
    ],
    imageAlt: `Illustration : ${titleImage}`,
    imageSrc: o.imageSrc ?? "/image copy.png",
    titleIllustration,
    textIllustration1,
    textIllustration2,
    reviewEyebrow,
    reviews: pickReviews(site),
  };
}

export function getContentSections(
  context: Context,
  title: string,
  options?: {
    ville?: string;
    metier?: string;
    imageSrc?: string;
    slug?: string;
    site?: string;
    eyebrow?: string;
    titleLeft?: string;
    titleRight?: string;
    titleImage?: string;
    titleIllustration?: string;
  },
): ContentSectionsData {
  const site = options?.site ?? title;
  const eyebrow = options?.eyebrow ?? "Notre approche";
  const titleLeft = options?.titleLeft ?? `Comprendre ${title}`;
  const titleRight = options?.titleRight ?? `Réussir avec ${title}`;
  const titleImage = options?.titleImage ?? `L'image de ${title}`;
  const titleIllustration = options?.titleIllustration ?? "La preuve en temps réel";

  return buildContent({
    context,
    site,
    eyebrow,
    titleLeft,
    titleRight,
    titleImage,
    titleIllustration,
    imageSrc: options?.imageSrc,
  });
}
