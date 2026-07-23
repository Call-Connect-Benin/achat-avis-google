import Link from "next/link";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { createBusiness } from "./actions";
import { logout } from "@/app/auth/actions";

export const metadata = { title: "Mon espace" };

export default async function EspacePage() {
  const session = await getSession();
  const userId = session!.userId;

  const [businesses, totalReviews] = await Promise.all([
    prisma.business.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: { _count: { select: { reviews: true, links: true } } },
    }),
    prisma.review.count({ where: { business: { userId } } }),
  ]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">
            Bonjour {session!.name}
          </h1>
          <p className="mt-1 text-sm text-slate-300">
            {businesses.length} établissement(s) · {totalReviews} avis collectés
          </p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="rounded-full border border-white/20 bg-[#0d0d12] px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-[#17171f]"
          >
            Se déconnecter
          </button>
        </form>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {businesses.length === 0 && (
            <p className="rounded-2xl bg-[#111118] p-6 text-sm text-slate-300">
              Aucun établissement pour le moment. Créez votre première fiche
              pour générer vos liens de collecte d'avis.
            </p>
          )}
          {businesses.map((b) => (
            <Link
              key={b.id}
              href={`/espace/entreprises/${b.id}`}
              className="flex items-center justify-between rounded-2xl bg-[#0d0d12] p-5 shadow-sm ring-1 ring-white/10 transition hover:-translate-y-0.5"
            >
              <div>
                <p className="font-semibold text-white">{b.name}</p>
                <p className="text-sm text-slate-400">{b.platform}</p>
              </div>
              <div className="text-right text-sm text-slate-400">
                <p>{b._count.reviews} avis</p>
                <p>{b._count.links} liens</p>
              </div>
            </Link>
          ))}
        </div>

        <form
          action={createBusiness}
          className="h-fit space-y-4 rounded-2xl bg-[#111118] p-6"
        >
          <h2 className="font-semibold text-white">Nouvel établissement</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-200">
              Nom
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-lg border border-white/20 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
            />
          </div>
          <div>
            <label htmlFor="platform" className="block text-sm font-medium text-slate-200">
              Plateforme
            </label>
            <select
              id="platform"
              name="platform"
              className="mt-1 w-full rounded-lg border border-white/20 bg-[#0d0d12] px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
            >
              <option>Google</option>
              <option>Trustpilot</option>
              <option>Facebook</option>
              <option>Pages Jaunes</option>
            </select>
          </div>
          <div>
            <label htmlFor="reviewUrl" className="block text-sm font-medium text-slate-200">
              URL de dépôt d'avis
            </label>
            <input
              id="reviewUrl"
              name="reviewUrl"
              type="url"
              required
              placeholder="https://search.google.com/local/writepanel?placeid=…"
              className="mt-1 w-full rounded-lg border border-white/20 px-3 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-1 focus:ring-white/20"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Ajouter
          </button>
        </form>
      </div>
    </section>
  );
}
