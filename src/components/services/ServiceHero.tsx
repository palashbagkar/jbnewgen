import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import type { ServiceHero as ServiceHeroData } from "@/lib/content";

/** Dark pillar hero - badge, split headline with an orange accent, sub, two CTAs. */
export function ServiceHero({ badge, lead, accent, tail, sub }: ServiceHeroData) {
  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div className="pointer-events-none absolute inset-0 mesh opacity-50" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-[7px] bg-flame-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-1/4 h-72 w-72 rounded-[7px] bg-flame-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-28">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-flame-500/30 bg-flame-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-flame-300">
            {badge}
          </span>
        </Reveal>

        <SplitHeading className="mt-7 text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-[3.25rem]">
          {lead} <span className="text-flame-400">{accent}</span>
          {tail}
        </SplitHeading>

        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-200">{sub}</p>
        </Reveal>

        <Reveal as="div" variant="pop" delay={300} className="mt-9 flex flex-wrap gap-3">
          <Button href="/quote" size="lg">
            Book a Free Strategy Call
          </Button>
          <Button href="#services" variant="light" size="lg" icon="arrowRight">
            See What We Do
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
