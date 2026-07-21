import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SplitHeading } from "@/components/ui/SplitHeading";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { CountUpStat } from "@/components/home/CountUpStat";

export const metadata: Metadata = {
  title: "Our CEO — Joyjeet Bose",
  description:
    "Joyjeet Bose brings 35 years of India market experience — building networks of 7,000+ channel partners, driving 200–500% revenue growth, and leading sales organisations at Tata Teleservices, Bharti, and beyond.",
};

/* Content is verbatim from UPDATE/jbnewgen-about-ceo.html — do not rewrite. */

const heroSubtitle = "35 Years Building India’s Markets. Now Building Your India Entry.";
const heroBody =
  "Joyjeet has spent three and a half decades doing what most India market entry consultants only talk about — building national channel networks from zero, driving revenue growth of 200–500% across multiple organisations, and establishing distribution infrastructure across India's most complex market segments.";

const creds: { value: string; label: string }[] = [
  { value: "35+", label: "Years of India market experience" },
  { value: "7,000+", label: "Channel partners built and managed" },
  { value: "200–500%", label: "Revenue growth delivered" },
  { value: "30,000+", label: "Retail touchpoints established" },
];

const profileP1 =
  "Joyjeet Bose's career began in India's telecommunications sector at a time when the country was in the early stages of its digital revolution. Over the three and a half decades that followed, he built and led commercial organisations that took products from concept to national distribution — navigating India's regulatory complexity, relationship-driven business culture, and extraordinary geographic and demographic diversity at every step.";
const profileQuote =
  "India is not one market. It's 28 states, hundreds of languages, multiple tiers of distribution, and buyers who make decisions in ways that surprise every foreign company that hasn't done the work of understanding them. I've spent 35 years doing that work.";
const profileQuoteAttr = "Joyjeet Bose, Founder & CEO";
const profileRest = [
  "At Tata Teleservices, Joyjeet built and scaled sales organisations operating across multiple Indian states — establishing the channel infrastructure, distributor relationships, and retail networks that gave Tata's telecom products national reach. At Hexacom India Ltd (part of the Airtel group) and Bharti BT Internet Ltd, he led commercial functions through periods of rapid market expansion, building distribution models that balanced Tier 1 city penetration with Tier 2 and Tier 3 market development.",
  "Across these engagements and more, Joyjeet built channel networks totalling 7,000+ partners and 30,000+ retail touchpoints — consistently driving revenue growth of 200% to 500% through structured GTM frameworks, disciplined channel management, and the relationship-building that defines how business actually gets done in India.",
  "He founded JB NewGen Enterprises to make this expertise accessible to global startups — organisations that have extraordinary products and serious India ambitions, but need an on-ground partner who has already done the work of understanding the market they're about to enter.",
];

const career: { icon: IconName; org: string; body: string }[] = [
  {
    icon: "briefcase",
    org: "Tata Teleservices Ltd",
    body: "Built and led multi-state sales organisations and channel networks for one of India's largest telecom groups across the country's most competitive growth period.",
  },
  {
    icon: "network",
    org: "Hexacom India Ltd (Airtel Group)",
    body: "Led commercial functions through rapid national expansion — establishing distributor relationships and retail networks across Tier 1 and Tier 2 markets.",
  },
  {
    icon: "globe",
    org: "Bharti BT Internet Ltd (Mantra Online)",
    body: "Drove distribution and GTM for India's early internet sector, building channel and partner ecosystems during the country's first digital growth wave.",
  },
  {
    icon: "spark",
    org: "JB NewGen Enterprises (Founder)",
    body: "Founded to bring 35 years of India market execution to global startups — providing the on-ground expertise, network, and accountability that transforms India entry from a risk into a growth opportunity.",
  },
];

const expertiseIntro =
  "Built over 35 years of doing — not advising. Each area below reflects a domain where Joyjeet has operated at scale, not a framework he has studied.";
