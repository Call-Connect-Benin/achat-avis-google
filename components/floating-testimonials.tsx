"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Nous sommes passés de 12 à 68 avis en trois mois. Les demandes de devis ont clairement augmenté depuis qu'on remonte dans le pack local.",
    name: "Karim P.",
    role: "Plombier, Lyon",
    rating: 5,
    image: "/images/testimonials/pierre.jpg",
  },
  {
    quote:
      "Interface hyper claire, je vois exactement où en est chaque avis. La publication progressive rassure, rien de suspect.",
    name: "Sophie L.",
    role: "Institut de beauté, Nantes",
    rating: 5,
    image: "/images/testimonials/sophie.jpg",
  },
  {
    quote:
      "En tant que guide local, je choisis mes missions près de chez moi et je suis payé rapidement. Simple et transparent.",
    name: "Mehdi B.",
    role: "Guide local, Paris",
    rating: 5,
    image: "/images/testimonials/jean-marc.jpg",
  },
];

const floatVariants = {
  float: (i: number) => ({
    y: [0, -10 - i * 2, 0],
    transition: {
      duration: 4 + i * 0.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }),
};

export default function FloatingTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const controls = useAnimation();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const startAnimation = () => {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
      });

      timeoutRef.current = setTimeout(() => {
        controls.start({
          opacity: 0,
          y: -30,
          scale: 0.95,
          transition: { duration: 0.4, ease: "easeIn" },
        });
        setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 400);
      }, 5000);
    };

    startAnimation();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [activeIndex, controls]);

  return (
    <div className="absolute -bottom-8 -left-4 z-20 hidden lg:block">
      <div className="relative h-48 w-80">
        {testimonials.map((t, i) => {
          const isActive = i === activeIndex;
          const isNext = i === (activeIndex + 1) % testimonials.length;

          return (
            <motion.div
              key={t.name}
              animate={isActive || isNext ? controls : { opacity: 0, y: 30, scale: 0.9 }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              variants={floatVariants}
              custom={i}
              className={`absolute inset-0 rounded-2xl bg-[#0d0d12] p-5 shadow-2xl ring-1 ${
                isActive ? "ring-lime-200 z-10" : "ring-slate-100 z-0"
              }`}
              style={{ transformOrigin: "center center" }}
            >
              <div className="flex items-start gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-lime-100">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-200 line-clamp-3">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-xs text-slate-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-1 -right-1 h-3 w-3 rotate-45 bg-[#0d0d12] ring-1 ring-lime-100" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
