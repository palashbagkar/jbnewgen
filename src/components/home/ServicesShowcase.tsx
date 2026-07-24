"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { NavPillar } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { PillarVisual } from "./PillarVisual";

const AUTO_MS = 6000;

/** Interactive, executive product-demo of the service pillars.
 *  `pillars` is resolved from the CMS by the page and passed in. */
export function ServicesShowcase({ pillars }: { pillars: NavPillar[] }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0); // 0–100, single source of truth
  const [paused, setPaused] = useState(false);
  const progressRef = useRef(0);
  const pillar = pillars[active % Math.max(pillars.length, 1)];

  // One rAF loop drives both the visible bar and the advance, so they can never
  // drift apart. Pausing freezes the bar exactly where it is; resuming continues.
  useEffect(() => {
    if (paused || pillars.length === 0) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      let p = progressRef.current + (dt / AUTO_MS) * 100;
      if (p >= 100) {
        setActive((a) => (a + 1) % pillars.length);
        p = 0;
      }
      progressRef.current = p;
      setProgress(p);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, pillars.length]);

  if (!pillar) return null;

  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 mesh opacity-50" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-[7px] bg-flame-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-[7px] bg-azure-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SplitHeading className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
            Four capabilities. One India partner.
          </SplitHeading>
          <Reveal delay={250}>
            <p className="mt-5 text-pretty text-lg text-ink-300">
              End to end - from strategy to the technology and communication that runs your operation
              on the ground.
            </p>
          </Reveal>
        </div>

        <div className="mt-14">
          {/* Both columns live in one centered block: a 60 / 40 split, equal height,
              contents stuck to the top. */}
          <div className="mx-auto grid max-w-4xl items-stretch gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
            {/* Column 1 (60%) - the live visual, with the explore/timer button beneath it. */}
            <Reveal as="div" variant="pop" delay={150} className="flex flex-col gap-5">
              <div
                key={`${pillar.slug}-visual`}
                className="animate-rise"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <PillarVisual slug={pillar.slug} />
              </div>

              <Link
                key={`${pillar.slug}-btn`}
                href={`/services/${pillar.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] p-4 text-left transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.1] animate-rise"
                style={{ animationDelay: "150ms" }}
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-flame-500 to-azure-500 text-white">
                    <Icon name={pillar.icon} size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-white">Explore {pillar.short}</span>
                    <span className="block truncate text-sm text-ink-400">{pillar.blurb}</span>
                  </span>
                  <Icon name="arrowRight" size={18} className="ml-auto shrink-0 text-flame-400 transition-transform group-hover:translate-x-0.5" />
                </span>
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-white/10">
                  <span
                    className="block h-full origin-left bg-flame-500"
                    style={{ width: `${progress}%` }}
                  />
                </span>
              </Link>
            </Reveal>

            {/* Column 2 (40%) - title + service pills share one width and sit centered
                in the cell; the title wraps to that width so it lines up with the pills. */}
            <Reveal as="div" variant="pop" delay={220} className="flex flex-col">
              <div
                key={`${pillar.slug}-col`}
                className="mx-auto flex w-full max-w-[22rem] flex-1 animate-rise flex-col justify-center"
                style={{ animationDelay: "300ms" }}
              >
                <h3 className="text-2xl font-bold leading-tight text-white sm:text-[1.7rem]">{pillar.title}</h3>
                <p className="mt-5 text-pretty text-[0.95rem] leading-relaxed text-ink-300">
                  {pillar.subtext}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
