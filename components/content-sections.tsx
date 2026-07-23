import AnimatedSection from "@/components/animated-section";
import Image from "next/image";
import { Star, MessageSquare, CheckCircle2 } from "lucide-react";

export type ContentSectionsData = {
  eyebrow: string;
  // Section 1 : texte gauche + texte droite
  titleLeft: string;
  textLeft1: string;
  textLeft2: string;
  titleRight: string;
  textRight1: string;
  textRight2: string;
  // Section 2 : texte gauche + image droite
  titleImage: string;
  textImage: string;
  bullets: string[];
  imageAlt: string;
  imageSrc: string;
  // Section 3 : texte gauche + illustration HTML/CSS/JS droite
  titleIllustration: string;
  textIllustration1: string;
  textIllustration2: string;
  reviewEyebrow: string;
  reviews: { name: string; city: string; color: string }[];
};

export default function ContentSections({ data }: { data: ContentSectionsData }) {
  return (
    <section className="border-t border-white/10 bg-[#0d0d12] py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-lime-300">{data.eyebrow}</p>
        </AnimatedSection>

        {/* Section 1 : texte à gauche + texte à droite */}
        <div className="mt-6 grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {data.titleLeft}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{data.textLeft1}</p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{data.textLeft2}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {data.titleRight}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{data.textRight1}</p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{data.textRight2}</p>
          </AnimatedSection>
        </div>

        {/* Section 2 : texte à gauche + image à droite */}
        <div className="mt-8 grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {data.titleImage}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{data.textImage}</p>
            <ul className="mt-6 space-y-3">
              {data.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lime-400" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Image
              src={data.imageSrc}
              alt={data.imageAlt}
              width={800}
              height={600}
              className="h-auto w-full rounded-3xl"
            />
          </AnimatedSection>
        </div>

        {/* Section 3 : texte à gauche + illustration HTML/CSS/JS à droite */}
        <div className="mt-8 grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
          <AnimatedSection>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {data.titleIllustration}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{data.textIllustration1}</p>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">{data.textIllustration2}</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <ReviewPulse eyebrow={data.reviewEyebrow} reviews={data.reviews} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function ReviewPulse({
  eyebrow,
  reviews,
}: {
  eyebrow: string;
  reviews: { name: string; city: string; color: string }[];
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-lg">
      <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
        <MessageSquare className="h-4 w-4 text-green-400" />
        {eyebrow}
      </div>
      <div className="mt-6 space-y-3">
        {reviews.map((r, i) => (
          <div
            key={r.name}
            className="review-row flex items-center gap-3 rounded-2xl bg-slate-800 p-3"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${r.color} text-sm font-bold text-white`}>
              {r.name[0]}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">{r.name}</p>
              <p className="text-xs text-slate-400">{r.city}</p>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, s) => (
                <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes reviewIn {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .review-row {
          opacity: 0;
          animation: reviewIn 0.6s ease forwards;
        }
      `}</style>
    </div>
  );
}
