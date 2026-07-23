import Link from "next/link";
import { ArrowRight, MessageSquareText, SearchCheck, Store } from "lucide-react";

const paths = [
  {
    title: "Faciliter la demande",
    text: "Réduisez les frictions avec un lien direct, un QR code ou un message envoyé après une expérience client réussie.",
    icon: MessageSquareText,
    links: [
      { href: "/methodes/lien-avis-google", label: "Créer un lien d’avis Google" },
      { href: "/methodes/qr-code-avis-google", label: "Utiliser un QR code" },
      { href: "/methodes/demande-avis-par-sms", label: "Préparer une demande par SMS" },
    ],
  },
  {
    title: "Améliorer la fiche",
    text: "Contrôlez les informations visibles, suivez la note et répondez aux commentaires avec un ton cohérent.",
    icon: SearchCheck,
    links: [
      { href: "/audit-fiche-google", label: "Auditer votre fiche Google" },
      { href: "/gestion/repondre-avis-google", label: "Répondre aux avis" },
      { href: "/gestion/note-google-baisse", label: "Comprendre une baisse de note" },
    ],
  },
  {
    title: "Adapter au métier",
    text: "Le bon moment et le bon message changent selon le parcours client, la fréquence d’achat et le secteur.",
    icon: Store,
    links: [
      { href: "/secteurs/avis-google-restaurant", label: "Stratégie pour restaurants" },
      { href: "/secteurs/avis-google-artisan", label: "Stratégie pour artisans" },
      { href: "/secteurs/avis-google-garage", label: "Stratégie pour garages" },
    ],
  },
];

export default function ActionPlan() {
  return (
    <section className="border-y border-lime-400/15 bg-[#0d0d12] py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-3xl">
          <p className="eyebrow">Plan d’action local</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trois leviers pour obtenir des avis plus régulièrement
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Commencez par simplifier la demande, consolidez votre fiche puis adaptez le parcours à votre activité.
          </p>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {paths.map((path) => (
            <article key={path.title} className="rounded-2xl border border-lime-400/15 bg-lime-400/[0.06]/40 p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white">
                <path.icon aria-hidden className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">{path.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{path.text}</p>
              <ul className="mt-5 space-y-3">
                {path.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-lime-300 transition hover:text-lime-600"
                    >
                      <ArrowRight aria-hidden className="h-4 w-4" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
