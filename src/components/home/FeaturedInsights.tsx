import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { Icon } from "@/components/ui/Icon";
import { categories, featuredArticles } from "@/lib/content";

const catTitle = (slug: string) => categories.find((c) => c.slug === slug)?.title ?? "Insight";

export function FeaturedInsights() {
  const posts = featuredArticles();
  return (
    <section className="border-t border-ink-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <SplitHeading className="text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            From the JBNewGen desk
          </SplitHeading>
          <Reveal delay={200} as="span">
            <Link href="/insights" className="group inline-flex items-center gap-2 text-sm font-semibold text-flame-600">
              All insights
              <Icon name="arrowRight" size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((a, i) => (
            <Reveal key={a.slug} variant="pop" delay={i * 80}>
              <Link
                href={`/insights/${a.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-30px_rgba(8,21,39,0.45)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-100">
                  {a.image ? (
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 mesh opacity-80" />
                      <div className="absolute inset-0 dot-grid opacity-40" />
                    </>
                  )}
                  <span className="absolute left-4 top-4 rounded-[7px] bg-white/90 px-3 py-1 text-xs font-semibold text-ink-700 backdrop-blur">
                    {catTitle(a.category)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold leading-snug text-ink-900 group-hover:text-flame-600">
                    {a.title}
                  </h3>
                  <span className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-700">
                    Read article
                    <Icon name="arrowRight" size={15} className="text-flame-500 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
