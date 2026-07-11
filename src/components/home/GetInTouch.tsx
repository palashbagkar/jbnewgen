import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/lib/content";

/** Primary conversion block. */
export function GetInTouch() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 mesh opacity-60" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-[7px] bg-flame-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-[7px] bg-flame-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SplitHeading className="text-balance text-3xl font-bold text-white sm:text-4xl md:text-[2.7rem] md:leading-[1.08]">
              Let&apos;s map your India entry
            </SplitHeading>
            <p className="mt-5 max-w-xl text-pretty text-lg text-ink-200">
              A no-obligation call that turns your ambition into a concrete, executable plan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/quote" size="lg">
                Book a free consultation
              </Button>
              <Button href="/contact" variant="light" size="lg" icon="arrowUpRight">
                Contact us
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Reveal
              as="a"
              variant="pop"
              delay={100}
              href={site.phoneHref}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-flame-400/50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-flame-500/15 text-flame-400">
                <Icon name="phone" size={20} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-ink-400">Call us · Mon–Sat</span>
                <span className="block font-semibold text-white">{site.phone}</span>
              </span>
            </Reveal>
            <Reveal
              as="a"
              variant="pop"
              delay={180}
              href={`mailto:${site.emails.sales}`}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:border-flame-400/50"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-flame-500/15 text-flame-400">
                <Icon name="mail" size={20} />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-ink-400">Email us</span>
                <span className="block font-semibold text-white">{site.emails.sales}</span>
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
