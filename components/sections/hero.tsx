import Link from "next/link";
import AnimatedSection from "@/components/animated-section";
import { Star, ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import HeroImageWithBadges from "@/components/hero-image-badges";
import HeroTestimonials from "@/components/hero-testimonials";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_#ffffff_0%,_#eff6ff_45%,_#ecfdf5_100%)] lg:flex lg:h-screen">
      <div className="absolute inset-0 -z-0 overflow-hidden">
        {/* Grille fine qui s'estompe vers les bords */}
        <div
          className="absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_at_center,_black_30%,_transparent_75%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        {/* Halos colorés Google (bleu, vert, rouge, jaune) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-200/45 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-red-200/35 via-transparent to-transparent" />
        {/* Blobs flous (palette Google) */}
        <div className="absolute -left-24 top-8 h-80 w-80 rounded-full bg-blue-400/30 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-64 w-64 rounded-full bg-amber-200/30 blur-3xl" />
        {/* Grain léger pour un rendu premium */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
        {/* Illustration décorative : carte Google + bulles d'avis + QR */}
        <svg
          className="pointer-events-none absolute right-[-4%] top-1/2 hidden h-[460px] w-[460px] -translate-y-1/2 opacity-90 lg:block"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="cardG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f1f5f9" />
            </linearGradient>
          </defs>
          {/* Carte Google stylisée */}
          <g transform="rotate(-8 200 200)">
            <rect x="70" y="70" width="260" height="200" rx="20" fill="url(#cardG)" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="92" y="100" width="120" height="14" rx="7" fill="#cbd5e1" />
            <rect x="92" y="126" width="180" height="9" rx="4.5" fill="#e2e8f0" />
            <rect x="92" y="142" width="150" height="9" rx="4.5" fill="#e2e8f0" />
            {/* Ligne d'étoiles */}
            <g fill="#FBBF24">
              {[0, 26, 52, 78, 104].map((x) => (
                <path key={x} transform={`translate(${92 + x} 176)`} d="M8 0l2.3 4.7 5.1.7-3.7 3.6.9 5.1L8 12.6 2.4 14l.9-5.1L0 5.4l5.1-.7z" />
              ))}
            </g>
            <rect x="92" y="212" width="80" height="26" rx="13" fill="#4285F4" />
            <text x="132" y="229" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">Google</text>
          </g>
          {/* Bulle d'avis 1 */}
          <g transform="rotate(6 320 120)">
            <rect x="250" y="60" width="150" height="80" rx="18" fill="#fff" stroke="#dbeafe" strokeWidth="2" />
            <circle cx="278" cy="86" r="12" fill="#bfdbfe" />
            <rect x="298" y="78" width="80" height="8" rx="4" fill="#e2e8f0" />
            <rect x="298" y="94" width="60" height="8" rx="4" fill="#eef2f7" />
            <g fill="#FBBF24"><path transform="translate(266 104)" d="M7 0l2 4 4.4.6-3.2 3.1.8 4.4L7 11l-3.8 1.1.8-4.4L1 4.6l4.4-.6z" /></g>
          </g>
          {/* Bulle d'avis 2 */}
          <g transform="rotate(-5 90 330)">
            <rect x="20" y="300" width="150" height="74" rx="18" fill="#fff" stroke="#dbeafe" strokeWidth="2" />
            <rect x="40" y="318" width="90" height="8" rx="4" fill="#e2e8f0" />
            <rect x="40" y="334" width="110" height="8" rx="4" fill="#eef2f7" />
            <g fill="#FBBF24"><path transform="translate(40 348)" d="M7 0l2 4 4.4.6-3.2 3.1.8 4.4L7 11l-3.8 1.1.8-4.4L1 4.6l4.4-.6z" /></g>
          </g>
          {/* QR code stylisé */}
          <g transform="translate(300 300)">
            <rect width="80" height="80" rx="12" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
            {[0, 24, 48].map((y) =>
              [0, 24, 48].map((x) => (
                <rect key={`${x}-${y}`} x={x + 10} y={y + 10} width="12" height="12" rx="3" fill="#1e293b" />
              )),
            )}
          </g>
        </svg>
        {/* Étoiles Google flottantes */}
        <svg className="absolute left-[8%] top-[18%] h-7 w-7 text-amber-400/70" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.6-5.2 4.5 1.6 6.7L12 17.6 5.8 20.6l1.6-6.7L2.2 8.9l6.9-.6z" /></svg>
        <svg className="absolute right-[12%] top-[12%] h-5 w-5 text-amber-400/60" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.6-5.2 4.5 1.6 6.7L12 17.6 5.8 20.6l1.6-6.7L2.2 8.9l6.9-.6z" /></svg>
        <svg className="absolute bottom-[20%] right-[6%] h-6 w-6 text-amber-400/50" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.6-5.2 4.5 1.6 6.7L12 17.6 5.8 20.6l1.6-6.7L2.2 8.9l6.9-.6z" /></svg>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-12 pt-24 md:pt-32 lg:h-full lg:justify-center lg:py-20">
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16 lg:pt-36">
          <div className="max-w-2xl">
            <AnimatedSection delay={0.1}>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Transformez vos vrais clients en{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-700">ambassadeurs</span>
                  <svg className="absolute -bottom-1 left-0 z-0 w-full" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M2 8C40 2 160 2 198 8" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Collectez des avis clients authentiques sur Google, Trustpilot et Facebook.
                Pas de faux avis : seulement la voix réelle de vos clients, pour une e-réputation durable.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/tarifs"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-9 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative z-10 flex items-center gap-2">
                    Démarrer gratuitement
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:border-blue-500 hover:text-blue-700 hover:bg-blue-50/60"
                >
                  Faire une demande
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-900">4.9/5</span>
                </div>
                <div className="h-4 w-px bg-slate-300" />
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span>+2 000 entreprises accompagnées</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3} className="hidden md:block">
            <div className="mt-12 flex flex-col items-center gap-6 sm:mt-0 sm:flex-row sm:items-center sm:justify-center lg:justify-start lg:gap-8">
              <HeroImageWithBadges />
              <div className="w-full sm:w-auto">
                <HeroTestimonials />
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-green-600" />
              Conforme RGPD
            </span>
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              Avis 100 % vérifiés
            </span>
            <span>Sans engagement</span>
            <span className="font-semibold text-slate-700">+2 000 entreprises accompagnées</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
