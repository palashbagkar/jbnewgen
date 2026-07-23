import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/nav/PageHeader";
import { NextStep } from "@/components/nav/NextStep";
import { ArticleGrid } from "@/components/insights/ArticleGrid";
import { CategoryTabs } from "@/components/insights/CategoryTabs";
import { categoryBySlug } from "@/lib/content";
import { getInsightsInCategory } from "@/lib/insights-data";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cat: string }>;
}): Promise<Metadata> {
  const { cat } = await params;
  const c = categoryBySlug(cat);
  return { title: c ? `${c.title} · Insights` : "Insights" };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ cat: string }>;
}) {
  const { cat } = await params;
  const c = categoryBySlug(cat);
  if (!c) notFound();

  const posts = await getInsightsInCategory(c.slug);

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title={c.title}
        trail={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: c.title, href: `/insights/category/${c.slug}` },
        ]}
        note={`${posts.length} article${posts.length === 1 ? "" : "s"} in ${c.title}.`}
      />

      <ArticleGrid articles={posts} columns={3} className="pt-14" />

      <CategoryTabs active={c.slug} heading="More topics" />

      <div className="pt-6" />
      <NextStep />
    </>
  );
}
