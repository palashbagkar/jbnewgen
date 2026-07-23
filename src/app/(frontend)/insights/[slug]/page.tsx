import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/nav/PageHeader";
import { NextStep } from "@/components/nav/NextStep";
import { Icon } from "@/components/ui/Icon";
import { LexicalBody } from "@/components/insights/LexicalBody";
import { ArticleGrid } from "@/components/insights/ArticleGrid";
import { ArticleMeta } from "@/components/insights/ArticleCard";
import { categoryBySlug } from "@/lib/content";
import { getInsightBySlug, getInsights } from "@/lib/insights-data";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = await getInsightBySlug(slug);
  const a = found?.article;
  return {
    title: a ? `${a.title} · Insights` : "Insights",
    description: a?.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = await getInsightBySlug(slug);
  if (!found) notFound();
  const { article: a, body } = found;

  const category = categoryBySlug(a.category);

  // Related: same category first, then newest from elsewhere, capped at 3.
  const all = await getInsights();
  const sameCat = all.filter((x) => x.slug !== a.slug && x.category === a.category);
  const others = all.filter((x) => x.slug !== a.slug && x.category !== a.category);
  const related = [...sameCat, ...others].slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Insights · Article"
        title={a.title}
        trail={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          ...(category
            ? [{ label: category.title, href: `/insights/category/${category.slug}` }]
            : []),
          { label: "Article", href: `/insights/${a.slug}` },
        ]}
        note={a.excerpt}
      >
        {category && (
          <Link
            href={`/insights/category/${category.slug}`}
            className="inline-flex items-center gap-1.5 rounded-[7px] bg-flame-500/10 px-3 py-1.5 text-sm font-semibold text-flame-700 ring-1 ring-inset ring-flame-500/20 transition-colors hover:bg-flame-500/15"
          >
            <Icon name="folder" size={15} />
            {category.title}
          </Link>
        )}
        <span className="inline-flex items-center rounded-[7px] bg-white px-3 py-1.5 ring-1 ring-inset ring-ink-100">
          <ArticleMeta article={a} />
        </span>
      </PageHeader>

      {a.image && (
        <div className="mx-auto max-w-5xl px-5 pt-12 sm:px-8 sm:pt-16">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-ink-100 bg-ink-100">
            <Image
              src={a.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      <article className="py-14 sm:py-16">
        <LexicalBody data={body} />
      </article>

      <div className="border-t border-ink-100">
        <ArticleGrid title="Keep reading" caption="More from the JB NewGen desk" articles={related} columns={3} />
      </div>

      <NextStep />
    </>
  );
}
