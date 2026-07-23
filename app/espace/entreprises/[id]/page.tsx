import Link from "next/link";
import { notFound } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { createReviewLink } from "@/app/espace/actions";
import LinkQr from "@/components/link-qr";

export const metadata = { title: "Établissement" };

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getSession();
  const business = await prisma.business.findFirst({
    where: { id, userId: session!.userId },
    include: {
      links: { orderBy: { createdAt: "desc" } },
      reviews: { orderBy: { createdAt: "desc" } },
    },
  });

  if (!business) notFound();

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://achat-avis-google.com";

  return (
    <section className="mx-auto max-w-5xl px-4 py-6">
      <Link
        href="/espace"
        className="text-sm font-medium text-slate-300 hover:text-white"
      >
        ← Mon espace
      </Link>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            {business.name}
          </h1>
          <p className="text-sm text-slate-400">{business.platform}</p>
        </div>
        <a
          href={business.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-slate-200 hover:underline"
        >
          URL de dépôt d'avis ↗
        </a>
      </div>

      <div className="mt-8 rounded-2xl bg-[#111118] p-6">
        <h2 className="font-semibold text-white">Générer un lien de collecte</h2>
        <p className="mt-1 text-sm text-slate-300">
          Créez un lien unique et un QR code à partager à vos vrais clients.
        </p>
        <form action={createReviewLink} className="mt-4">
          <input type="hidden" name="businessId" value={business.id} />
          <button
            type="submit"
            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Générer un lien
          </button>
        </form>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {business.links.map((link) => {
          const publicUrl = `${siteUrl}/avis/${link.token}`;
          return (
            <div
              key={link.id}
              className="flex gap-4 rounded-2xl bg-[#0d0d12] p-5 shadow-sm ring-1 ring-white/10"
            >
              <LinkQr url={publicUrl} />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">Lien public</p>
                <p className="mt-1 break-all text-xs text-slate-400">{publicUrl}</p>
                <p className="mt-2 text-xs text-slate-400">
                  {link.clicks} clic(s) ·{" "}
                  {new Date(link.createdAt).toLocaleDateString("fr-FR")}
                </p>
                <Link
                  href={`/avis/${link.token}`}
                  target="_blank"
                  className="mt-1 inline-block text-xs font-medium text-slate-200 hover:underline"
                >
                  Aperçu public ↗
                </Link>
              </div>
            </div>
          );
        })}
        {business.links.length === 0 && (
          <p className="text-sm text-slate-400">
            Aucun lien généré pour le moment.
          </p>
        )}
      </div>

      <div className="mt-6">
        <h2 className="font-semibold text-white">Avis collectés</h2>
        <div className="mt-3 space-y-3">
          {business.reviews.map((r) => (
            <div
              key={r.id}
              className="rounded-2xl bg-[#111118] p-4 text-sm text-slate-200"
            >
              <p className="font-medium text-white">
                {r.author ?? "Client"} · {r.source ?? business.platform}
              </p>
              <p className="mt-1 text-slate-300">{r.text}</p>
            </div>
          ))}
          {business.reviews.length === 0 && (
            <p className="text-sm text-slate-400">
              Les avis authentiques de vos clients apparaîtront ici.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
