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
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            Votre e-réputation
          </p>
          <p className="text-xs text-slate-500">Vue d'ensemble</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
          <CheckCircle2 className="h-3.5 w-3.5" /> En direct
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-3.5 w-3.5 fill-current" />
            <span className="text-sm font-semibold text-slate-900">4,8</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-500">Note moyenne</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="flex items-center gap-1 text-slate-900">
            <MessageSquare className="h-3.5 w-3.5" />
            <span className="text-sm font-semibold">128</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-500">Avis collectés</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="flex items-center gap-1 text-slate-900">
            <TrendingUp className="h-3.5 w-3.5" />
            <span className="text-sm font-semibold">96%</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-500">Taux de réponse</p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {reviews.map((r) => (
          <div key={r.name} className="rounded-xl bg-slate-50 p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-900">
                {r.name}
              </span>
              <span className="flex gap-0.5 text-amber-500">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-600">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
