import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SplitHeading } from "@/components/ui/SplitHeading";

/**
 * Full-bleed image hero (Markopolo-inspired). Fills the viewport, sits under a
 * transparent header (pulled up with -mt-16), and left-aligns to the logo.
 */
export function Hero() {
  return (
    <section id="hero" className="relative isolate -mt-16 flex min-h-svh items-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/stock/strategy.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Neutral (de-blued), reduced-opacity darkening */}
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(23, 63, 116, 0.34)" }} />
      {/* Left-anchored gradient keeps the left-aligned text legible while the right stays bright */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(9,11,16,0.62) 0%, rgba(9,11,16,0.22) 48%, rgba(9,11,16,0) 82%)",
        }}
      />

      {/* Content — aligned to the header container so the left edge meets the logo */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 sm:px-8">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white [text-shadow:0_1px_20px_rgba(0,0,0,0.45)] sm:text-5xl md:text-[3.7rem]">
            <SplitHeading as="span" className="block">
              India is your next big market.
            </SplitHeading>
            <SplitHeading
              as="span"
              delay={520}
              className="mt-1.5 block font-serif text-[1.12em] font-normal italic tracking-normal text-white"
            >
              We make the entry seamless.
            </SplitHeading>
          </h1>

          <p
            className="mt-6 max-w-xl animate-slide-in text-pretty text-base leading-relaxed text-ink-100 [text-shadow:0_1px_12px_rgba(0,0,0,0.4)] sm:text-lg"
            style={{ animationDelay: "1150ms" }}
          >
            Good planning is the key to success. We help US/EU/Global Startups establish and scale in India.
          </p>

          <div
            className="mt-9 flex animate-rise flex-wrap items-center gap-3"
            style={{ animationDelay: "1500ms" }}
          >
            <Button href="/quote" size="lg" flat>
              Book a consultation
            </Button>
            <Button href="/services" variant="light" size="lg" icon="arrowRight" flat>
              See what we offer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
