import type { Metadata } from "next";
import { PageHeader } from "@/components/nav/PageHeader";
import { NextStep } from "@/components/nav/NextStep";
import { FeaturedArticle } from "@/components/insights/FeaturedArticle";
import { ArticleGrid } from "@/components/insights/ArticleGrid";
import { CategoryTabs } from "@/components/insights/CategoryTabs";
import { getInsights } from "@/lib/insights-data";

export const metadata: Metadata = { title: "Insights" };
export const dynamic = "force-dynamic";

export default async function InsightsHub() {
  const sorted = await getInsights();
  const [featured, ...rest] = sorted;

  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Insights"
        trail={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
        ]}
        note="Articles on business strategy, digital marketing, and digital transformation."
      />

      <section className="mx-auto max-w-7xl px-5 pt-12 sm:px-8 sm:pt-16">
        {featured && <FeaturedArticle article={featured} />}
      </section>

      <CategoryTabs active={undefined} includeAll={false} />

      <ArticleGrid title="Latest articles" articles={rest} columns={3} className="pt-8" />

      <NextStep heading="Have a question these articles didn't answer?" />
    </>
  );
}
