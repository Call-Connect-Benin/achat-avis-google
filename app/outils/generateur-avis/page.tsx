import ReviewQr from "@/components/review-qr";

export const metadata = {
  title: "Générateur de lien & QR code d'avis",
  description:
    "Outil gratuit pour créer un lien de collecte d'avis et un QR code redirigeant vos vrais clients vers votre fiche Google.",
};

export default function GenerateurAvisPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-[#17171f] px-3 py-1 text-xs font-medium text-slate-300">
          Outil gratuit
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white">
          Générateur de lien & QR code d'avis
        </h1>
        <p className="mt-4 text-slate-300">
          Créez un QR code qui redirige vos vrais clients directement vers votre
          fiche Google pour laisser un avis authentique. Aucune inscription
          requise.
        </p>
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-[#111118] p-6 sm:p-10">
        <ReviewQr />
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-400">
        Astuce : encouragez l'avis juste après une prestation réussie, quand la
        satisfaction est à son maximum. Les avis doivent toujours refléter
        l'expérience réelle du client.
      </p>
    </section>
  );
}
