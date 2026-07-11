import type { Metadata } from "next";
import { PageHeader } from "@/components/nav/PageHeader";
import { NavGrid } from "@/components/nav/NavGrid";
import { NextStep } from "@/components/nav/NextStep";
import { articles, articlesInCategory, categories } from "@/lib/content";

export const metadata: Metadata = { title: "Insights" };

export default function InsightsHub() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Insights"
        trail={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
        ]}
        note="Hub page. Browse by category, or jump straight to an article."
      />
      <NavGrid
        title="Categories"
        columns={3}
        items={categories.map((c) => ({
          label: c.title,
          href: `/insights/category/${c.slug}`,
          desc: `${articlesInCategory(c.slug).length} articles`,
          icon: "bulb",
        }))}
      />
      <NavGrid
        title="All articles"
        caption="Every post, preserved"
        columns={2}
        className="pt-0"
        items={articles.map((a) => ({
          label: a.title,
          href: `/insights/${a.slug}`,
          desc: categories.find((c) => c.slug === a.category)?.title,
          icon: "arrowUpRight",
        }))}
      />
      <NextStep />
    </>
  );
}
