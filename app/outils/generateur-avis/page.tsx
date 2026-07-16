import ReviewQr from "@/components/review-qr";

export const metadata = {
  title: "Générateur de lien & QR code d'avis",
  description:
    "Outil gratuit pour créer un lien de collecte d'avis et un QR code redirigeant vos vrais clients vers votre fiche Google.",
};

export default function GenerateurAvisPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          Outil gratuit
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
          Générateur de lien & QR code d'avis
        </h1>
        <p className="mt-4 text-slate-600">
          Créez un QR code qui redirige vos vrais clients directement vers votre
          fiche Google pour laisser un avis authentique. Aucune inscription
          requise.
        </p>
      </div>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10">
        <ReviewQr />
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-slate-500">
        Astuce : encouragez l'avis juste après une prestation réussie, quand la
        satisfaction est à son maximum. Les avis doivent toujours refléter
        l'expérience réelle du client.
      </p>
    </section>
  );
}
