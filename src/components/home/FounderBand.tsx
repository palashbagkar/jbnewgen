import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ceo } from "@/lib/content";

/** Person-led credibility - "About", done right. */
export function FounderBand() {
  const chips = [
    "Channel & distribution architecture",
    "GTM & revenue acceleration",
    "Tier 1 & Tier 2 expansion",
  ];
  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal
          variant="pop"
          className="relative overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-[0_20px_60px_-40px_rgba(8,21,39,0.5)]"
        >
          {/* Photo - a direct, unpadded child so it sits flush in the card's bottom-right corner. */}
          <div className="absolute bottom-0 right-0 h-40 w-36 overflow-hidden rounded-tl-2xl shadow-lg">
            <Image src="/images/clients/ceo.png" alt={ceo.name} fill sizes="144px" className="object-cover object-top" />
          </div>

          <div className="grid items-center gap-6 p-8 pr-44 sm:gap-8 sm:p-10 sm:pr-52 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xl font-bold text-ink-900">{ceo.name}</p>
              <p className="text-sm font-medium text-flame-600">{ceo.role}, JB NewGen Enterprises</p>
              <p className="mt-3 max-w-2xl text-pretty text-ink-500">{ceo.bioShort}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <span key={c} className="rounded-[7px] bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600 ring-1 ring-inset ring-ink-100">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <Button href={ceo.href} variant="ghost" icon="arrowRight" className="shrink-0">
              Meet Joyjeet
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
