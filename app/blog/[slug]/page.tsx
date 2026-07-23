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
  const url = `${site.url}/blog/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${article.title} | ${site.name}`,
      description: article.description,
      url,
      siteName: site.name,
      locale: "fr_FR",
      type: "article",
      publishedTime: article.date,
      authors: [site.author.name],
      images: [
        {
          url: site.ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | ${site.name}`,
      description: article.description,
      images: [site.ogImage],
    },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  if (block.type === "h2") {
    return <h2 className="mt-8 text-2xl font-semibold text-white">{block.text}</h2>;
  }
  if (block.type === "ul") {
    return (
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-200">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="mt-4 leading-relaxed text-slate-200">{block.text}</p>;
}

function ArticleJsonLd({ article }: { article: ReturnType<typeof getArticle> }) {
  if (!article) return null;
  const url = `${site.url}/blog/${article.slug}`;
  const graph = [
    {
      "@type": "Article",
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      dateModified: article.date,
      author: {
        "@type": "Organization",
        name: site.author.name,
        url: site.author.url,
      },
      publisher: {
        "@type": "Organization",
        name: site.name,
        logo: {
          "@type": "ImageObject",
          url: site.logo,
        },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: site.url },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
  ];

  if (article.faq && article.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: article.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    } as never);
  }

  const data = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
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
    <>
      <ArticleJsonLd article={article} />
      <main className="mx-auto max-w-3xl px-4 py-8">
        <Link href="/blog" className="text-sm font-medium text-lime-700 hover:underline">
          ← Tous les articles
        </Link>

        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-lime-700">
          <span className="rounded-full bg-yellow-300/[0.06] px-2.5 py-1">{article.category}</span>
          <span className="text-slate-400">{article.readingTime}</span>
          <span className="text-slate-400">· {date}</span>
        </div>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
          {article.title}
        </h1>
        <p className="mt-4 text-lg text-slate-300">{article.description}</p>

        <article className="mt-8">
          {article.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </article>

        {article.faq && article.faq.length > 0 && (
          <section className="mt-6" aria-label="Questions fréquentes">
            <h2 className="text-2xl font-semibold text-white">
              Questions fréquentes
            </h2>
            <div className="mt-4 space-y-4">
              {article.faq.map((f) => (
                <div
                  key={f.question}
                  className="rounded-2xl border border-white/10 bg-[#0d0d12] p-6"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {f.question}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-200">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-6 rounded-2xl bg-yellow-300/[0.06] p-6 text-center">
          <p className="font-semibold text-white">
            Prêt à collecter vos premiers avis ?
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/tarifs"
              className="rounded-full bg-lime-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-lime-700"
            >
              Démarrer gratuitement
            </Link>
            <Link
              href="/outils/generateur-avis"
              className="rounded-full border border-lime-300 bg-[#0d0d12] px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-yellow-300/[0.06]"
            >
              Générateur de QR code
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
