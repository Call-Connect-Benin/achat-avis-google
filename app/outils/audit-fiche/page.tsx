import AuditForm from "@/components/audit-form";

export const metadata = {
  title: "Audit de fiche",
  description:
    "Estimez la maturité de votre e-réputation en quelques secondes : note, volume d'avis, réactivité et recommandations.",
};

export default function AuditFichePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center rounded-full bg-[#17171f] px-3 py-1 text-xs font-medium text-slate-300">
          Outil gratuit
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
          Audit de votre fiche
        </h1>
        <p className="mt-4 text-slate-300">
          Évaluez la maturité de votre e-réputation en quelques secondes et
          obtenez des recommandations concrètes pour progresser.
        </p>
      </div>

      <div className="mt-6 rounded-3xl bg-[#111118] p-6 sm:p-10">
        <AuditForm />
      </div>
    </section>
  );
}
