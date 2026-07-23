import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { cn } from "@/lib/cn";
import type { FeatureBlock } from "@/lib/content";

const colClass: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/** Generic card grid - Industries, Who-this-is-for, and Regulatory blocks all
 *  share this shape (optional icon or tag, a title, and a body). */
export function FeatureGrid({ label, title, intro, tone = "cream", items }: FeatureBlock) {
  const cols = colClass[Math.min(4, Math.max(2, items.length)) as 2 | 3 | 4] ?? colClass[3];
  return (
    <section className={cn("py-20 sm:py-28", tone === "cream" ? "bg-ink-50/60" : "bg-white")}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow mb-4">{label}</p>
        <SplitHeading className="max-w-3xl text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl md:text-[2.5rem] md:leading-[1.12]">
          {title}
        </SplitHeading>
        {intro && (
          <Reveal delay={150}>
            <p className="mt-5 max-w-2xl text-pretty text-lg text-ink-500">{intro}</p>
          </Reveal>
        )}

        <div className={cn("mt-12 grid gap-4", cols)}>
          {items.map((item, i) => (
            <Reveal key={item.title} variant="pop" delay={(i % 4) * 70}>
              <div className="card flex h-full gap-4 p-6">
                {item.icon && (
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-flame-500/10 text-flame-600 ring-1 ring-inset ring-flame-500/15">
                    <Icon name={item.icon} size={20} />
                  </span>
                )}
                <div className="min-w-0">
                  {item.tag && (
                    <span className="mb-2 inline-block rounded-full border border-flame-500/20 bg-flame-500/10 px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wider text-flame-600">
                      {item.tag}
                    </span>
                  )}
                  <h3 className="font-semibold text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
