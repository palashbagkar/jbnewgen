import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import type { Pillar } from "@/lib/content";

/** The numbered sub-service list - the interactive core of a pillar page.
 *  Each row links to its own sub-service detail page. */
export function ServiceList({ pillar }: { pillar: Pillar }) {
  const { label, title, intro } = pillar.servicesIntro;
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid items-end gap-6 md:grid-cols-2 md:gap-12">
          <div>
            <p className="eyebrow mb-4">{label}</p>
            <SplitHeading className="text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              {title}
            </SplitHeading>
          </div>
          <Reveal delay={150}>
            <p className="text-pretty text-ink-500">{intro}</p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-ink-100">
          {pillar.services.map((s, i) => (
            <Reveal key={s.slug}>
              <Link
                href={`/services/${pillar.slug}/${s.slug}`}
                className="group grid grid-cols-[3rem_1fr] gap-x-5 border-b border-ink-100 py-9 transition-colors sm:grid-cols-[3.5rem_1fr]"
              >
                <span className="pt-1 font-mono text-sm font-semibold text-flame-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-ink-900 transition-colors group-hover:text-flame-600 sm:text-xl">
                    {s.title}
                    <Icon
                      name="arrowRight"
                      size={17}
                      className="shrink-0 text-flame-500 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </h3>
                  <p className="mt-2 max-w-2xl text-pretty text-ink-500">{s.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ink-100 bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
