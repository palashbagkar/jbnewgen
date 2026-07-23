import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { site } from "@/lib/content";
import type { CtaBlock } from "@/lib/content";

/** "Get started" conversion block - Book a Free Strategy Call + Email us. */
export function ServiceCTA({ label, title, body }: CtaBlock) {
  return (
    <section className="bg-ink-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <p className="eyebrow mb-4 justify-center">{label}</p>
        <SplitHeading className="text-balance text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          {title}
        </SplitHeading>
        <Reveal delay={150}>
          <p className="mt-5 text-pretty text-lg text-ink-500">{body}</p>
        </Reveal>
        <Reveal as="div" variant="pop" delay={250} className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/quote" variant="secondary" size="lg">
            Book Your Free Strategy Call
          </Button>
          <Button href={`mailto:${site.emails.sales}`} variant="ghost" size="lg" icon="mail">
            Email Us Directly
          </Button>
        </Reveal>
        <p className="mt-7 text-sm text-ink-400">
          {site.legalName} · Mumbai, India · {site.emails.sales} · {site.phone}
        </p>
      </div>
    </section>
  );
}
