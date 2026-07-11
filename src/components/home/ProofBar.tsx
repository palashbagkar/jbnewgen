import { Reveal } from "@/components/ui/Reveal";
import { CountUpStat } from "./CountUpStat";
import { proofStats } from "@/lib/content";

/** Credibility bar — the numbers that answer "can they actually do this?" */
export function ProofBar() {
  return (
    <section className="border-y border-ink-100 bg-ink-50/50">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <Reveal className="mb-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400">
            Distribution, proven at scale
          </p>
        </Reveal>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {proofStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <dt className="text-4xl font-bold tracking-tight text-gradient-brand sm:text-5xl">
                <CountUpStat value={s.value} delayMs={i * 80} />
              </dt>
              <dd className="mx-auto mt-3 max-w-[15rem] text-sm font-medium text-ink-700">
                {s.label}
                <span className="mt-1 block text-xs font-normal text-ink-400">{s.sub}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
