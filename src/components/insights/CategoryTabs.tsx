import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { categories, articlesInCategory } from "@/lib/content";
import { categoryIcon } from "./ArticleCard";

/**
 * Horizontal topic chips shared by the hub and category pages. The active
 * category (if any) renders as a solid chip; the rest are outlined links.
 */
export function CategoryTabs({
  active,
  includeAll = true,
  heading = "Browse by topic",
}: {
  active?: string;
  includeAll?: boolean;
  heading?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-6 sm:px-8">
      {heading && (
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-400">{heading}</p>
      )}
      <div className="flex flex-wrap gap-3">
        {includeAll && (
          <Link
            href="/insights"
            className={`inline-flex items-center gap-2 rounded-[7px] border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              active === undefined
                ? "border-transparent bg-ink-900 text-white"
                : "border-ink-200 bg-white text-ink-700 hover:-translate-y-0.5 hover:border-ink-300 hover:text-flame-600"
            }`}
          >
            <Icon name="folder" size={16} />
            All Insights
          </Link>
        )}
        {categories.map((c) => {
          const isActive = c.slug === active;
          const count = articlesInCategory(c.slug).length;
          return (
            <Link
              key={c.slug}
              href={`/insights/category/${c.slug}`}
              aria-current={isActive ? "page" : undefined}
              className={`group inline-flex items-center gap-2 rounded-[7px] border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "border-transparent bg-flame-500 text-white shadow-[0_10px_24px_-12px_rgba(247,148,29,0.8)]"
                  : "border-ink-200 bg-white text-ink-700 hover:-translate-y-0.5 hover:border-ink-300 hover:text-flame-600"
              }`}
            >
              <Icon name={categoryIcon[c.slug] ?? "bulb"} size={16} />
              {c.title}
              <span
                className={`rounded-full px-1.5 text-xs font-bold ${
                  isActive ? "bg-white/20 text-white" : "bg-ink-50 text-ink-400 group-hover:text-flame-600"
                }`}
              >
                {count}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
