import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";

export const metadata = { title: "Laisser un avis" };

export default async function AvisPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const link = await prisma.reviewLink.findUnique({
    where: { token },
    include: { business: true },
  });

  if (!link) notFound();

  await prisma.reviewLink.update({
    where: { id: link.id },
    data: { clicks: { increment: 1 } },
  });

  const business = link.business;

  return (
    <section className="mx-auto flex max-w-lg flex-col items-center px-4 py-10 text-center">
      <span className="inline-flex items-center rounded-full bg-[#17171f] px-3 py-1 text-xs font-medium text-slate-300">
        Avis clients authentiques
      </span>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white">
        Merci pour votre confiance
      </h1>
      <p className="mt-4 text-slate-300">
        Votre avis aide {business.name} à progresser. Quelques secondes suffisent
        pour le laisser sur {business.platform}.
      </p>

      <a
        href={business.reviewUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 w-full rounded-full bg-slate-900 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-slate-800"
      >
        Laisser mon avis sur {business.platform}
      </a>

      <p className="mt-6 text-xs text-slate-400">
        Vous serez redirigé vers la plateforme officielle. Avis 100 % réels
        uniquement.
      </p>
    </section>
  );
}
