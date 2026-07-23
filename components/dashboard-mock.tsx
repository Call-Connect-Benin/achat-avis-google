import { Star, TrendingUp, MessageSquare, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    name: "Claire B.",
    rating: 5,
    text: "Service rapide et professionnel, je recommande.",
  },
  {
    name: "Marc T.",
    rating: 5,
    text: "Très satisfait de la prestation, équipe à l'écoute.",
  },
  {
    name: "Nadia R.",
    rating: 4,
    text: "Bonne expérience globale, merci pour votre aide.",
  },
];

export default function DashboardMock() {
  return (
    <div className="rounded-2xl bg-[#0d0d12] p-5 shadow-sm ring-1 ring-white/10">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white">
            Votre e-réputation
          </p>
          <p className="text-xs text-slate-400">Vue d'ensemble</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#17171f] px-2 py-1 text-xs font-medium text-slate-300">
          <CheckCircle2 className="h-3.5 w-3.5" /> En direct
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-[#111118] p-3">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-sm font-semibold text-white">4,8</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Note moyenne</p>
        </div>
        <div className="rounded-xl bg-[#111118] p-3">
          <div className="flex items-center gap-1 text-white">
            <MessageSquare className="h-3.5 w-3.5" />
            <span className="text-sm font-semibold">128</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Avis collectés</p>
        </div>
        <div className="rounded-xl bg-[#111118] p-3">
          <div className="flex items-center gap-1 text-white">
            <TrendingUp className="h-3.5 w-3.5" />
            <span className="text-sm font-semibold">96%</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-400">Taux de réponse</p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-xl bg-[#111118] p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white">
                {r.name}
              </span>
              <span className="flex gap-0.5 text-amber-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-300">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
