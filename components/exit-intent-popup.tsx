"use client";

import { useEffect, useRef, useState } from "react";
import { X, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const KEY = "aag-exit-popup";

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const shown = useRef(false);

  useEffect(() => {
    try { if (sessionStorage.getItem(KEY)) return; } catch {}
    const trigger = () => {
      if (shown.current) return;
      shown.current = true;
      try { sessionStorage.setItem(KEY, "1"); } catch {}
      setOpen(true);
    };
    const onMouseOut = (e: MouseEvent) => { if (e.clientY <= 0) trigger(); };
    let lastY = window.scrollY;
    const onScroll = () => { const y = window.scrollY; if (lastY - y > 45 && y < 240) trigger(); lastY = y; };
    const onPopState = () => { if (!shown.current) { trigger(); history.pushState(null, ""); } };
    const armMobile = window.matchMedia("(max-width: 1024px)").matches;
    const t = window.setTimeout(() => {
      document.addEventListener("mouseout", onMouseOut);
      if (armMobile) {
        history.pushState(null, "");
        window.addEventListener("popstate", onPopState);
        window.addEventListener("scroll", onScroll, { passive: true });
      }
    }, 3000);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("popstate", onPopState);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "exit-popup", message: "Pop-up de sortie — demande de rappel." }),
      });
    } catch {}
    setDone(true);
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-4" role="dialog" aria-modal="true" aria-label="Offre avant de partir">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-lime-400/30 bg-[#0d0d12] text-white shadow-2xl">
        <button type="button" onClick={() => setOpen(false)} aria-label="Fermer" className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-slate-200 transition hover:bg-white/20">
          <X size={22} />
        </button>
        <div className="relative overflow-hidden px-6 py-7">
          <div className="absolute inset-0 opacity-80" style={{ background: "radial-gradient(circle at 12% 20%, rgba(163,230,53,.22), transparent 42%), radial-gradient(circle at 85% 12%, rgba(250,204,21,.18), transparent 40%)" }} />
          <p className="relative inline-flex items-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-lime-300"><Sparkles size={13} /> Avant de partir</p>
          <h2 className="relative mt-3 text-2xl font-extrabold leading-tight">Recevez votre plan d’avis Google offert</h2>
          <p className="relative mt-2 text-sm text-slate-300">Laissez votre e-mail : un conseiller vous montre comment collecter des avis vérifiés et suivre vos résultats.</p>
        </div>
        <div className="px-6 pb-6">
          {done ? (
            <div className="flex items-start gap-3 rounded-2xl bg-lime-400/10 p-4">
              <CheckCircle2 className="mt-0.5 shrink-0 text-lime-300" />
              <p className="text-sm text-slate-200">Merci ! Nous revenons vers vous très rapidement.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="votre@email.com" className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-400/30" />
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-lime-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-lime-300">Recevoir mon plan offert <ArrowRight size={16} /></button>
              <button type="button" onClick={() => setOpen(false)} className="block w-full py-1 text-center text-xs text-slate-500 hover:text-slate-300">Non merci, je continue ma visite</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
