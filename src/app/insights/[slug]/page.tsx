import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/nav/PageHeader";
import { NavGrid } from "@/components/nav/NavGrid";
import { NextStep } from "@/components/nav/NextStep";
import { articleBySlug, articles, categoryBySlug } from "@/lib/content";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = articleBySlug(slug);
  return { title: a ? `${a.title} · Insights` : "Insights" };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articleBySlug(slug);
  if (!a) notFound();

  const category = categoryBySlug(a.category);
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 4);

  return (
    <>
      <PageHeader
        eyebrow="Insights · Article"
        title={a.title}
        trail={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          ...(category ? [{ label: category.title, href: `/insights/category/${category.slug}` }] : []),
          { label: "Article", href: `/insights/${a.slug}` },
        ]}
        note="Article stub. Links back to its category and across to related articles."
      />
      <NavGrid
        title="Keep reading"
        caption="Related articles + category"
        columns={2}
        items={[
          ...(category
            ? [{ label: `More in ${category.title}`, href: `/insights/category/${category.slug}`, desc: "Back to the category", icon: "arrowRight" as const }]
            : []),
          ...more.map((x) => ({ label: x.title, href: `/insights/${x.slug}`, icon: "arrowUpRight" as const })),
        ]}
      />
      <NextStep />
    </>
  );
}
