import Link from "next/link";
import AnimatedSection from "@/components/animated-section";

export default function Cta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6">
      <AnimatedSection>
        <div className="relative isolate overflow-hidden rounded-3xl bg-green-600 px-6 py-8 text-center text-white">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-400/20 via-transparent to-transparent" />
          <h2 className="text-3xl font-semibold tracking-tight">
            Prêt à booster votre e-réputation ?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-green-50">
            Créez votre premier lien de collecte d'avis en moins de 2 minutes.
            Sans carte bancaire, sans engagement, conforme RGPD.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-green-100">
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Sans carte bancaire
            </span>
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              Résiliable à tout moment
            </span>
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
              100 % conforme Google
            </span>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/tarifs"
              className="w-full rounded-full bg-[#0d0d12] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-lime-400/[0.06] sm:w-auto"
            >
              Démarrer gratuitement
            </Link>
            <Link
              href="/contact"
              className="w-full rounded-full border border-white/40 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-[#17171d]/10 sm:w-auto"
            >
              Parler à un conseiller
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
