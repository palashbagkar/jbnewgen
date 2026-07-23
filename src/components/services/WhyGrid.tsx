import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import type { WhyBlock } from "@/lib/content";

/** Dark "why JB NewGen / how we work" section - check-marked value cards. */
export function WhyGrid({ label, title, intro, items }: WhyBlock) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 mesh opacity-50" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-[7px] bg-flame-500/12 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-flame-300">{label}</p>
        <SplitHeading className="max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.5rem] md:leading-[1.12]">
          {title}
        </SplitHeading>
        {intro && (
          <Reveal delay={150}>
            <p className="mt-5 max-w-2xl text-pretty text-lg text-ink-300">{intro}</p>
          </Reveal>
        )}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} variant="pop" delay={(i % 4) * 70}>
              <div className="h-full rounded-[7px] border border-white/10 bg-white/[0.05] p-6">
                <span className="mb-4 grid h-8 w-8 place-items-center rounded-full border border-flame-500/40 bg-flame-500/20 text-flame-300">
                  <Icon name="check" size={15} strokeWidth={2.4} />
                </span>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
