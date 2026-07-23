import Link from "next/link";
import MediaImage from "@/components/media-image";
import AnimatedSection from "@/components/animated-section";
import { metiers, villes } from "@/lib/site";

export default function Coverage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <AnimatedSection>
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl bg-lime-400/10">
          <MediaImage
            src="/images/img-02.png"
            alt="Artisans et commerçants en France"
            sizes="(max-width: 768px) 100vw, 80vw"
            className="aspect-[21/9] w-full rounded-3xl bg-lime-400/10"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/35 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-xl px-6 sm:px-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-200">
                Tous secteurs · Toute la France
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Votre e-réputation, quel que soit votre métier
              </h2>
              <p className="mt-3 text-sm text-slate-200">
                Des avis authentiques pour les artisans, restaurateurs,
                professions de santé et services aux entreprises.
              </p>
              <Link
                href="/tarifs"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0d0d12] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-lime-400/[0.06]"
              >
                Voir les offres
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <AnimatedSection delay={0.1}>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Pour tous les métiers
            </h2>
            <p className="mt-3 text-slate-300">
              Artisans, restaurateurs, professions de santé, services aux
              entreprises : notre solution s'adapte à votre secteur.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {metiers.map((m) => (
                <span
                  key={m}
                  className="rounded-full bg-lime-400/[0.06] px-3 py-1 text-sm text-lime-300 border border-lime-400/25"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Partout en France
            </h2>
            <p className="mt-3 text-slate-300">
              Un accompagnement pensé pour les entreprises locales, de Paris à la
              province.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {villes.map((v) => (
                <span
                  key={v}
                  className="rounded-full bg-lime-400/[0.06] px-3 py-1 text-sm text-lime-300 border border-lime-400/25"
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
