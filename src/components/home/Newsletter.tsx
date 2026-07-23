import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { Icon } from "@/components/ui/Icon";

/** Secondary capture for the not-ready-yet visitor. */
export function Newsletter() {
  return (
    <section className="pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal variant="pop" className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-ink-100 bg-ink-50/60 px-6 py-10 sm:flex-row sm:px-10">
          <div className="max-w-md text-center sm:text-left">
            <SplitHeading as="h3" className="text-xl font-bold text-ink-900 sm:text-2xl">
              India market insights, once a month
            </SplitHeading>
            <p className="mt-2 text-ink-500">
              Sharp, practical notes for operators - no fluff, no spam. Unsubscribe anytime.
            </p>
          </div>
          <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row" aria-label="Newsletter signup">
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="h-12 w-full rounded-[7px] border border-ink-200 bg-white px-5 text-ink-900 placeholder:text-ink-400 focus:border-flame-400 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-[7px] bg-flame-500 px-6 font-semibold text-white transition-colors hover:bg-flame-600"
            >
              Subscribe
              <Icon name="arrowRight" size={18} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