const expertise: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "network",
    title: "Channel & Distribution Architecture",
    body: "Designing and building India's multi-tier channel structures — from national distributor selection to sub-distributor networks to retail touchpoints. Joyjeet has built these from zero to 7,000+ partners across multiple organisations and product categories.",
  },
  {
    icon: "trending",
    title: "GTM Strategy & Revenue Acceleration",
    body: "Building India go-to-market plans that translate global product strengths into India-specific positioning, pricing, and channel strategies. His GTM frameworks have delivered 200–500% revenue growth across multiple sectors.",
  },
  {
    icon: "handshake",
    title: "Partner Ecosystem Development",
    body: "Identifying, onboarding, activating, and retaining channel partners in India's relationship-driven business environment. Understanding not just how to find the right partners, but how to build loyalty and performance over time.",
  },
  {
    icon: "cpu",
    title: "Technology & Telecom Market Dynamics",
    body: "Deep sector knowledge from three decades in India's telecommunications and technology industries — covering product launches, regulatory navigation, competitive positioning, and consumer behaviour in digital-first markets.",
  },
  {
    icon: "users",
    title: "Sales Organisation Building",
    body: "Building India sales teams from the ground up — hiring, training, structuring, and incentivising organisations that can execute at scale across India's geographic and cultural diversity.",
  },
  {
    icon: "target",
    title: "Tier 1 & Tier 2 Market Expansion",
    body: "Understanding not just the metro markets that most foreign companies start with, but the Tier 2 and Tier 3 city dynamics that represent India's most significant long-term growth opportunity for both B2B and B2C businesses.",
  },
];

const bringsHeading =
  "What Joyjeet’s experience means for a global startup entering India";
const bringsIntro =
  "The gap between knowing India and being able to execute in India is vast. Here's what Joyjeet's 35-year track record directly delivers to every engagement.";
const brings: { title: string; body: string }[] = [
  {
    title: "You inherit 35 years of relationships",
    body: "Joyjeet's channel partner network, distributor relationships, and sector contacts are live from Day 1 of your engagement — not something you have to spend 12 months building yourself.",
  },
  {
    title: "You get a founder who has been in the room",
    body: "Joyjeet has built sales organisations, negotiated with distributors, managed channel conflicts, navigated regulatory changes, and driven revenue recovery — in India, for Indian and global companies. He's not advising from theory. He's guiding from experience.",
  },
  {
    title: "You avoid the mistakes that cost others 18 months",
    body: "The most expensive mistakes in India entry are the ones you don't see coming — wrong channel structure, wrong pricing, wrong partner incentives, wrong communication channel. Joyjeet has made and recovered from these mistakes so your company doesn't have to.",
  },
  {
    title: "You get global-standard accountability",
    body: "Joyjeet understands what US and EU founders, boards, and investors expect from an India partner — weekly reporting, clear milestones, honest assessment of what's working and what isn't. He delivers that standard, not a localised version of it.",
  },
];

const ctaBody =
  "The first conversation is free, direct, and honest. Joyjeet will tell you what he sees in your India opportunity, what he thinks the real risks are, and what it would actually take to build something meaningful in the market.";
const ceoAddress = "JB NewGen Enterprises Pvt. Ltd. · Mumbai, India · sales@jbnewgen.com · +91 6362864230";

