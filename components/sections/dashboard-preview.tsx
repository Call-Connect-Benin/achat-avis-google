import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CircleDollarSign,
  Clock3,
  MessageSquareText,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const activity = [
  { guide: "Nadia M.", campaign: "Restaurant Lyon", date: "Aujourd’hui, 10:42", status: "Validé" },
  { guide: "Thomas G.", campaign: "Plombier Paris", date: "Aujourd’hui, 09:18", status: "Publié" },
  { guide: "Sarah D.", campaign: "Garage Bordeaux", date: "Hier, 18:51", status: "Contrôle" },
  { guide: "Lucas A.", campaign: "Hôtel Nice", date: "Hier, 16:24", status: "Publié" },
];

export default function DashboardPreview() {
  return (
    <>
      <section className="border-y border-lime-400/15 bg-gradient-to-b from-lime-400/10 to-[#0d0d12] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Votre espace de pilotage</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Voyez qui publie, quand et pour quelle campagne
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              La plateforme centralise les guides, les preuves, les publications et les statistiques quotidiennes de chaque établissement.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-lime-400/25 bg-slate-950 shadow-2xl shadow-green-900/10">
            <div className="flex flex-wrap items-center gap-3 border-b border-white/10 px-4 py-3 sm:px-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-400 font-black text-white">A</span>
              <div>
                <p className="text-sm font-bold text-white">Centre de pilotage</p>
                <p className="text-xs text-slate-400">Données de démonstration</p>
              </div>
              <span className="ml-auto inline-flex items-center gap-2 rounded-full bg-green-400/10 px-3 py-1 text-xs font-semibold text-green-300">
                <span className="h-2 w-2 rounded-full bg-green-400" /> Synchronisé
              </span>
            </div>

            <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-[0.9fr_1.35fr]">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ["1 264", "Avis publiés"],
                    ["86", "Guides vérifiés"],
                    ["19", "Publications aujourd’hui"],
                    ["96 %", "Taux de validation"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-[#0d0d12]/[0.06] p-4">
                      <p className="text-2xl font-black text-lime-300">{value}</p>
                      <p className="mt-1 text-xs text-slate-400">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0d0d12]/[0.06] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">Avis publiés — 7 jours</p>
                    <span className="text-xs font-semibold text-green-300">+23 %</span>
                  </div>
                  <svg className="mt-4 h-32 w-full" viewBox="0 0 360 130" role="img" aria-label="Courbe des avis publiés sur sept jours">
                    <defs>
                      <linearGradient id="reviewArea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#a3e635" stopOpacity=".35" />
                        <stop offset="100%" stopColor="#a3e635" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 112 L55 85 L110 96 L165 55 L220 72 L275 28 L330 43 L360 18 L360 130 L0 130 Z" fill="url(#reviewArea)" />
                    <path d="M0 112 L55 85 L110 96 L165 55 L220 72 L275 28 L330 43 L360 18" fill="none" stroke="#a3e635" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    {[["0","112"],["55","85"],["110","96"],["165","55"],["220","72"],["275","28"],["330","43"],["360","18"]].map(([cx,cy]) => (
                      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4" fill="#f7fee7" stroke="#84cc16" strokeWidth="3" />
                    ))}
                  </svg>
                  <div className="mt-2 flex justify-between text-[10px] text-slate-400">
                    {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => <span key={day}>{day}</span>)}
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12]/[0.06]">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <p className="text-sm font-semibold text-white">Activité récente des guides</p>
                  <span className="text-xs text-slate-400">Temps réel</span>
                </div>
                <div className="divide-y divide-white/10">
                  {activity.map((row, index) => (
                    <div key={row.guide} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3.5 sm:grid-cols-[auto_1fr_1fr_auto]">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lime-300/10 text-sm font-bold text-lime-300">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white">{row.guide}</p>
                        <p className="truncate text-xs text-slate-400 sm:hidden">{row.campaign}</p>
                      </div>
                      <div className="hidden min-w-0 sm:block">
                        <p className="truncate text-sm text-slate-300">{row.campaign}</p>
                        <p className="flex items-center gap-1 text-xs text-slate-400"><Clock3 className="h-3 w-3" />{row.date}</p>
                      </div>
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
                        row.status === "Publié"
                          ? "bg-green-400/10 text-green-300"
                          : row.status === "Validé"
                            ? "bg-lime-400/10 text-lime-300"
                            : "bg-yellow-300/10 text-yellow-200"
                      }`}>{row.status}</span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-px border-t border-white/10 bg-[#0d0d12]/10">
                  {[
                    [BadgeCheck, "Preuves contrôlées"],
                    [ShieldCheck, "Guides vérifiés"],
                    [MessageSquareText, "Avis suivis"],
                  ].map(([Icon, label]) => {
                    const FeatureIcon = Icon as typeof BadgeCheck;
                    return (
                      <div key={label as string} className="bg-slate-950/80 p-3 text-center">
                        <FeatureIcon className="mx-auto h-4 w-4 text-lime-300" />
                        <p className="mt-1 text-[10px] text-slate-400">{label as string}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d12] py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Entreprise ou guide : choisissez votre espace</h2>
            <p className="mt-4 text-slate-300">Deux interfaces, deux objectifs, un même suivi transparent.</p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article id="entreprise" className="rounded-3xl border border-lime-400/25 bg-lime-400/[0.06]/60 p-6 sm:p-7">
              <Building2 className="h-8 w-8 text-lime-300" />
              <h3 className="mt-4 text-2xl font-bold text-white">Espace Entreprise</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Pour les artisans, commerces et réseaux qui veulent commander, monitorer et analyser leurs campagnes d’avis.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                <li>• Statistiques par jour et par établissement</li>
                <li>• Liste des guides et preuves de publication</li>
                <li>• Suivi des avis publiés, en attente ou remplacés</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact?profil=entreprise" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700">Créer un compte entreprise <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/connexion" className="rounded-full border border-lime-400/35 bg-[#0d0d12] px-5 py-2.5 text-sm font-semibold text-lime-300">Se connecter</Link>
              </div>
            </article>

            <article id="guide" className="rounded-3xl border border-lime-300 bg-yellow-300/[0.06]/60 p-6 sm:p-7">
              <UserRound className="h-8 w-8 text-lime-700" />
              <h3 className="mt-4 text-2xl font-bold text-white">Espace Guide</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">Pour les guides locaux qui veulent sélectionner des missions et gagner de l’argent en partageant des expériences authentiques.</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                <li>• Missions proposées selon votre localisation</li>
                <li>• Dépôt de preuve et suivi de validation</li>
                <li className="flex items-center gap-2"><CircleDollarSign className="h-4 w-4 text-lime-700" /> Gains et paiements suivis dans votre espace</li>
              </ul>
              <Link href="/contact?profil=guide" className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-yellow-300/[0.06]0">Devenir guide rémunéré <ArrowRight className="h-4 w-4" /></Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
