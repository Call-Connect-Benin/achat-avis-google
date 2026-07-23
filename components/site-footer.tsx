import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { mainNav, site } from "@/lib/site";
import NewsletterForm from "@/components/newsletter-form";

export default function SiteFooter() {
  const { company, social } = site;
  const year = new Date().getFullYear();

  const socials = [
    {
      href: social.facebook,
      label: "Facebook",
      path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
    },
    {
      href: social.linkedin,
      label: "LinkedIn",
      path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.9H5.67v8.44h2.67zM7 8.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.84v-4.63c0-2.47-1.32-3.62-3.08-3.62-1.42 0-2.06.78-2.42 1.33v-1.14H10.17v8.44h2.67v-4.49c0-.24.02-.48.09-.65.19-.48.63-.98 1.37-.98.97 0 1.36.74 1.36 1.82v4.3h2.51z",
    },
    {
      href: social.instagram,
      label: "Instagram",
      path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.6-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.6.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.6-.07-4.74-.07zm0 2.76a5.46 5.46 0 1 1 0 10.92 5.46 5.46 0 0 1 0-10.92zm0 1.62a3.84 3.84 0 1 0 0 7.68 3.84 3.84 0 0 0 0-7.68zm5.65-2.9a1.28 1.28 0 1 1 0 2.56 1.28 1.28 0 0 1 0-2.56z",
    },
  ];

  return (
    <footer>
      <div className="bg-green-600 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 py-10 text-center sm:text-left md:flex-row">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Prêt à booster votre e-réputation ?
            </h2>
            <p className="mt-2 text-green-50">
              Créez votre premier lien de collecte d'avis en moins de 2 minutes.
            </p>
          </div>
          <Link
            href="/tarifs"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#0d0d12] px-6 py-3 text-sm font-semibold text-lime-300 transition-colors hover:bg-lime-400/[0.06]"
          >
            Démarrer gratuitement
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-lime-400/25 bg-lime-400/[0.06]">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="grid gap-6 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="inline-flex items-center rounded-xl bg-slate-900 px-3 py-2">
                <Image
                  src="/logo.png"
                  alt={site.name}
                  width={160}
                  height={52}
                  className="h-9 w-auto"
                />
              </div>
              <p className="mt-3 max-w-xs text-sm text-slate-300">
                {site.tagline}. Conforme aux règles des plateformes et à la
                législation sur la consommation.
              </p>
              <div className="mt-4 flex items-center gap-2">
                {socials.map(({ href, label, path }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid h-9 w-9 place-items-center rounded-full bg-[#0d0d12] text-slate-300 ring-1 ring-green-200 transition-colors hover:bg-green-600 hover:text-white"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
               <div className="mt-5">
                 <div className="flex items-center gap-2">
                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400/10">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-lime-300">
                       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                       <polyline points="22,6 12,13 2,6" />
                     </svg>
                   </div>
                   <div>
                     <p className="text-sm font-medium text-white">
                       Recevez nos conseils e-réputation
                     </p>
                     <p className="text-xs text-slate-400">
                       Astuces, guides et actualités Google.
                     </p>
                   </div>
                 </div>
                 <NewsletterForm />
               </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Navigation</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:text-lime-400">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Légal</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>
                  <Link href="/mentions-legales" className="hover:text-lime-400">
                    Mentions légales
                  </Link>
                </li>
                <li>
                  <Link
                    href="/confidentialite"
                    className="hover:text-lime-400"
                  >
                    Politique de confidentialité
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>{company.address.street}</li>
                <li>
                  {company.address.city}, {company.address.region}{" "}
                  {company.address.postalCode}
                </li>
                <li>{company.address.country}</li>
                <li>
                  <a
                    href={`tel:${company.phone}`}
                    className="hover:text-lime-400"
                  >
                    {company.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${company.email}`}
                    className="hover:text-lime-400"
                  >
                    {company.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 rounded-xl bg-[#0d0d12] px-4 py-3 text-xs text-slate-400 ring-1 ring-green-200">
            <ShieldCheck className="h-4 w-4 text-lime-300" />
            <span>
              Conforme aux règles Google, Trustpilot et à la loi sur la
              consommation. Aucun avis fictif n'est produit ou vendu.
            </span>
          </div>
        </div>

        <div className="border-t border-lime-400/25">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-400 sm:flex-row">
            <p>
              © {year} {company.legalName}. Tous droits réservés.
            </p>
            <p>Conçu et hébergé en France.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
