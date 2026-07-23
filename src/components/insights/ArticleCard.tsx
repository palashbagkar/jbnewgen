import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { type Article, categoryBySlug } from "@/lib/content";

/** Decorative glyph per category - used on the image-less card fallback. */
export const categoryIcon: Record<string, IconName> = {
  "business-strategy": "compass",
  "digital-marketing": "megaphone",
  "digital-transformation": "cpu",
};

/** Small meta strip: date, dot separator, reading time. */
export function ArticleMeta({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2.5 text-xs font-medium text-ink-400 ${className ?? ""}`}>
      <span>{article.date}</span>
      <span className="h-1 w-1 rounded-full bg-ink-200" aria-hidden />
      <span className="inline-flex items-center gap-1">
        <Icon name="clock" size={13} />
        {article.readMins} min read
      </span>
    </div>
  );
}

/** The standard insights article card - image or mesh fallback, meta, excerpt. */
export function ArticleCard({ article, index = 0 }: { article: Article; index?: number }) {
  const cat = categoryBySlug(article.category);
  return (
    <Reveal variant="pop" delay={(index % 3) * 80} className="h-full">
      <Link
        href={`/insights/${article.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-30px_rgba(8,21,39,0.45)]"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
          {article.image ? (
            <Image
              src={article.image}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
            />
          ) : (
            <>
              <div className="absolute inset-0 mesh opacity-80" />
              <div className="absolute inset-0 dot-grid opacity-40" />
              <Icon
                name={categoryIcon[article.category] ?? "bulb"}
                size={64}
                strokeWidth={1.2}
                className="absolute right-5 bottom-4 text-ink-900/10"
              />
            </>
          )}
          <span className="absolute left-4 top-4 rounded-[7px] bg-white/90 px-3 py-1 text-xs font-semibold text-ink-700 backdrop-blur">
            {cat?.title ?? "Insight"}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <ArticleMeta article={article} className="mb-3" />
          <h3 className="text-lg font-bold leading-snug text-ink-900 transition-colors group-hover:text-flame-600">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-500">{article.excerpt}</p>
          <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-ink-700">
            Read article
            <Icon
              name="arrowRight"
              size={15}
              className="text-flame-500 transition-transform group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
