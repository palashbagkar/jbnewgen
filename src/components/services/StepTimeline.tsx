import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import type { StepBlock } from "@/lib/content";

/** "How it works" - a vertical, numbered, milestone-driven timeline. */
export function StepTimeline({ label, title, intro, items }: StepBlock) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="eyebrow mb-4">{label}</p>
        <SplitHeading className="text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          {title}
        </SplitHeading>
        {intro && (
          <Reveal delay={150}>
            <p className="mt-5 text-pretty text-lg text-ink-500">{intro}</p>
          </Reveal>
        )}

        <div className="mt-14">
          {items.map((step, i) => (
            <Reveal key={step.title}>
              <div className="grid grid-cols-[3rem_1fr] gap-x-5">
                <div className="flex flex-col items-center">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-flame-500 bg-white font-mono text-sm font-bold text-flame-600">
                    {i + 1}
                  </span>
                  {i < items.length - 1 && <span className="w-0.5 flex-1 bg-ink-100" />}
                </div>
                <div className={i < items.length - 1 ? "pb-10 pt-2" : "pt-2"}>
                  <h3 className="text-lg font-bold text-ink-900">{step.title}</h3>
                  <p className="mt-2 text-pretty leading-relaxed text-ink-500">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