export default function CeoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-ink-950 text-white">
        <div className="pointer-events-none absolute inset-0 mesh opacity-50" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-[7px] bg-flame-500/12 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-end gap-10 px-5 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1fr_360px] lg:gap-16">
          <div className="pb-16 sm:pb-20">
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
                  <span className="text-white/80" aria-current="page">Our CEO</span>
                </li>
              </ol>
            </nav>

            <span className="inline-flex items-center rounded-[7px] border border-flame-500/30 bg-flame-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-flame-300">
              Founder & CEO — JB NewGen Enterprises
            </span>
            <SplitHeading
              as="h1"
              className="mt-7 text-5xl font-bold tracking-tight sm:text-6xl md:text-[4rem] md:leading-[1.02]"
            >
              Joyjeet Bose
            </SplitHeading>
            <p className="mt-3 text-lg font-medium text-flame-300 sm:text-xl">{heroSubtitle}</p>
            <p className="mt-6 max-w-xl text-pretty leading-relaxed text-ink-200 sm:text-lg">{heroBody}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/quote" size="lg">Book a Call with Joyjeet</Button>
              <Button href="#story" variant="light" size="lg" icon="arrowRight">Read His Story</Button>
            </div>
          </div>

          <div className="relative hidden self-end lg:block">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-2xl ring-1 ring-white/10">
              <Image
                src="/images/clients/ceo.png"
                alt="Joyjeet Bose, Founder & CEO of JB NewGen"
                fill
                sizes="360px"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIAL BAND */}
      <section className="border-y border-ink-100 bg-ink-50/50">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
            {creds.map((c, i) => (
              <Reveal key={c.label} delay={i * 80} className="text-center">
                <dt className="text-4xl font-bold tracking-tight text-flame-600 sm:text-5xl">
                  <CountUpStat value={c.value} delayMs={i * 80} />
                </dt>
                <dd className="mx-auto mt-3 max-w-[15rem] text-sm font-medium text-ink-700">{c.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* PROFILE STORY */}
      <Section id="story" className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="The Story Behind the Expertise"
              title="What 35 years of building India actually looks like"
            />
            <p className="mt-6 text-pretty leading-relaxed text-ink-500">{profileP1}</p>

            <figure className="my-8 rounded-2xl bg-ink-50/70 p-7 ring-1 ring-inset ring-ink-100">
              <Icon name="quote" size={32} className="text-flame-500/70" />
              <blockquote className="mt-3 text-pretty text-lg font-medium italic leading-relaxed text-ink-800">
                {profileQuote}
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink-500">{profileQuoteAttr}</figcaption>
            </figure>

            <div className="space-y-5 text-pretty leading-relaxed text-ink-500">
              {profileRest.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5">Career Highlights</p>
            <div className="space-y-4">
              {career.map((c, i) => (
                <Reveal
                  key={c.org}
                  variant="pop"
                  delay={i * 70}
                  className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-flame-500/10 text-flame-600 ring-1 ring-inset ring-flame-500/15">
                    <Icon name={c.icon} size={20} />
                  </span>
                  <div>
                    <h3 className="font-bold text-ink-900">{c.org}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* AREAS OF EXPERTISE */}
      <Section className="bg-ink-50/50">
        <SectionHeading
          align="left"
          eyebrow="Areas of Expertise"
          title="The specific expertise Joyjeet brings to every India entry engagement"
          intro={expertiseIntro}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e, i) => (
            <Reveal
              key={e.title}
              variant="pop"
              delay={(i % 3) * 70}
              className="flex flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-7"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-flame-500/10 text-flame-600 ring-1 ring-inset ring-flame-500/15">
                <Icon name={e.icon} size={22} />
              </span>
              <h3 className="text-base font-bold text-ink-900">{e.title}</h3>
              <p className="text-sm leading-relaxed text-ink-500">{e.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHAT HE BRINGS */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white sm:py-28">
        <div className="pointer-events-none absolute inset-0 mesh opacity-50" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-[7px] bg-flame-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-flame-300">
            Why It Matters for Your India Entry
          </p>
          <SplitHeading
            as="h2"
            className="mt-4 max-w-3xl text-balance text-3xl font-bold sm:text-4xl md:text-[2.5rem] md:leading-[1.1]"
          >
            {bringsHeading}
          </SplitHeading>
          <p className="mt-5 max-w-xl leading-relaxed text-ink-300">{bringsIntro}</p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {brings.map((b, i) => (
              <Reveal
                key={b.title}
                variant="pop"
                delay={(i % 2) * 80}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-7"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-flame-500/20 text-flame-300 ring-1 ring-inset ring-flame-500/40">
                  <Icon name="check" size={16} />
                </span>
                <h3 className="mt-5 text-base font-bold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{b.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink-50/50 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
          <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-flame-600">Talk to Joyjeet</p>
          <SplitHeading
            as="h2"
            className="mt-4 text-balance text-3xl font-bold text-ink-900 sm:text-4xl md:text-[2.7rem] md:leading-[1.08]"
          >
            Book a direct strategy call with our founder
          </SplitHeading>
          <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-ink-500 sm:text-lg">{ctaBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/quote" size="lg">Book a Call with Joyjeet</Button>
            <Button href="mailto:sales@jbnewgen.com" variant="ghost" size="lg" icon="mail">Email Directly</Button>
          </div>
          <p className="mt-6 text-sm text-ink-500">
            <Link href="/about/company" className="font-medium text-flame-600 hover:underline">
              Read the JB NewGen company story →
            </Link>
          </p>
          <p className="mt-8 text-sm text-ink-400">{ceoAddress}</p>
        </div>
      </section>
    </>
  );
}
