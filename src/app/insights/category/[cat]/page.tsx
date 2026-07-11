import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/nav/PageHeader";
import { NavGrid } from "@/components/nav/NavGrid";
import { NextStep } from "@/components/nav/NextStep";
import { articlesInCategory, categories, categoryBySlug } from "@/lib/content";

export function generateStaticParams() {
  return categories.map((c) => ({ cat: c.slug }));
}

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

  const posts = articlesInCategory(c.slug);
  const others = categories.filter((x) => x.slug !== c.slug);

  return (
    <>
      <PageHeader
        eyebrow="Insights · Category"
        title={c.title}
        trail={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: c.title, href: `/insights/category/${c.slug}` },
        ]}
        note={`${posts.length} article${posts.length === 1 ? "" : "s"} in this category.`}
      />
      <NavGrid
        title="Articles"
        columns={2}
        items={posts.map((a) => ({ label: a.title, href: `/insights/${a.slug}`, icon: "arrowUpRight" }))}
      />
      <NavGrid
        title="Other categories"
        columns={3}
        className="pt-0"
        items={[
          { label: "All Insights", href: "/insights", desc: "Back to the hub", icon: "arrowRight" },
          ...others.map((x) => ({
            label: x.title,
            href: `/insights/category/${x.slug}`,
            desc: `${articlesInCategory(x.slug).length} articles`,
            icon: "bulb" as const,
          })),
        ]}
      />
      <NextStep />
    </>
  );
}
