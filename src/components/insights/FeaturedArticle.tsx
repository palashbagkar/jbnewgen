import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { type Article, categoryBySlug } from "@/lib/content";
import { ArticleMeta, categoryIcon } from "./ArticleCard";

/**
 * Large horizontal hero card for the lead article on the insights hub.
 * Deliberately a different shape from the grid cards so the page reads as an
 * edited front page, not a uniform card wall.
 */
export function FeaturedArticle({ article, label = "Latest" }: { article: Article; label?: string }) {
  const cat = categoryBySlug(article.category);
  return (
    <Reveal variant="pop">
      <Link
        href={`/insights/${article.slug}`}
        className="group grid overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_40px_80px_-38px_rgba(8,21,39,0.5)] md:grid-cols-2"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-ink-100 md:aspect-auto md:min-h-[340px]">
          {article.image ? (
            <Image
              src={article.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              priority
            />
          ) : (
            <>
              <div className="absolute inset-0 mesh opacity-90" />
              <div className="absolute inset-0 dot-grid opacity-40" />
              <Icon
                name={categoryIcon[article.category] ?? "bulb"}
                size={120}
                strokeWidth={1}
                className="absolute right-6 bottom-5 text-ink-900/10"
              />
            </>
          )}
          <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-[7px] bg-flame-500 px-3 py-1 text-xs font-semibold text-white shadow-[0_10px_24px_-10px_rgba(247,148,29,0.8)]">
            <Icon name="spark" size={13} />
            {label}
          </span>
        </div>

        <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="rounded-[7px] bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-600">
              {cat?.title ?? "Insight"}
            </span>
            <ArticleMeta article={article} />
          </div>
          <h2 className="text-balance text-2xl font-bold leading-tight text-ink-900 transition-colors group-hover:text-flame-600 sm:text-3xl">
            {article.title}
          </h2>
          <p className="line-clamp-3 text-pretty leading-relaxed text-ink-500">{article.excerpt}</p>
          <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-flame-600">
            Read the article
            <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
