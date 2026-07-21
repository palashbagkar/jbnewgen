import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CountUpStat } from "@/components/home/CountUpStat";

export const metadata: Metadata = {
  title: "The Company",
  description:
    "JB NewGen Enterprises is India's specialist market entry and GTM partner for US, EU, and global startups. Led by Joyjeet Bose with 35 years of India market experience and a network of 7,000+ channel partners.",
};

/* Content is verbatim from UPDATE/jbnewgen-about-company.html — do not rewrite. */

const heroBody =
  "We are not a generic consulting firm. We are the India team you don't have yet — with 35 years of market experience, a live network of 7,000+ channel partners, and a track record of driving 200–500% revenue growth for the organisations we work with.";

const whoTitle =
  "The India expertise that global startups need — and rarely find in one place";
const whoIntro = [
  "JB NewGen Enterprises is a Mumbai-based market entry and GTM consultancy built specifically to help US, EU, and global startups establish, operate, and scale in India. We combine deep India market knowledge with the accountability and reporting standards that global founders and investors expect.",
  "We are not a research firm that hands you a market report. We are not an agency that runs campaigns in isolation. We are an execution partner — the organisation that sits alongside your team from your first conversation about India to your first hundred customers in the market.",
  "India is one of the world's most consequential growth opportunities. It is also one of the most structurally complex markets to enter alone. That complexity — the multi-tier distribution landscape, the regulatory environment, the relationship-driven business culture, the India-specific digital infrastructure — is exactly what we exist to navigate on your behalf.",
];

const stats: { value: string; desc: string }[] = [
  {
    value: "35+",
    desc: "Years of India market experience led by CEO Joyjeet Bose across Tata, Bharti, and enterprise technology sectors",
  },
  {
    value: "7,000+",
    desc: "Channel partners in our active India network across Tier 1, Tier 2, and Tier 3 markets — available to your launch from Day 1",
  },
  {
    value: "30,000+",
    desc: "Retail touchpoints across our distribution ecosystem — built over decades of on-ground market development",
  },
  {
    value: "200–500%",
    desc: "Revenue growth delivered across multiple organisations through our GTM and channel development frameworks",
  },
];

const diffTitle =
  "Four things that separate JB NewGen from every other India consultancy";
const diffIntro =
  "Most India consultancies give you frameworks. We give you outcomes. Here's what that actually means in practice.";
const diffs: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "network",
    title: "We have the network — not just the knowledge",
    body: "Our 7,000+ channel partner network and 200+ distributor relationships are not theoretical. They are live, vetted relationships across India's key metros and Tier 2 cities that we activate for your launch from Day 1. Most consultancies tell you how to find partners. We introduce you to them.",
  },
  {
    icon: "gauge",
    title: "We compress your India timeline from 18 months to 90 days",
    body: "The learning curve for India market entry typically costs foreign companies 12–18 months and significant budget before they establish real traction. Our existing infrastructure — channel network, regulatory knowledge, operational playbooks — eliminates that curve entirely. You start where most companies arrive after a year.",
  },
  {
    icon: "handshake",
    title: "We execute — we don't just advise",
    body: "Our engagement model is built around delivery, not decks. We manage partner onboarding, run activation events, coordinate logistics, brief local staff, and track performance weekly. We act as your India country lead until you're ready to build that capability internally — with full accountability for outcomes, not just recommendations.",
  },
  {
    icon: "globe",
    title: "We speak both languages — global and local",
    body: "We understand what global founders, boards, and investors expect: clarity, weekly reporting, measurable milestones, and financial accountability. And we deliver that in an Indian operational context — bridging the communication and expectation gap that kills most foreign companies' India ambitions before they find traction.",
  },
];

const storyTitle = "Built from 35 years of doing — not advising";
const story = [
  "JB NewGen was founded by Joyjeet Bose after three and a half decades of building sales organisations, channel networks, and distribution ecosystems for some of India's most significant enterprises — including Tata Teleservices, Hexacom India (part of Airtel), and Bharti BT Internet.",
  "Over that career, Joyjeet built and led organisations that took products from zero to national distribution — establishing networks of 7,000+ channel partners and 30,000+ retail touchpoints, driving revenue growth of 200% to 500%, and navigating India's regulatory and market complexity at every scale from startup to large enterprise.",
  "What he saw repeatedly was that global companies entering India were making the same expensive mistakes — not because they lacked ambition or resources, but because they lacked on-ground expertise and a trusted local partner who could operate at the intersection of global standards and Indian market realities.",
  "JB NewGen was built to be that partner. Not a research firm. Not an agency. A genuine execution partner — with the network, the knowledge, and the accountability to help global startups enter India and build something that lasts.",
  "Today, JB NewGen serves global startups across SaaS, fintech, D2C, healthtech, edtech, and manufacturing — providing India market entry strategy, channel development, tech readiness, digital growth, and communication infrastructure from a single, accountable team based in Mumbai.",
];

