import { cn } from "@/lib/cn";
import type { Article } from "@/lib/content";
import { ArticleCard } from "./ArticleCard";

/** A titled section rendering a responsive grid of article cards. */
export function ArticleGrid({
  title,
  caption,
  articles,
  columns = 3,
  className,
}: {
  title?: string;
  caption?: string;
  articles: Article[];
  columns?: 2 | 3;
  className?: string;
}) {
  if (articles.length === 0) return null;
  return (
    <section className={cn("mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16", className)}>
      {(title || caption) && (
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            {title && (
              <h2 className="text-xl font-bold tracking-tight text-ink-900 sm:text-2xl">{title}</h2>
            )}
            {caption && <p className="mt-1 text-sm text-ink-500">{caption}</p>}
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-400">
            {articles.length} article{articles.length === 1 ? "" : "s"}
          </span>
        </div>
      )}

      <div
        className={cn(
          "grid grid-cols-1 gap-6 sm:grid-cols-2",
          columns === 3 && "lg:grid-cols-3",
        )}
      >
        {articles.map((a, i) => (
          <ArticleCard key={a.slug} article={a} index={i} />
        ))}
      </div>
    </section>
  );
}
