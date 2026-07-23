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
  title: "Careers",
  description:
    "Join JB NewGen Enterprises. Explore our current job openings across partner sales, sales support, training, and digital marketing - and apply in just a few clicks with Quick Apply.",
};

/* Content is from the live jbnewgen.com/careers page - do not invent roles or copy. */

const heroIntro =
  "Looking to join JB NewGen? Now it's easier than ever. With Quick Apply, you can explore our 5 current job openings and apply to all relevant positions in just a few clicks.";

type Role = {
  title: string;
  locations: string;
  type: string;
  icon: IconName;
  body: string;
};

const roles: Role[] = [
  {
    title: "Partner Sales Manager",
    locations: "Bangalore · Chennai · Hyderabad · Mumbai · DNCR · Kolkata",
    type: "Remote",
    icon: "handshake",
    body: "Work with channel partners to drive sales of CCaaS, CPaaS, cloud and security solutions - building partner relationships, providing training support, and equipping partners with the sales tools they need.",
  },
  {
    title: "Sales Support",
    locations: "Bangalore",
    type: "Remote",
    icon: "folder",
    body: "Provide administrative and operational support to the Sales and Partner teams - documentation, business process management, partner payouts, grievance resolution, and MIS report maintenance.",
  },
  {
    title: "Trainer & Technical Support Specialist",
    locations: "Bangalore",
    type: "Remote",
    icon: "bulb",
    body: "Deliver continuous product training on CCaaS, CPaaS, and cloud services, and act as the technical support contact for partner sales teams - measured by deals closed independently.",
  },
  {
    title: "Website Creation, SEO & Performance Marketing",
    locations: "Bangalore / Mumbai",
    type: "Remote",
    icon: "trending",
    body: "Own the creation, maintenance, SEO management, and performance marketing for our website - driving traffic and conversions while maintaining an optimal user experience.",
  },
  {
    title: "Digital Marketing Specialist – Social Media Engagement",
    locations: "Bangalore / Mumbai",
    type: "Remote",
    icon: "megaphone",
    body: "Create compelling content for company and leadership social profiles across LinkedIn, Facebook, Instagram, and Twitter to increase engagement and position leaders in their field.",
  },
];

const applyHref = (role?: string) =>
  `mailto:${site.emails.support}?subject=${encodeURIComponent(
    role ? `Careers - Application: ${role}` : "Careers - Quick Apply",
  )}`;

const address =
  "JB NewGen Enterprises Pvt. Ltd. · 504 Challenger Tower III, Thakur Village, Kandivali (E), Mumbai 400 101 · support@jbnewgen.com · +91 6362864230";

export default function CareersPage() {
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
                <span className="text-white/80" aria-current="page">Careers</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-[7px] border border-flame-500/30 bg-flame-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-flame-300">
              Join the team
            </span>
            <SplitHeading
              as="h1"
              className="mt-7 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-[3.4rem] md:leading-[1.05]"
            >
              {"Build India's growth story "}
              <span className="text-flame-400">with JB NewGen</span>
            </SplitHeading>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-200 sm:text-lg">
              {heroIntro}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#roles" size="lg">View open roles</Button>
              <Button href={applyHref()} variant="light" size="lg" icon="mail">Quick Apply</Button>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <Section id="roles" className="bg-white">
        <SectionHeading
          align="left"
          eyebrow="Open Roles"
          title="5 current openings"
          intro="Every role below is remote-friendly across our India footprint. Apply to all relevant positions in just a few clicks."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {roles.map((r, i) => (
            <Reveal key={r.title} variant="pop" delay={(i % 2) * 80}>
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-7 transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(8,21,39,0.45)]">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-flame-500/10 text-flame-600 ring-1 ring-inset ring-flame-500/15">
                    <Icon name={r.icon} size={22} />
                  </span>
                  <span className="rounded-full border border-flame-500/20 bg-flame-500/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-flame-600">
                    {r.type}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ink-900">{r.title}</h3>
                <p className="flex items-start gap-2 text-sm text-ink-500">
                  <Icon name="mapPin" size={16} className="mt-0.5 shrink-0 text-flame-500" />
                  {r.locations}
                </p>
                <p className="text-sm leading-relaxed text-ink-500">{r.body}</p>
                <a
                  href={applyHref(r.title)}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-flame-600"
                >
                  Apply for this role
                  <Icon name="arrowRight" size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHY JOIN - real company facts */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 mesh opacity-50" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-[7px] bg-flame-500/12 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-flame-300">{"Who You'd Join"}</p>
          <SplitHeading className="max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.5rem] md:leading-[1.12]">
            {"India's on-ground GTM partner for global startups"}
          </SplitHeading>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {[
              { value: "35+", label: "Years in the India market" },
              { value: "7,000+", label: "Channel partners built & managed" },
              { value: "30,000+", label: "Retail touchpoints established" },
              { value: "200–500%", label: "Revenue growth delivered" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={(i % 4) * 60} className="text-center">
                <div className="text-3xl font-bold tracking-tight text-flame-400 sm:text-4xl">{s.value}</div>
                <p className="mx-auto mt-2 max-w-[12rem] text-xs leading-relaxed text-ink-300">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <NavGrid
        title="Get to know us"
        caption="Cross-links from Careers"
        columns={3}
        items={[
          { label: "Our CEO", href: "/about/ceo", desc: "Joyjeet Bose · 35+ years", icon: "users" },
          { label: "The Company", href: "/about/company", desc: "Who you'd work with", icon: "briefcase" },
          { label: "Contact", href: "/contact", desc: "Reach the team", icon: "mail" },
        ]}
      />

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 mesh opacity-60" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-[7px] bg-flame-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-[7px] bg-flame-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-flame-300">Ready to apply?</p>
          <SplitHeading
            as="h2"
            className="mt-4 text-balance text-3xl font-bold sm:text-4xl md:text-[2.7rem] md:leading-[1.08]"
          >
            One application. Every relevant role.
          </SplitHeading>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-ink-200 sm:text-lg">
            {"Send us your details and we'll match you to the openings you're a fit for. Prefer to talk first? Reach the team directly."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={applyHref()} size="lg" icon="mail">Quick Apply</Button>
            <Button href="/contact" variant="light" size="lg" icon="arrowUpRight">Contact us</Button>
          </div>
          <p className="mt-8 text-sm text-ink-400">{address}</p>
        </div>
      </section>
    </>
  );
}