const network: { value: string; label: string }[] = [
  { value: "7,000+", label: "Channel partners across India" },
  { value: "200+", label: "Active distributor relationships" },
  { value: "30,000+", label: "Retail touchpoints nationwide" },
  { value: "35+", label: "Years of India market expertise" },
  { value: "90 days", label: "Typical time to live India channel" },
];

const services: { num: string; icon: IconName; href: string; title: string; body: string }[] = [
  {
    num: "Service 01",
    icon: "compass",
    href: "/services/business-consultancy",
    title: "India Market Entry & GTM",
    body: "Market sizing, GTM blueprint, channel partner setup, partner activation, and end-to-end launch execution. Your complete India go-to-market — delivered, not just designed.",
  },
  {
    num: "Service 02",
    icon: "cpu",
    href: "/services/tech-readiness",
    title: "India Tech Readiness",
    body: "India-stack integration (UPI, WhatsApp, Aadhaar), CRM setup for India's channel model, cloud compliance under the DPDP Act, and process automation for India operations.",
  },
  {
    num: "Service 03",
    icon: "megaphone",
    href: "/services/digital-marketing",
    title: "India Digital Growth",
    body: "India SEO, YouTube and video marketing, Google Ads optimised for Indian CPCs, WhatsApp marketing, and performance campaigns connected to your global reporting.",
  },
  {
    num: "Service 04",
    icon: "chat",
    href: "/services/cpaas-omnichannel",
    title: "India Customer Communication",
    body: "WhatsApp Business API, DLT-registered SMS and RCS, Hindi and regional language IVR, OTP optimisation, and unified omnichannel dashboards — compliant from day one.",
  },
];

const ceoQuote =
  "India is not a market you figure out from the outside. Every foreign company that has built something meaningful here did it with on-ground partners who understood the culture, the channels, and the complexity. That's what JB NewGen is — the India team you don't have yet, working as if your success is our own.";
const ceoQuoteAttr = "Joyjeet Bose — Founder & CEO, JB NewGen Enterprises";

const bridgeTitle =
  "GTM Bridge — India's marketplace for global startups, local partners, and enterprise buyers";
const bridgeIntro =
  "Beyond consultancy, JB NewGen is building GTM Bridge: a curated marketplace community connecting global startups seeking India entry with vetted Indian channel partners, specialist agencies, and enterprise CIOs and CTOs actively evaluating new technologies.";
const bridgeFeatures: { lead: string; rest: string }[] = [
  { lead: "Global startups", rest: "get matched with the right India partners and enterprise buyers for their category" },
  { lead: "India channel partners", rest: "get access to qualified foreign startups looking for distribution" },
  { lead: "Enterprise CIOs & CTOs", rest: "get curated access to global tech startups solving their category problems" },
  { lead: "Community events", rest: "— virtual and in-person — connecting the India startup ecosystem globally" },
];
const bridgeCardBody =
  "We're onboarding our first cohort of global startups and India partners. Founding members get priority matching, direct introductions from the JB NewGen team, and early access to community events.";

const closingBody =
  "Book a free 45-minute India Entry Strategy call with our team. We'll be direct with you about the opportunity, the complexity, and exactly what it takes to build something real in India.";
const address =
  "JB NewGen Enterprises Pvt. Ltd. · 504 Challenger Tower III, Kandivali (E), Mumbai 400 101 · sales@jbnewgen.com · +91 6362864230";

