"use client";

import { motion } from "framer-motion";

export default function HeroImageWithBadges() {
  return (
    <div className="relative mx-auto w-full max-w-[360px] sm:max-w-sm md:max-w-md lg:max-w-[360px]">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-green-200/50 to-lime-400/10 blur-2xl" />
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-3xl bg-lime-400/10 shadow-2xl ring-1 ring-green-200">
        <motion.img
          src="/images/case-coiffure.png"
          alt="Cliente satisfaite"
          className="aspect-[4/5] w-full object-cover object-top"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
      </div>
    </div>
  );
}
