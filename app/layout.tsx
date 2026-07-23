import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import JsonLd from "@/components/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Achat Avis Google France | Guides Vérifiés & Dashboard",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "achat avis google",
    "acheter avis google",
    "achat avis google france",
    "avis google vérifiés",
    "guides google rémunérés",
    "dashboard avis google",
    "gestion avis google",
    "e-réputation entreprise",
  ],
  openGraph: {
    title: "Achat Avis Google France | Guides Vérifiés & Dashboard",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achat Avis Google France | Guides Vérifiés & Dashboard",
    description: site.description,
    images: [site.ogImage],
  },
  alternates: {
    canonical: site.url,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0d12] text-white">
        <JsonLd />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