export default function CompanyPage() {
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
                <Link href="/about" className="transition-colors hover:text-white">About</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <Icon name="chevronDown" size={14} className="-rotate-90 text-white/25" />
                <span className="text-white/80" aria-current="page">The Company</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-[7px] border border-flame-500/30 bg-flame-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-flame-300">
              About JB NewGen Enterprises
            </span>
            <SplitHeading
              as="h1"
              className="mt-7 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-[3.4rem] md:leading-[1.05]"
            >
              {"India’s on-ground partner for "}
              <span className="text-flame-400">global startups entering India</span>
            </SplitHeading>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-ink-200 sm:text-lg">
              {heroBody}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="/quote" size="lg">Book a Free India Entry Call</Button>
              <Button href="#story" variant="light" size="lg" icon="arrowRight">Our Story</Button>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="Who We Are" title={whoTitle} />
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-ink-500">
              {whoIntro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((s, i) => (
              <Reveal key={s.value} variant="pop" delay={(i % 2) * 80} className="card flex flex-col p-6">
                <div className="text-4xl font-bold tracking-tight text-flame-600">
                  <CountUpStat value={s.value} delayMs={(i % 2) * 80} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* WHAT MAKES US DIFFERENT */}
      <Section className="bg-ink-50/50">
        <SectionHeading align="left" eyebrow="What Makes Us Different" title={diffTitle} intro={diffIntro} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {diffs.map((d, i) => (
            <Reveal
              key={d.title}
              variant="pop"
              delay={(i % 2) * 80}
              className="group flex flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-7 transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(8,21,39,0.45)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-flame-500/10 text-flame-600 ring-1 ring-inset ring-flame-500/15">
                <Icon name={d.icon} size={22} />
              </span>
              <h3 className="text-lg font-bold text-ink-900">{d.title}</h3>
              <p className="text-sm leading-relaxed text-ink-500">{d.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* OUR STORY */}
      <Section id="story" className="bg-white">
        <div className="max-w-3xl">
          <SectionHeading align="left" eyebrow="Our Story" title={storyTitle} />
          <div className="mt-6 space-y-5 text-pretty leading-relaxed text-ink-500">
            {story.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 rounded-2xl border border-ink-100 bg-ink-50/60 px-6 py-10 sm:grid-cols-3 lg:grid-cols-5">
          {network.map((n, i) => (
            <Reveal key={n.label} delay={(i % 5) * 60} className="text-center">
              <div className="text-3xl font-bold tracking-tight text-flame-600 sm:text-4xl">
                <CountUpStat value={n.value} delayMs={(i % 5) * 60} />
              </div>
              <p className="mx-auto mt-2 max-w-[12rem] text-xs leading-relaxed text-ink-500">{n.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHAT WE DO */}
      <Section className="bg-ink-50/50">
        <SectionHeading
          align="left"
          eyebrow="What We Do"
          title="Four integrated services — one India entry outcome"
          intro="Every service we offer is designed to support one goal: getting your company to market in India faster, more compliantly, and with a stronger foundation than you could build alone."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="pop" delay={(i % 2) * 80}>
              <Link
                href={s.href}
                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-ink-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-28px_rgba(8,21,39,0.45)]"
              >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-flame-500 transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-flame-500/10 text-flame-600 ring-1 ring-inset ring-flame-500/15">
                    <Icon name={s.icon} size={20} />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-flame-600">{s.num}</span>
                </div>
                <h3 className="text-lg font-bold text-ink-900">{s.title}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{s.body}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-flame-600">
                  Learn more
                  <Icon name="arrowRight" size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CEO QUOTE */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 mesh opacity-50" />
        <div className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-[7px] bg-flame-500/15 blur-3xl" />
        <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Icon name="quote" size={48} className="mx-auto text-flame-400/70" />
          <blockquote className="mt-6 text-balance text-xl font-medium leading-relaxed sm:text-2xl md:text-[1.7rem]">
            {ceoQuote}
          </blockquote>
          <div className="mt-8 text-sm font-semibold uppercase tracking-[0.08em] text-flame-300">
            {ceoQuoteAttr}
          </div>
          <div className="mt-8">
            <Button href="/about/ceo" variant="light" icon="arrowRight">Meet Joyjeet Bose</Button>
          </div>
        </Reveal>
      </section>

      {/* GTM BRIDGE */}
      <Section className="bg-ink-50/50">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="Coming Soon" title={bridgeTitle} intro={bridgeIntro} />
            <ul className="mt-8 space-y-4">
              {bridgeFeatures.map((f) => (
                <li key={f.lead} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-flame-500" />
                  <p className="text-pretty leading-relaxed text-ink-600">
                    <span className="font-semibold text-ink-900">{f.lead}</span> {f.rest}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <Reveal variant="pop" className="relative overflow-hidden rounded-3xl bg-ink-950 p-8 text-white sm:p-10">
            <div className="pointer-events-none absolute inset-0 mesh opacity-40" />
            <div className="relative">
              <h3 className="text-xl font-bold">Join the GTM Bridge founding community</h3>
              <p className="mt-3 leading-relaxed text-ink-300">{bridgeCardBody}</p>
              <div className="mt-7">
                <Button href="mailto:sales@jbnewgen.com?subject=GTM Bridge - Founding Member Interest">
                  Express Interest
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 mesh opacity-60" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-[7px] bg-flame-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-[7px] bg-flame-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-flame-300">Work With Us</p>
          <SplitHeading
            as="h2"
            className="mt-4 text-balance text-3xl font-bold sm:text-4xl md:text-[2.7rem] md:leading-[1.08]"
          >
            Ready to make India your next market?
          </SplitHeading>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-ink-200 sm:text-lg">{closingBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/quote" size="lg">Book Your Free Strategy Call</Button>
            <Button href="mailto:sales@jbnewgen.com" variant="light" size="lg" icon="mail">Email Us Directly</Button>
          </div>
          <p className="mt-8 text-sm text-ink-400">{address}</p>
        </div>
      </section>
    </>
  );
}
