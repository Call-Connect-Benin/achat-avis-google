import Link from "next/link";
import { articles } from "@/lib/blog";

export const metadata = {
  title: "Blog — Conseils e-réputation et avis clients",
  description:
    "Guides pratiques pour collecter des avis clients authentiques, comprendre le pack local Google et développer votre e-réputation.",
};

export default function BlogIndex() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="max-w-2xl">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            Conseils e-réputation et avis clients
          </h1>
          <p className="mt-4 text-slate-600">
            Méthodes concrètes pour collecter des avis authentiques, apparaître
            dans le pack local et protéger votre réputation en ligne.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-sky-700">
                <span className="rounded-full bg-sky-50 px-2.5 py-1">
                  {a.category}
                </span>
                <span className="text-slate-400">{a.readingTime}</span>
              </div>
              <h2 className="mt-3 text-lg font-semibold text-slate-900">
                {a.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-slate-600">
                {a.description}
              </p>
              <p className="mt-4 text-sm font-medium text-sky-700">
                Lire l'article →
              </p>
            </Link>
          ))}
        </div>
      </main>
  );
}
