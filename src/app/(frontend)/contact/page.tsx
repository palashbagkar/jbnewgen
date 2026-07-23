import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { NavGrid } from "@/components/nav/NavGrid";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact JB NewGen Enterprises - Mumbai. Call +91 6362864230 (Mon–Sat), email sales@jbnewgen.com or support@jbnewgen.com, or book a free consultation with our expert team.",
};

/* Content is from the live jbnewgen.com/contact page - do not invent details. */

const heroSub =
  "We work with a passion for taking on challenges and creating scalable, sustainable growth for our clients' business. Every contact action below is a live link.";

type Detail = {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  note?: string;
};

const details: Detail[] = [
  {
    icon: "phone",
    label: "Call us",
    value: site.phone,
    href: site.phoneHref,
    external: true,
    note: "Mon – Sat",
  },
  {
    icon: "mail",
    label: "Email sales",
    value: site.emails.sales,
    href: `mailto:${site.emails.sales}`,
    external: true,
  },
  {
    icon: "mail",
    label: "Email support",
    value: site.emails.support,
    href: `mailto:${site.emails.support}`,
    external: true,
  },
  {
    icon: "mapPin",
    label: "Office",
    value: "504 Challenger Tower III, Thakur Village, Kandivali (E), Mumbai – 400 101",
    href: "https://maps.google.com/?q=504+Challenger+Tower+III+Kandivali+East+Mumbai+400101",
    external: true,
  },
  {
    icon: "clock",
    label: "Business hours",
    value: "Mon – Sat: 8 am – 5 pm · Sunday: Closed",
    href: site.phoneHref,
    external: true,
  },
];

/* Consultation subject areas offered on the live contact form. */
const consultAreas = [
  "Business Consultancy",
  "Digital Transformation",
  "Digital Marketing",
  "CPaaS & Omnichannel",
];

const address =
  "JB NewGen Enterprises Private Limited · 504 Challenger Tower III, Thakur Village, Kandivali (E), Mumbai 400 101";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        <div className="pointer-events-none absolute inset-0 mesh opacity-50" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-[7px] bg-flame-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-[7px] bg-flame-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-8 sm:pb-28 sm:pt-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/45">
              <li>
                <Link href="/" className="transition-colors hover:text-white">Home</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <Icon name="chevronDown" size={14} className="-rotate-90 text-white/25" />
                <span className="text-white/80" aria-current="page">Contact</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-[7px] border border-flame-500/30 bg-flame-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-flame-300">
              Contact
            </span>
            <SplitHeading
              as="h1"
              className="mt-7 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-[3.4rem] md:leading-[1.05]"
            >
              {"Make a free consultation with "}
              <span className="text-flame-400">our expert team</span>
            </SplitHeading>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-200 sm:text-lg">
              {heroSub}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={site.phoneHref} size="lg" icon="phone">Call {site.phone}</Button>
              <Button href="/quote" variant="light" size="lg" icon="arrowRight">Get a quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* REACH US */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Reach Us"
              title="One team, every channel open"
              intro="Call, email, or drop by the Mumbai office. Whichever you pick, you reach the people who do the work."
            />
            <div className="mt-8 space-y-3">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={(i % 3) * 60}>
                  <a
                    href={d.href}
                    {...(d.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-28px_rgba(8,21,39,0.45)]"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-flame-500/10 text-flame-600 ring-1 ring-inset ring-flame-500/15">
                      <Icon name={d.icon} size={20} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-400">
                        {d.label}
                        {d.note && (
                          <span className="rounded-full bg-ink-100 px-2 py-0.5 text-[0.65rem] normal-case tracking-normal text-ink-500">
                            {d.note}
                          </span>
                        )}
                      </span>
                      <span className="mt-1 block font-semibold text-ink-900">{d.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CONSULTATION CARD */}
          <Reveal variant="pop" className="relative overflow-hidden rounded-3xl bg-ink-950 p-8 text-white sm:p-10">
            <div className="pointer-events-none absolute inset-0 mesh opacity-40" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-flame-300">Free Consultation</p>
              <h3 className="mt-3 text-2xl font-bold">Tell us what you need help with</h3>
              <p className="mt-3 leading-relaxed text-ink-300">
                {"Book a free consultation with our expert team. Pick the area closest to your challenge and we'll take it from there."}
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {consultAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2.5 rounded-[7px] border border-white/10 bg-white/[0.05] px-4 py-3">
                    <Icon name="check" size={16} strokeWidth={2.4} className="mt-0.5 shrink-0 text-flame-300" />
                    <span className="text-sm font-medium text-white">{area}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/quote" size="lg">Get a quote now</Button>
                <Button href={`mailto:${site.emails.sales}`} variant="light" size="lg" icon="mail">Email us</Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-[7px] border border-white/15 bg-white/[0.05] text-ink-200 transition-colors hover:border-flame-500/40 hover:text-flame-300"
                  >
                    <Icon name={s.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CONVERSION LINKS */}
      <NavGrid
        title="Reach us"
        caption="Device & conversion links"
        columns={3}
        items={[
          { label: "Call us", href: site.phoneHref, desc: site.phone, icon: "phone", external: true },
          { label: "Email sales", href: `mailto:${site.emails.sales}`, desc: site.emails.sales, icon: "mail", external: true },
          { label: "Email support", href: `mailto:${site.emails.support}`, desc: site.emails.support, icon: "mail", external: true },
          { label: "Get a quote", href: "/quote", desc: "Start a project", icon: "spark" },
          { label: "LinkedIn", href: site.socials[0].href, desc: "Connect with us", icon: "linkedin", external: true },
          { label: "Careers", href: "/careers", desc: "Join the team", icon: "briefcase" },
        ]}
      />

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 mesh opacity-60" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-[7px] bg-flame-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-[7px] bg-flame-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-flame-300">{"Let's Talk"}</p>
          <SplitHeading
            as="h2"
            className="mt-4 text-balance text-3xl font-bold sm:text-4xl md:text-[2.7rem] md:leading-[1.08]"
          >
            Ready to make India your next market?
          </SplitHeading>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-ink-200 sm:text-lg">
            Book a free 45-minute strategy call, or reach us directly - whatever works for you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/quote" size="lg">Book Your Free Strategy Call</Button>
            <Button href={`mailto:${site.emails.sales}`} variant="light" size="lg" icon="mail">Email Us Directly</Button>
          </div>
          <p className="mt-8 text-sm text-ink-400">{address}</p>
        </div>
      </section>
    </>
  );
}
