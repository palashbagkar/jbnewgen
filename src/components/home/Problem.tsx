import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { Icon } from "@/components/ui/Icon";
import { ceo } from "@/lib/content";

/** Frames the need — India's complexity — and lands the CEO's signature quote. */
export function Problem() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div>
          <SplitHeading className="text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl md:text-[2.7rem] md:leading-[1.08]">
            Most foreign companies <span className="text-flame-600">underestimate</span> India.
          </SplitHeading>
          <Reveal delay={250}>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-ink-500">
              It is not the size of the oportunity that is the problem but rather the difficulty of actually reaching it. Closing that gap,
              with a network that&apos;s already built, is the whole point of a distribution partner.
            </p>
          </Reveal>
        </div>

        <Reveal variant="pop" delay={150}>
          <figure className="relative overflow-hidden rounded-3xl bg-ink-950 text-white shadow-[0_40px_80px_-44px_rgba(8,21,39,0.6)]">
            <div className="pointer-events-none absolute inset-0 mesh rounded-3xl opacity-60" />

            {/* Photo — a direct, unpadded child so it sits flush in the card's bottom-right corner. */}
            <div className="absolute bottom-0 right-0 h-28 w-24 overflow-hidden rounded-tl-2xl">
              <Image src="/images/clients/ceo.png" alt={ceo.name} fill sizes="96px" className="object-cover object-top" />
            </div>

            <div className="relative p-8 sm:p-10">
              <Icon name="quote" size={44} className="text-flame-400/70" />
              <blockquote className="mt-4 text-balance text-xl font-medium leading-relaxed sm:text-2xl">
                {ceo.quote}
              </blockquote>
              <div className="mt-8 flex items-center justify-end border-t border-white/10 pb-2 pr-28 pt-10">
                <span className="text-right">
                  <span className="block font-semibold text-white">{ceo.name}</span>
                  <span className="block text-sm text-ink-300">{ceo.role}, JB NewGen</span>
                </span>
              </div>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
