import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import type { ChallengeBlock } from "@/lib/content";

/** Cream "the challenge" section - a left-aligned header over a grid of pain cards. */
export function ChallengeGrid({ label, title, intro, items }: ChallengeBlock) {
  return (
    <section className="bg-ink-50/60 py-20 sm:py-28">
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

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} variant="pop" delay={(i % 4) * 70}>
              <div className="card h-full p-6">
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-flame-500/10 text-flame-600 ring-1 ring-inset ring-flame-500/15">
                  <Icon name={item.icon} size={20} />
                </span>
                <h3 className="font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
