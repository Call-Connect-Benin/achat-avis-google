import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, type ArticleBlock } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | ${site.name}`,
    description: article.description,
  };
}

function Block({ block }: { block: ArticleBlock }) {
  if (block.type === "h2") {
    return <h2 className="mt-8 text-2xl font-semibold text-slate-900">{block.text}</h2>;
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="mt-4 leading-relaxed text-slate-700">{block.text}</p>;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const date = new Date(article.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
        <Link href="/blog" className="text-sm font-medium text-sky-700 hover:underline">
          ← Tous les articles
        </Link>

        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-sky-700">
          <span className="rounded-full bg-sky-50 px-2.5 py-1">{article.category}</span>
          <span className="text-slate-400">{article.readingTime}</span>
          <span className="text-slate-400">· {date}</span>
        </div>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{article.description}</p>

        <article className="mt-8">
          {article.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>

        <div className="mt-12 rounded-2xl bg-sky-50 p-6 text-center">
          <p className="font-semibold text-slate-900">
            Prêt à collecter vos premiers avis ?
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/tarifs"
              className="rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
            >
              Démarrer gratuitement
            </Link>
            <Link
              href="/outils/generateur-avis"
              className="rounded-full border border-sky-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-sky-50"
            >
              Générateur de QR code
            </Link>
          </div>
        </div>
      </main>
  );
}
