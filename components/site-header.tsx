"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { site } from "@/lib/site";

const methodLinks = [
  { label: "Lien d'avis Google", href: "/methodes/lien-avis-google" },
  { label: "QR code avis Google", href: "/methodes/qr-code-avis-google" },
  { label: "Demande par SMS", href: "/methodes/demande-avis-par-sms" },
  { label: "Demande par email", href: "/methodes/demande-avis-par-email" },
  { label: "Carte NFC", href: "/methodes/carte-nfc-avis-google" },
  { label: "Plaque QR code", href: "/methodes/plaque-qr-code-avis" },
  { label: "Automatisation", href: "/methodes/automatisation-avis-clients" },
  { label: "Questionnaire satisfaction", href: "/methodes/questionnaire-satisfaction-client" },
];

const gestionLinks = [
  { label: "Répondre aux avis Google", href: "/gestion/repondre-avis-google" },
  { label: "Répondre à un avis négatif", href: "/gestion/repondre-avis-negatif" },
  { label: "Signaler un faux avis", href: "/gestion/signaler-faux-avis-google" },
  { label: "Supprimer un avis Google", href: "/gestion/supprimer-avis-google" },
  { label: "Avis Google non affiché", href: "/gestion/avis-google-ne-saffiche-pas" },
  { label: "Avis Google disparus", href: "/gestion/avis-google-disparus" },
  { label: "Note Google baisse", href: "/gestion/note-google-baisse" },
  { label: "Récupérer avis clients", href: "/gestion/recuperer-avis-clients" },
];

const secteurLinks = [
  { label: "Restaurant", href: "/secteurs/avis-google-restaurant" },
  { label: "Artisan", href: "/secteurs/avis-google-artisan" },
  { label: "Garage automobile", href: "/secteurs/avis-google-garage" },
  { label: "Hôtel", href: "/secteurs/avis-google-hotel" },
  { label: "Agence immobilière", href: "/secteurs/avis-google-agence-immobiliere" },
  { label: "Salon de coiffure", href: "/secteurs/avis-google-salon-coiffure" },
  { label: "Institut de beauté", href: "/secteurs/avis-google-institut-beaute" },
  { label: "Dentiste", href: "/secteurs/avis-google-cabinet-dentaire" },
  { label: "Commerce", href: "/secteurs/avis-google-commerce" },
  { label: "Entreprise BTP", href: "/secteurs/avis-google-entreprise-btp" },
];

const villeLinks = [
  { label: "Paris", href: "/france/paris" },
  { label: "Lyon", href: "/france/lyon" },
  { label: "Marseille", href: "/france/marseille" },
  { label: "Bordeaux", href: "/france/bordeaux" },
  { label: "Lille", href: "/france/lille" },
  { label: "Toulouse", href: "/france/toulouse" },
  { label: "Nantes", href: "/france/nantes" },
  { label: "Nice", href: "/france/nice" },
  { label: "Strasbourg", href: "/france/strasbourg" },
  { label: "Montpellier", href: "/france/montpellier" },
];

