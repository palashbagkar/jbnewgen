import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { Icon } from "@/components/ui/Icon";
import { testimonials } from "@/lib/content";

const gradients = [
  "from-flame-500 to-flame-500",
  "from-flame-500 to-flame-700",
  "from-flame-500 to-flame-500",
  "from-flame-600 to-flame-500",
];

function TestimonialCard({ t, i }: { t: (typeof testimonials)[number]; i: number }) {
  return (
    <figure className="flex w-[calc((100cqw-2rem)/3)] shrink-0 flex-col rounded-2xl border border-ink-100 bg-white px-6 py-4 shadow-[0_1px_2px_rgba(8,21,39,0.04)] transition-all duration-200 hover:border-flame-500 hover:ring-1 hover:ring-flame-500">
      <div className="mb-2 flex items-center gap-1 text-flame-500">
        {Array.from({ length: 5 }).map((_, s) => (
          <Icon key={s} name="star" size={14} className="fill-flame-500" strokeWidth={0} />
        ))}
      </div>
      <blockquote className="line-clamp-4 flex-1 text-pretty text-sm leading-relaxed text-ink-700">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-3 flex items-center gap-3 border-t border-ink-100 pt-3">
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-[7px] bg-gradient-to-br ${gradients[i % gradients.length]} text-xs font-bold text-white`}
        >
          {t.name.split(" ").map((n) => n[0]).join("")}
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink-900">{t.name}</span>
          <span className="block text-xs text-ink-500">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  // Doubled so the marquee can loop seamlessly at translateX(-50%).
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SplitHeading className="text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl md:text-[2.7rem] md:leading-[1.1]">
            Trusted to deliver growth that lasts
          </SplitHeading>
          <Reveal delay={250}>
            <p className="mt-5 text-pretty text-lg text-ink-500">
              Our clients trust us to deliver comprehensive solutions that drive growth, streamline strategies, and ensure long-term success.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal variant="pop" delay={150} className="mx-auto mt-14 max-w-7xl px-5 sm:px-8">
        <div className="@container relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]">
          <div className="flex w-max animate-marquee-slow gap-4 py-2 hover:[animation-play-state:paused] motion-reduce:animate-none">
            {loop.map((t, i) => (
              <TestimonialCard key={`${t.name}-${i}`} t={t} i={i} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
