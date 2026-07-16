"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Marie D.",
    role: "Restaurant, Paris",
    rating: 5,
    text: "Nouvel avis 5 étoiles publié il y a quelques minutes.",
  },
  {
    name: "Thomas L.",
    role: "Plombier, Lyon",
    rating: 5,
    text: "Avis vérifié en ligne, note en hausse sur Google.",
  },
  {
    name: "Sophie M.",
    role: "Coiffeuse, Lyon",
    rating: 5,
    text: "Note moyenne passée à 4.9 grâce à nos clients.",
  },
];

export default function HeroTestimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative w-full max-w-xs">
      <div className="rounded-2xl bg-white/90 p-4 shadow-xl ring-1 ring-blue-100 backdrop-blur-sm">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
          </span>
          <span className="text-xs font-semibold text-slate-700">
            Avis clients en direct
          </span>
        </div>

        <div className="relative h-20 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-sm leading-snug text-slate-700">
                “{testimonials[index].text}”
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                <MapPin className="h-3 w-3 text-blue-600" />
                {testimonials[index].name} · {testimonials[index].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-3 flex gap-1.5">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i === index ? "bg-blue-600" : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-2xl bg-white/90 p-4 shadow-xl ring-1 ring-blue-100 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-900">Note moyenne</p>
            <p className="text-xs text-slate-500">+0.8 point en moyenne</p>
          </div>
        </div>
      </div>
    </div>
  );
}