function MegaDropdown({ title, links, isOpen, onNavClick }: { title: string; links: { label: string; href: string }[]; isOpen: boolean; onNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void }) {
  return (
    <div className="relative">
      <button
        type="button"
        className={`flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
          isOpen ? "bg-lime-400/[0.06] text-lime-300" : "text-slate-300 hover:bg-lime-400/[0.06] hover:text-lime-300"
        }`}
      >
        {title}
        <svg className="h-4 w-4 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 w-64 rounded-2xl border border-lime-400/15 bg-[#0d0d12] p-2 shadow-xl">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => onNavClick?.(e, link.href)}
              className="block rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-lime-400/[0.06] hover:text-lime-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MegaDropdownMulti({ title, columns, isOpen, onNavClick }: { title: string; columns: { title: string; links: { label: string; href: string }[] }[]; isOpen: boolean; onNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void }) {
  return (
    <div className="relative">
      <button
        type="button"
        className={`flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
          isOpen ? "bg-lime-400/[0.06] text-lime-300" : "text-slate-300 hover:bg-lime-400/[0.06] hover:text-lime-300"
        }`}
      >
        {title}
        <svg className="h-4 w-4 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-1/2 z-50 mt-3 w-max min-w-[520px] -translate-x-1/2 grid gap-6 rounded-2xl border border-lime-400/15 bg-[#0d0d12] p-5 shadow-2xl" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
          {columns.map((col) => (
            <div key={col.title} className="min-w-0">
              <p className="mb-2 px-1 text-xs font-bold uppercase tracking-wider text-lime-300">{col.title}</p>
              <div className="flex flex-col gap-1">
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => onNavClick?.(e, link.href)}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-lime-400/[0.06] hover:text-lime-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileMenuAccordion({
  id,
  title,
  links,
  isOpen,
  onToggle,
  onNavigate,
  onNavClick,
}: {
  id: string;
  title: string;
  links: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  onNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
  return (
    <div className="rounded-xl border border-lime-400/15 bg-[#0d0d12]/70">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`mobile-menu-${id}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-base font-semibold text-slate-200 transition hover:bg-lime-400/[0.06] hover:text-lime-300"
      >
        {title}
        <svg
          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      {isOpen && (
        <div id={`mobile-menu-${id}`} className="grid gap-1 border-t border-lime-400/15 px-2 py-2 sm:grid-cols-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => {
                onNavClick?.(e, link.href);
                onNavigate();
              }}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-lime-400/[0.06] hover:text-lime-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [methodGestionOpen, setMethodGestionOpen] = useState(false);
  const [secteurOpen, setSecteurOpen] = useState(false);
  const [villeOpen, setVilleOpen] = useState(false);
  const pathname = usePathname();
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    const base = href.split("?")[0].split("#")[0];
    if (base === "" || base === "/") return false;
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  const closeAll = () => {
    setMethodGestionOpen(false);
    setSecteurOpen(false);
    setVilleOpen(false);
    setMobileSection(null);
  };

  const closeMenu = () => {
    setOpen(false);
    closeAll();
  };

  const handleMouseEnter = (setter: (v: boolean) => void) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeAll();
    setter(true);
  };

  const handleMouseLeave = (setter: (v: boolean) => void) => {
    closeTimeoutRef.current = setTimeout(() => {
      setter(false);
    }, 150);
  };

  const getBasePath = (href: string) => href.split("?")[0].split("#")[0];

  const isSamePage = (href: string) => {
    const base = getBasePath(href);
    if (base === "/") return pathname === "/";
    return pathname === base || pathname.startsWith(`${base}/`);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onNavigate?: () => void) => {
    if (isSamePage(href)) {
      e.preventDefault();
      window.location.href = href;
    } else if (onNavigate) {
      onNavigate();
    }
  };

  const handleHomeClick = () => {
    if (pathname === "/") {
      window.location.href = "/";
    }
  };

  const navClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, onNavigate?: () => void) => {
    handleNavClick(e, href, onNavigate);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-lime-400/25 bg-[#0d0d12] shadow-sm backdrop-blur-xl"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" onClick={handleHomeClick} className="flex items-center gap-3 font-semibold group">
          <span className="relative flex items-center rounded-xl bg-slate-900 px-3 py-2 transition-transform duration-300 group-hover:scale-[1.03]">
            <Image
              src="/logo.png"
              alt={site.name}
              width={170}
              height={56}
              priority
              className="h-10 w-auto"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            onMouseEnter={closeAll}
            onClick={handleHomeClick}
            className={`relative rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive("/")
                ? "text-lime-300"
                : "text-slate-300 hover:bg-lime-400/[0.06] hover:text-lime-300"
            }`}
          >
            Accueil
            {isActive("/") && (
              <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-green-600" />
            )}
          </Link>

          <Link
            href="/services"
            onMouseEnter={closeAll}
            onClick={(e) => navClick(e, "/services")}
            className={`relative rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive("/services")
                ? "text-lime-300"
                : "text-slate-300 hover:bg-lime-400/[0.06] hover:text-lime-300"
            }`}
          >
            Services
            {isActive("/services") && (
              <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-green-600" />
            )}
          </Link>

          <div
            onMouseEnter={() => handleMouseEnter(setMethodGestionOpen)}
            onMouseLeave={() => handleMouseLeave(setMethodGestionOpen)}
          >
            <MegaDropdownMulti title="Méthodes & Gestion" isOpen={methodGestionOpen} columns={[{ title: "Méthodes", links: methodLinks }, { title: "Gestion", links: gestionLinks }]} onNavClick={navClick} />
          </div>

          <div
            onMouseEnter={() => handleMouseEnter(setSecteurOpen)}
            onMouseLeave={() => handleMouseLeave(setSecteurOpen)}
          >
            <MegaDropdown title="Secteurs" links={secteurLinks} isOpen={secteurOpen} onNavClick={navClick} />
          </div>

          <div
            onMouseEnter={() => handleMouseEnter(setVilleOpen)}
            onMouseLeave={() => handleMouseLeave(setVilleOpen)}
          >
            <MegaDropdown title="Villes" links={villeLinks} isOpen={villeOpen} onNavClick={navClick} />
          </div>

          <Link
            href="/blog"
            onMouseEnter={closeAll}
            onClick={(e) => navClick(e, "/blog")}
            className={`relative rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive("/blog")
                ? "text-lime-300"
                : "text-slate-300 hover:bg-lime-400/[0.06] hover:text-lime-300"
            }`}
          >
            Blog
            {isActive("/blog") && (
              <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-green-600" />
            )}
          </Link>
          <Link
            href="/ressources"
            onMouseEnter={closeAll}
            onClick={(e) => navClick(e, "/ressources")}
            className={`relative rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive("/ressources")
                ? "text-lime-300"
                : "text-slate-300 hover:bg-lime-400/[0.06] hover:text-lime-300"
            }`}
          >
            Ressources
            {isActive("/ressources") && (
              <span className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-green-600" />
            )}
          </Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/contact?profil=guide"
            className="rounded-full border border-lime-400/25 bg-[#0d0d12] px-4 py-2.5 text-xs font-semibold text-lime-300 shadow-sm transition-all hover:border-lime-400 hover:text-lime-700 hover:shadow-md"
          >
            Espace guide
          </Link>
          <Link
            href="/contact?profil=entreprise"
            className="relative rounded-full bg-slate-950 px-5 py-2.5 text-xs font-bold text-lime-300 shadow-lg shadow-lime-500/20 ring-1 ring-lime-400/40 transition-all hover:bg-black hover:shadow-xl hover:shadow-lime-500/30 hover:-translate-y-0.5"
          >
            <span className="absolute -inset-0.5 -z-10 rounded-full bg-lime-400/30 blur-sm transition group-hover:opacity-100" />
            Espace entreprise
          </Link>
        </div>

        <button
          type="button"
          aria-label="Menu"
          className="relative rounded-xl p-2.5 text-slate-200 transition hover:bg-lime-400/[0.06] lg:hidden"
          onClick={() => {
            setOpen((v) => !v);
            closeAll();
          }}
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-lime-400/25 bg-[#0d0d12]/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <nav className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                <Link
                  href="/contact?profil=guide"
                  onClick={() => { setOpen(false); closeAll(); }}
                  className="rounded-full border border-lime-300 bg-yellow-300/[0.06] px-5 py-3 text-center font-semibold text-lime-800"
                >
                  Devenir guide rémunéré
                </Link>
                <Link
                  href="/contact?profil=entreprise"
                  onClick={(e) => navClick(e, "/contact?profil=entreprise", () => { setOpen(false); closeAll(); })}
                  className="rounded-full bg-slate-950 px-5 py-3 text-center font-bold text-lime-300"
                >
                  Créer un compte entreprise
                </Link>
                <Link
                  href="/tarifs"
                  onClick={(e) => navClick(e, "/tarifs", () => { setOpen(false); closeAll(); })}
                  className="rounded-full border border-lime-400/35 bg-[#0d0d12] px-5 py-3 text-center font-semibold text-slate-200"
                >
                  Voir les tarifs
                </Link>
              </div>

              <Link
                href="/"
                onClick={(e) => navClick(e, "/", () => { setOpen(false); closeAll(); })}
                className={`rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                  isActive("/") ? "text-lime-300" : "text-slate-200 hover:bg-lime-400/[0.06]"
                }`}
              >
                Accueil
              </Link>
              <Link
                href="/services"
                onClick={(e) => navClick(e, "/services", () => { setOpen(false); closeAll(); })}
                className={`rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                  isActive("/services") ? "text-lime-300" : "text-slate-200 hover:bg-lime-400/[0.06]"
                }`}
              >
                Services
              </Link>

              <div className="hidden grid-cols-2 gap-4">
                <div>
                  <p className="px-1 text-xs font-semibold uppercase tracking-wider text-lime-300">Méthodes</p>
                  <div className="mt-1 flex flex-col gap-1">
                    {methodLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={(e) => navClick(e, link.href, () => { setOpen(false); closeAll(); })}
                        className="rounded-xl px-3 py-2 text-sm text-slate-200 hover:bg-lime-400/[0.06] hover:text-lime-300"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="px-1 text-xs font-semibold uppercase tracking-wider text-lime-300">Gestion</p>
                  <div className="mt-1 flex flex-col gap-1">
                    {gestionLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={(e) => navClick(e, link.href, () => { setOpen(false); closeAll(); })}
                        className="rounded-xl px-3 py-2 text-sm text-slate-200 hover:bg-lime-400/[0.06] hover:text-lime-300"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden border-t border-lime-400/15 pt-2">
                <p className="px-4 text-xs font-semibold uppercase tracking-wider text-lime-300">Secteurs</p>
                <div className="grid grid-cols-2 gap-1">
                  {secteurLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => navClick(e, link.href, () => { setOpen(false); closeAll(); })}
                      className="rounded-xl px-4 py-2.5 text-sm text-slate-200 hover:bg-lime-400/[0.06] hover:text-lime-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="hidden border-t border-lime-400/15 pt-2">
                <p className="px-4 text-xs font-semibold uppercase tracking-wider text-lime-300">Villes</p>
                <div className="grid grid-cols-2 gap-1">
                  {villeLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={(e) => navClick(e, link.href, () => { setOpen(false); closeAll(); })}
                      className="rounded-xl px-4 py-2.5 text-sm text-slate-200 hover:bg-lime-400/[0.06] hover:text-lime-300"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/blog"
                onClick={(e) => navClick(e, "/blog", () => { setOpen(false); closeAll(); })}
                className={`hidden rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                  isActive("/blog") ? "text-lime-300" : "text-slate-200 hover:bg-lime-400/[0.06]"
                }`}
              >
                Blog
              </Link>

              <Link
                href="/ressources"
                onClick={(e) => navClick(e, "/ressources", () => { setOpen(false); closeAll(); })}
                className={`hidden rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                  isActive("/ressources") ? "text-lime-300" : "text-slate-200 hover:bg-lime-400/[0.06]"
                }`}
              >
                Ressources
              </Link>

              <Link
                href="/tarifs"
                onClick={(e) => navClick(e, "/tarifs", () => { setOpen(false); closeAll(); })}
                className={`hidden rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                  isActive("/tarifs") ? "text-lime-300" : "text-slate-200 hover:bg-lime-400/[0.06]"
                }`}
              >
                Tarifs
              </Link>

              <Link
                href="/contact"
                onClick={(e) => navClick(e, "/contact", () => { setOpen(false); closeAll(); })}
                className={`hidden rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                  isActive("/contact") ? "text-lime-300" : "text-slate-200 hover:bg-lime-400/[0.06]"
                }`}
              >
                Contact
              </Link>

              <div className="grid grid-cols-2 gap-1">
                {[
                  { label: "Blog", href: "/blog" },
                  { label: "Ressources", href: "/ressources" },
                  { label: "Tarifs", href: "/tarifs" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => navClick(e, link.href, closeMenu)}
                    className={`rounded-xl px-4 py-3 text-base font-semibold transition-all ${
                      isActive(link.href) ? "bg-lime-400/[0.06] text-lime-300" : "text-slate-200 hover:bg-lime-400/[0.06]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <MobileMenuAccordion id="methodes" title="Méthodes" links={methodLinks} isOpen={mobileSection === "methodes"} onToggle={() => setMobileSection((section) => section === "methodes" ? null : "methodes")} onNavigate={closeMenu} onNavClick={navClick} />
              <MobileMenuAccordion id="gestion" title="Gestion des avis" links={gestionLinks} isOpen={mobileSection === "gestion"} onToggle={() => setMobileSection((section) => section === "gestion" ? null : "gestion")} onNavigate={closeMenu} onNavClick={navClick} />
              <MobileMenuAccordion id="secteurs" title="Secteurs" links={secteurLinks} isOpen={mobileSection === "secteurs"} onToggle={() => setMobileSection((section) => section === "secteurs" ? null : "secteurs")} onNavigate={closeMenu} onNavClick={navClick} />
              <MobileMenuAccordion id="villes" title="Villes" links={villeLinks} isOpen={mobileSection === "villes"} onToggle={() => setMobileSection((section) => section === "villes" ? null : "villes")} onNavigate={closeMenu} onNavClick={navClick} />

              <div className="hidden border-t border-lime-400/15 pt-3">
                <Link
                  href={`tel:${site.company.phone}`}
                  onClick={() => { setOpen(false); closeAll(); }}
                  className="rounded-full bg-green-600 px-5 py-3 text-center font-semibold text-white"
                >
                  Appelez-nous
                </Link>
                <Link
                  href="/contact"
                  onClick={() => { setOpen(false); closeAll(); }}
                  className="rounded-full bg-green-600 px-5 py-3 text-center font-semibold text-white"
                >
                  Nous contacter
                </Link>
                <Link
                  href="/tarifs"
                  onClick={() => { setOpen(false); closeAll(); }}
                  className="rounded-full border border-lime-400/35 bg-[#0d0d12] px-5 py-3 text-center font-semibold text-slate-200"
                >
                  Voir les tarifs
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
