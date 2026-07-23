/**
 * Optimized information architecture for JBNewGen.
 * This is the single source of truth for every route, the navigation tree,
 * breadcrumbs, the footer sitemap, and site search. The service cluster also
 * carries the full page content for every pillar and sub-service.
 */

export const site = {
  name: "JBNewGen",
  legalName: "JB NewGen Enterprises Private Limited",
  tagline: "Empowering Digital Future",
  domain: "jbnewgen.com",
  phone: "+91 6362864230",
  phoneHref: "tel:+916362864230",
  emails: { sales: "sales@jbnewgen.com", support: "support@jbnewgen.com" },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jbnewgen", icon: "linkedin" as const },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61566375428662", icon: "facebook" as const },
    { label: "Instagram", href: "https://www.instagram.com/jb_newgen/", icon: "instagram" as const },
  ],
} as const;

export type Crumb = { label: string; href: string };
export type NavLink = { label: string; href: string; desc?: string };

/* -------------------------------------------------------------------------- */
/* About cluster                                                              */
/* -------------------------------------------------------------------------- */

export const aboutChildren: NavLink[] = [
  { label: "The Company", href: "/about/company", desc: "JB NewGen Enterprises" },
  { label: "Our CEO", href: "/about/ceo", desc: "Joyjeet Bose · 35+ years" },
];

/* -------------------------------------------------------------------------- */
/* Services cluster - 4 pillars, each with sub-services                        */
/* -------------------------------------------------------------------------- */

export type ServiceSubsection = { title: string; body: string };
export type Service = {
  slug: string;
  title: string;
  /** One-line summary shown in the pillar service list and the detail header. */
  summary: string;
  /** Focus-area chips. */
  tags: string[];
  /** Emphasised opening sentence on the detail page. */
  lead?: string;
  /** Detail-page body paragraphs. */
  body: string[];
  /** Optional nested cards (e.g. Expert Advisory functional specialists). */
  subsections?: ServiceSubsection[];
};

export type ServiceHero = {
  badge: string;
  lead: string;
  accent: string;
  tail: string;
  sub: string;
};
export type ChallengeItem = { icon: string; title: string; body: string };
export type ChallengeBlock = { label: string; title: string; intro?: string; items: ChallengeItem[] };
export type WhyItem = { title: string; body: string };
export type WhyBlock = { label: string; title: string; intro?: string; items: WhyItem[] };
export type FeatureItem = { icon?: string; tag?: string; title: string; body: string };
export type FeatureBlock = {
  label: string;
  title: string;
  intro?: string;
  tone?: "cream" | "white";
  items: FeatureItem[];
};
export type StepItem = { title: string; body: string };
export type StepBlock = { label: string; title: string; intro?: string; items: StepItem[] };
export type CtaBlock = { label: string; title: string; body: string };

export type Pillar = {
  slug: string;
  title: string;
  short: string;
  blurb: string;
  /** One-paragraph intro shown beside the pillar visual on the homepage. */
  subtext: string;
  icon: string;
  hero: ServiceHero;
  challenge: ChallengeBlock;
  servicesIntro: { label: string; title: string; intro: string };
  why: WhyBlock;
  /** When false, feature blocks render before the "why" block. Defaults true. */
  whyBeforeFeatures?: boolean;
  features?: FeatureBlock[];
  steps?: StepBlock;
  cta: CtaBlock;
  services: Service[];
};

export const pillars: Pillar[] = [
  /* ======================= BUSINESS CONSULTANCY ======================= */
  {
    slug: "business-consultancy",
    title: "Business Consultancy - Your India GTM Partner",
    short: "Business Consultancy",
    blurb: "From strategy to on-ground execution.",
    subtext:
      "We help US, EU, and global startups go from “we want to enter India” to “we are operating in India” - in months, not years. On-ground expertise. Real networks. End-to-end accountability.",
    icon: "compass",
    hero: {
      badge: "India Market Entry Specialists",
      lead: "Your",
      accent: "India GTM partner",
      tail: " - from strategy to on-ground execution",
      sub: "We help US, EU, and global startups go from “we want to enter India” to “we are operating in India” - in months, not years. On-ground expertise. Real networks. End-to-end accountability.",
    },
    challenge: {
      label: "The India Entry Challenge",
      title:
        "India is one of the world's biggest opportunities. It's also one of the hardest markets to enter alone.",
      intro:
        "Most global startups underestimate India's complexity - and overestimate how much their existing playbook will transfer. Here's what gets in the way:",
      items: [
        {
          icon: "mapPin",
          title: "No local distribution network",
          body: "Building a channel from scratch takes 12–18 months without the right introductions. The wrong partners cost you far more.",
        },
        {
          icon: "folder",
          title: "Regulatory complexity",
          body: "From GST compliance to import licensing to data localisation, India's regulatory landscape is real and non-negotiable.",
        },
        {
          icon: "handshake",
          title: "Relationship-driven culture",
          body: "Indian business runs on trust and personal relationships. Cold outreach doesn't open the doors that a warm introduction does.",
        },
        {
          icon: "bulb",
          title: "Pricing & positioning mismatch",
          body: "Your global pricing and messaging rarely translate directly. India requires deliberate localisation across every customer touchpoint.",
        },
      ],
    },
    servicesIntro: {
      label: "Our Services",
      title: "Everything you need to launch, operate, and scale in India",
      intro:
        "We don't just advise - we work alongside your team, acting as your extended India office until you're ready to stand independently. Every service is built around one goal: reducing your time to market and increasing your probability of success.",
    },
    why: {
      label: "Why JB NewGen",
      title: "We are not a consulting firm. We are your India team.",
      intro:
        "The difference between advice and outcomes is execution. We show up as partners, not report-writers.",
      items: [
        {
          title: "On-ground presence",
          body: "Based in Mumbai, with active networks across metros and Tier 2 cities. We know the people who matter in your category.",
        },
        {
          title: "End-to-end accountability",
          body: "We don't hand over a strategy deck and disappear. We stay in the room through execution, iteration, and early traction.",
        },
        {
          title: "Speed to market",
          body: "Our existing partner network and regulatory familiarity cuts your go-live timeline from 18 months to 100–180 days.",
        },
        {
          title: "Global-local fluency",
          body: "We understand what global founders expect - clarity, accountability, measurable results - and we deliver it in an Indian context.",
        },
      ],
    },
    features: [
      {
        label: "Industries We Serve",
        title: "Sector experience across the categories that matter most",
        intro:
          "India's market dynamics vary significantly by sector. We bring specialised GTM experience across the verticals where global startups are most actively expanding.",
        tone: "cream",
        items: [
          {
            icon: "cpu",
            title: "SaaS & Enterprise Tech",
            body: "Channel partner setup, India-pricing, and enterprise sales motion.",
          },
          {
            icon: "target",
            title: "D2C & Consumer Products",
            body: "Retail distribution, e-commerce strategy, and localised brand positioning.",
          },
          {
            icon: "bulb",
            title: "Edtech & Learning",
            body: "B2C growth in India's learner market, plus B2B institutional partnerships.",
          },
          {
            icon: "creditCard",
            title: "Fintech & Payments",
            body: "India-stack integration (UPI, BBPS), NBFC partnerships, RBI compliance.",
          },
        ],
      },
    ],
    steps: {
      label: "How It Works",
      title: "From first call to first rupee of revenue",
      intro:
        "A structured, milestone-driven process - so you always know where you are and what comes next.",
      items: [
        {
          title: "Discovery & India Readiness Assessment",
          body: "We start with a structured conversation about your product, your existing customers, and your India ambitions. We assess product-market fit for India, flag any regulatory or operational considerations, and identify the fastest viable path to market. No charge. No commitment. Just clarity.",
        },
        {
          title: "GTM Blueprint & Market Mapping",
          body: "Over 6–8 weeks, we deliver a detailed India market entry plan: target segments, geographic prioritisation, competitive landscape, pricing and positioning recommendations, and a channel architecture tailored to your category. You leave with a document you can actually act on - not 80 slides of frameworks.",
        },
        {
          title: "Partner Identification & Onboarding",
          body: "We activate our network to surface, vet, and introduce the right distribution and channel partners. We manage the commercial conversations, negotiate terms, and build the agreements - so you start with partners who are committed and qualified.",
        },
        {
          title: "Launch Execution & On-Ground Support",
          body: "We manage your India launch operationally - coordinating logistics, training partners, running activation events, and tracking performance weekly. Think of us as your India country manager, without the cost of a full-time hire before you are ready.",
        },
        {
          title: "Scale & Transition",
          body: "Once traction is established, we help you build your own internal India team, transfer institutional knowledge, and create the systems that let the business run independently. We stay on as advisors for as long as you need us.",
        },
      ],
    },
    cta: {
      label: "Get Started",
      title: "Ready to make India your next growth market?",
      body: "Book a free 45-minute India Entry Strategy Call. We'll map out the opportunities, flag the real risks, and tell you honestly what it takes - with no obligation to proceed.",
    },
    services: [
      {
        slug: "go-to-market",
        title: "Go-to-Market Strategy",
        summary:
          "Before you spend a dollar on India, you need to know exactly where to play and how to win.",
        lead: "Entering India isn't just about launching - it's about knowing where to play and how to win.",
        body: [
          "We help global startups design and execute a go-to-market strategy tailored for India's diverse and fast-evolving landscape. From market sizing and segment prioritisation to competitive positioning and customer insights, we build a clear, actionable roadmap for your launch.",
          "Our approach goes beyond research. We define pricing strategies for India's multi-tier market, craft positioning that resonates with local buyers, and create a phased rollout plan - identifying which cities, segments, and channels to prioritise for maximum early traction.",
          "With a strong focus on execution, we help you reduce trial-and-error, accelerate market entry, and achieve meaningful growth milestones in your first 12–18 months.",
        ],
        tags: [
          "Market sizing",
          "Competitive mapping",
          "India pricing strategy",
          "Launch sequencing",
          "Segment analysis",
        ],
      },
      {
        slug: "channel-distribution",
        title: "Channel & Distribution Network",
        summary:
          "Distribution is the single most common reason global startups fail in India - either they can't find the right partners, or they onboard the wrong ones.",
        lead: "For global startups, distribution is often the biggest barrier to success in India - not because of product-market fit, but because of the wrong channel strategy or partner selection.",
        body: [
          "We help you build a high-performing distribution network from day one. Leveraging our on-ground presence across Tier 1 and Tier 2 markets, we identify, vet, and onboard the right distributors, resellers, and channel partners aligned with your product, category, and growth goals.",
          "Our support goes beyond introductions. We manage partner due diligence, commercial structuring, and the design of scalable multi-tier distribution models - ensuring clarity in margins, roles, and incentives across the value chain.",
          "With a strong focus on execution, we help you avoid costly missteps, accelerate market penetration, and establish a channel ecosystem that consistently delivers revenue and reach.",
        ],
        tags: [
          "Distributor identification",
          "Partner vetting",
          "Onboarding",
          "Tier 1 & 2 cities",
          "Channel architecture",
        ],
      },
      {
        slug: "process-policies",
        title: "Process & Policies – for ready Operations",
        summary:
          "Operating in India requires policies and processes built specifically for its regulatory environment and business culture.",
        lead: "Expanding into India requires more than strategy - it demands operations built for local realities.",
        body: [
          "We help global startups design and implement India-ready processes and policies that align with the country's regulatory environment, commercial practices, and business culture. From partner agreements and pricing structures to margin frameworks and returns policies, we ensure your operational model is clear, compliant, and scalable from day one.",
          "Our team supports you in navigating key regulatory requirements - such as GST-compliant invoicing, sector-specific guidelines (including FSSAI for consumer products), and IT Act considerations for digital and SaaS businesses - so you can operate with confidence and avoid costly missteps.",
          "Beyond compliance, we focus on efficiency: by standardising workflows and optimising internal processes, we help you reduce friction, improve partner and sales team alignment, and build a strong operational foundation that supports sustainable growth in India.",
        ],
        tags: [
          "Partner agreements",
          "Pricing & margin design",
          "Compliance frameworks",
          "Process documentation",
        ],
      },
      {
        slug: "expert-advisory",
        title: "Expert Advisory – Functional Specialists for India",
        summary:
          "Senior, India-experienced functional expertise across the functions that make or break day-to-day performance - without building each capability in-house.",
        lead: "Strategy gets you into India. Execution is what determines whether you succeed once you are there.",
        body: [
          "As your India operations mature, you need more than a GTM plan - you need specialists who can step in across the specific functions that make-or-break day-to-day performance. We have built a network of subject matter expert advisors precisely for this, so you get senior, India-experienced functional expertise without the time and risk of building each capability in-house.",
          "Each advisor works as an extension of your team - engaged as needed, scaled to your stage, and coordinated through JB NewGen so you have one point of accountability across every function.",
        ],
        subsections: [
          {
            title: "Customer Service & Customer Experience",
            body: "Our CX advisors design support frameworks, SLAs, and escalation structures suited to Indian customer expectations, language preferences, and communication channels - ensuring your customer experience builds trust rather than friction.",
          },
          {
            title: "Brand & Marketing",
            body: "Our brand and marketing advisors shape positioning, messaging, and go-to-market communication calibrated to Indian buyers and stakeholders, so your brand lands the way it's intended to - not the way it happened to translate.",
          },
          {
            title: "Network Design, Operations & Implementation",
            body: "Our network specialists plan and execute the physical and technical infrastructure your India business runs on - distribution footprint, connectivity architecture, and operational rollout across cities and regions.",
          },
          {
            title: "IT & Process Automation",
            body: "Our automation specialists identify manual bottlenecks across your India operations and implement the right tools and workflows - letting your team scale output without scaling headcount.",
          },
          {
            title: "Bid Process & Management",
            body: "Our bid advisors help you identify, respond to, and win government, enterprise, and tender-based opportunities - a significant and frequently underestimated route to market for global companies in India.",
          },
          {
            title: "HR Process",
            body: "Our HR advisors design recruitment, onboarding, compensation structuring, and performance management processes suited to Indian employment norms and talent expectations - helping you build and retain the right India team from your very first hire.",
          },
          {
            title: "Admin Services",
            body: "Our admin team handles the operational groundwork that keeps your India entity running - office setup, vendor management, and day-to-day administrative support - so your leadership stays focused on growth, not logistics.",
          },
          {
            title: "Legal & Compliance",
            body: "Our legal and compliance advisors guide you through entity structuring, contracts, labour law, and the ongoing regulatory filings that keep your India operations audit-ready at every stage.",
          },
        ],
        tags: [
          "Customer experience design",
          "Brand & marketing advisory",
          "Network design & implementation",
          "IT & process automation",
          "Bid process management",
          "HR processes",
          "Admin services",
          "Legal & compliance",
        ],
      },
      {
        slug: "partner-engagement",
        title: "Partner Engagement",
        summary:
          "In India, relationships aren't built over email - they're built in rooms.",
        lead: "In India, strong partner relationships are a key driver of sustained revenue - not just a support function.",
        body: [
          "We help global startups design and execute structured partner engagement programs that build trust, alignment, and long-term commitment across your channel ecosystem. Our approach combines on-ground engagement with scalable digital initiatives to ensure partners stay informed, enabled, and motivated.",
          "From city-level roadshows and partner meets to product workshops, training sessions, and ongoing digital engagement through webinars and enablement modules, we create consistent touchpoints that strengthen relationships and improve partner performance.",
          "The result is a more engaged, better-informed partner network - one that actively promotes your brand, drives sales, and supports your long-term growth in the Indian market.",
        ],
        tags: ["Roadshows", "Partner events", "Webinars & training", "Loyalty programmes"],
      },
      {
        slug: "end-to-end-execution",
        title: "End to End Execution",
        summary:
          "Strategy without execution is just a document - we sit alongside your team and actually drive your India launch.",
        lead: "A strong strategy only delivers results when it's executed with precision.",
        body: [
          "We work alongside global startups to plan and drive their India launch end-to-end, translating strategy into coordinated, on-ground execution. From vendor selection and partner coordination to local hiring, agency management, and operational setup, we ensure every aspect of your launch is aligned and delivered on time.",
          "Our team acts as your extended India operations arm, managing day-to-day execution while tracking progress against defined go-to-market milestones. We bring structure, visibility, and accountability to the process - so you can focus on core business priorities while we handle local complexity.",
          "The result is a faster, more predictable launch - without the overhead of building a full in-country team from day one.",
        ],
        tags: [
          "On-ground management",
          "Local hiring support",
          "Vendor coordination",
          "Milestone tracking",
        ],
      },
      {
        slug: "training",
        title: "Training – Sales & Leadership",
        summary:
          "Your global sales playbook needs translation - not just linguistically, but culturally.",
        lead: "Expanding into India requires more than replicating your global sales playbook - it requires adapting it to how local buyers think, evaluate, and decide.",
        body: [
          "We help global startups equip their teams and channel partners with the skills, context, and confidence to sell effectively in the Indian market. Our training programs are tailored to your product, value proposition, and target segments, ensuring every interaction is aligned with local buyer expectations.",
          "From sales messaging and objection handling to deal progression and negotiation dynamics, we adapt your sales approach to reflect India-specific buying behaviour. We also work with leadership teams to build alignment, improve decision-making, and create a performance-driven sales culture from the ground up.",
          "The result is a team that's not just trained, but fully prepared to engage customers, build trust, and close deals from day one.",
        ],
        tags: [
          "Sales training",
          "India-adapted playbooks",
          "Leadership development",
          "Channel sales coaching",
        ],
      },
    ],
  },

  /* ======================= TECH READINESS ======================= */
  {
    slug: "tech-readiness",
    title: "Tech Readiness Services",
    short: "Tech Readiness",
    blurb: "Startup-ready digital infrastructure.",
    subtext:
      "Your product works perfectly in the US or Europe. India will test it differently. India is a mobile-first, WhatsApp-native, UPI-powered market - and your payment stack, CRM, data infrastructure, and compliance posture all need to be assessed and often adapted before you go live. We handle that India tech readiness layer so your launch isn’t derailed by avoidable integration failures.",
    icon: "cpu",
    hero: {
      badge: "India Tech Readiness",
      lead: "Getting your product & operations",
      accent: "India-ready",
      tail: "",
      sub: "Your product works perfectly in the US or Europe - India will test it differently. We handle the India tech readiness layer so your launch isn't derailed by integration failures, compliance gaps, or infrastructure mismatches you couldn't have seen from outside the market.",
    },
    challenge: {
      label: "The India Tech Challenge",
      title: "What global startups consistently get wrong about India's tech environment",
      intro:
        "India's digital infrastructure is not a smaller, slower version of the West. It is a parallel ecosystem with its own payment rails, identity systems, communication platforms, regulatory mandates, and device landscape - and most global startups discover this after launch, which is exactly the wrong time.",
      items: [
        {
          icon: "creditCard",
          title: "Your payment stack won't work as-is",
          body: "Stripe, PayPal, and Western-native gateways have limited reach in India. UPI processes over 10 billion transactions a month. If you're not integrated with India's payment rails, you're invisible to a huge segment of buyers.",
        },
        {
          icon: "shield",
          title: "Data localisation is a legal requirement",
          body: "India's DPDP Act and sector-specific RBI, IRDAI, and SEBI regulations require certain data categories to be stored within India. Launching without addressing this is a compliance risk from day one.",
        },
        {
          icon: "cpu",
          title: "Device and network fragmentation is real",
          body: "India's users span flagship smartphones to entry-level Android devices. Products not optimised for this range will underperform and churn.",
        },
        {
          icon: "network",
          title: "Your CRM is configured for the wrong sales motion",
          body: "Indian B2B sales runs through distributors, resellers, and multi-tier channels - not just direct sales. A CRM built for a direct sales motion will fail to track or manage India's channel-driven pipeline.",
        },
      ],
    },
    servicesIntro: {
      label: "Our Services",
      title: "Focused India tech readiness services - nothing generic",
      intro:
        "We don't offer boilerplate digital transformation programmes. Every engagement is scoped to the specific India entry context of your product, your sector, and your go-live timeline.",
    },
    why: {
      label: "Why JB NewGen",
      title: "India tech expertise - not generic digital transformation",
      intro:
        "Most digital transformation firms will give you a framework. We give you an India-specific implementation.",
      items: [
        {
          title: "India-first, not India-adapted",
          body: "We don't adapt Western frameworks for India. We start from India's actual infrastructure, regulatory environment, and user behaviour - then build toward your product.",
        },
        {
          title: "Regulatory knowledge built in",
          body: "Our assessments cover the DPDP Act, RBI guidelines, sector-specific mandates, and DLT registration requirements - not as an afterthought, but as a core deliverable.",
        },
        {
          title: "Cross-functional delivery",
          body: "Tech readiness touches product, legal, ops, and sales. We coordinate across all of them, so nothing falls through the gap between your CTO and your India ops lead.",
        },
        {
          title: "Ongoing support",
          body: "We don't disappear after delivery. As India's regulatory environment evolves and your product scales, we stay on as your India tech advisory resource.",
        },
      ],
    },
    features: [
      {
        label: "Who This Is For",
        title: "Built for global startups at every stage of India readiness",
        tone: "cream",
        items: [
          {
            tag: "Pre-launch",
            title: "Planning entry in the next 6 months",
            body: "You want to know what you need to fix before you go live. Start with the Tech Stack Assessment.",
          },
          {
            tag: "At launch",
            title: "Going live in India now",
            body: "You need India-stack integrations, compliant cloud infrastructure, and a CRM configured for Indian channel sales. We deliver in parallel with your GTM motion.",
          },
          {
            tag: "Post-launch",
            title: "Already operating, hitting friction",
            body: "Payment failures, compliance questions, CRM blind spots, or HQ visibility gaps. We diagnose and fix.",
          },
        ],
      },
    ],
    cta: {
      label: "Get Started",
      title: "Is your product ready for India?",
      body: "Book a free 45-minute India Tech Readiness call. We'll tell you honestly what needs to change before you launch - and what can wait.",
    },
    services: [
      {
        slug: "tech-stack-assessment",
        title: "Tech Stack Assessment & Integration",
        summary:
          "No guesswork, no costly rework - a thorough assessment and integration roadmap that makes your technology work seamlessly in the Indian environment.",
        lead: "Before committing budget to India, you need to know what works as-is and what needs to change.",
        body: [
          "We audit your existing product and operational systems against India's infrastructure realities - network conditions, device fragmentation, payment rails, data localisation requirements, and regulatory mandates across your sector. You receive a clear readiness report with a prioritised action list: what to fix before launch, what to fix in the first 90 days, and what can wait. This is the foundation every other engagement builds on.",
          "India runs on its own digital infrastructure - UPI for payments, Aadhaar for identity verification, BBPS for bill payments, WhatsApp for commerce and support, and India Stack APIs for government-linked services. If your product doesn't connect natively to these, you are operating at a structural disadvantage against local competitors who do. We identify which India-stack components are relevant to your product and category, manage the technical integration, and test across the device and network range your Indian customers will actually use.",
          "The output is a product that feels native to how India transacts, communicates, and identifies itself - not a foreign product bolted into an Indian market.",
        ],
        tags: [
          "Payment rail audit",
          "Compliance gap analysis",
          "Device & network testing",
          "Regulatory readiness",
          "Prioritised action plan",
          "UPI & payment gateway integration",
          "WhatsApp Business API",
          "Aadhaar & eKYC",
          "IndiaStack API connectivity",
        ],
      },
      {
        slug: "cloud-hosting-data",
        title: "Cloud, Hosting & Data Solutions",
        summary:
          "India's data localisation laws are not optional - we architect your cloud and hosting to be compliant, cost-efficient, and ready for Indian enterprise scrutiny from Day 1.",
        lead: "Running your India operations on the right infrastructure is not just a technical decision - it is a commercial and legal one.",
        body: [
          "We provide end-to-end cloud and hosting services to get your India operations running on the right foundation - from initial setup and migration to ongoing management across AWS, Azure, and GCP, all of which maintain dedicated India regions. Whether you need a managed cloud environment, hosted infrastructure for your India instance, or guidance on the most cost-effective hosting architecture for your category and scale, we handle it.",
          "Beyond infrastructure, India's data protection landscape is evolving rapidly. The Digital Personal Data Protection (DPDP) Act, combined with sector-specific mandates from the RBI (fintech and payments), IRDAI (insurance), SEBI (financial services), and MeitY (SaaS platforms), means many global startups face mandatory data localisation, consent framework requirements, and breach notification obligations before they can legally onboard Indian customers.",
          "We assess your specific compliance exposure based on your product category and customer type, guide your cloud architecture decisions - AWS, Azure, and GCP each have India regions with different compliance characteristics - and build the documentation and consent frameworks that regulators and enterprise customers in India will ask for. This is not optional. It is a legal, infrastructural, and operational prerequisite for any serious India market entry.",
        ],
        tags: [
          "Cloud & hosting services",
          "DPDP Act compliance",
          "RBI / IRDAI / SEBI requirements",
          "India cloud architecture",
          "Data localisation",
          "Consent framework design",
        ],
      },
      {
        slug: "telecom-connectivity",
        title: "Telecom & Connectivity Solutions",
        summary:
          "Connected across every city, every office, every device - enterprise telecom and connectivity sourced, negotiated, and managed across India's top licensed operators.",
        lead: "Reliable, compliant, and cost-effective connectivity is the backbone of any India operation - and the Indian telecom landscape is unlike any other market in the world.",
        body: [
          "We help global startups navigate and procure the full spectrum of enterprise telecom and connectivity solutions in India, through our established relationships with all major licensed operators - leased lines and MPLS circuits for your India office, SIP trunking and cloud PBX for your voice infrastructure, SD-WAN for multi-site connectivity across Indian cities, IoT and M2M SIM solutions for connected products, toll-free and virtual numbers for customer-facing operations, and enterprise broadband and last-mile connectivity in Tier 1 and Tier 2 cities. We source, negotiate, and manage it on your behalf.",
          "Beyond procurement, we understand the regulatory layer that trips up most global companies. Enterprise telecom services in India require OSP (Other Service Provider) registrations for contact centres, DOT licensing compliance for certain VoIP and data services, and specific interconnect agreements for international traffic. We handle this compliance groundwork alongside your connectivity setup so nothing delays your go-live.",
          "We match your specific operational footprint to the right operator, the right technology, and the right commercial structure - so your India team is connected and compliant from Day 1.",
        ],
        tags: [
          "Fixed line & data connectivity",
          "SD-WAN & multi-site networking",
          "Regulatory & licensing compliance",
          "Network security & managed services",
        ],
      },
      {
        slug: "cyber-security",
        title: "Cyber Security Product & Solutions",
        summary:
          "Protect your India operations end to end - cybersecurity products, VAPT, compliance readiness, and managed security services built for India's regulatory and threat landscape.",
        lead: "Entering India is not just a market opportunity - it is a security responsibility.",
        body: [
          "The moment your product, data, and team have an India presence, your attack surface expands. Indian enterprises, regulators, and large channel partners increasingly demand demonstrable cybersecurity posture as a condition of doing business - and global startups are frequently caught underprepared.",
          "We help global technology companies build the right cybersecurity foundation for their India operations - from selecting and deploying the right security products to ensuring your India environment meets the compliance and audit requirements that Indian enterprise customers and regulators will ask for. Whether you're setting up your first India office, onboarding Indian enterprise clients with stringent vendor security assessments, or building a channel through system integrators who carry specific security certifications, we ensure your security architecture is India-ready before it becomes an obstacle to growth.",
          "We work with leading global and India-specific cybersecurity vendors across every category, and our established relationships with the country's top security system integrators and MSSPs mean you get the right products deployed and managed at the right commercial terms - without building that vendor ecosystem from scratch yourself.",
        ],
        tags: [
          "Endpoint detection & response",
          "Identity & access management",
          "Email & collaboration security",
          "Compliance & audit readiness",
          "Data loss prevention (DLP)",
        ],
      },
      {
        slug: "process-automation",
        title: "Process Automation for Operations",
        summary:
          "Faster, leaner, error-free - process automation that eliminates operational bottlenecks and frees your India team to focus on growth, not administration.",
        lead: "We identify what to automate first, so your India operations scale without scaling your headcount.",
        body: [
          "As your India operation scales from 0 to 100 channel partners and 1,000 customers, manual processes that worked at the start become the biggest bottleneck to growth. We implement automation for the operational workflows that matter most in an India context: partner onboarding and KYC, GST-compliant invoicing and reconciliation, distributor order management, customer support routing across WhatsApp and email, and performance reporting for your channel.",
          "We also set up real-time dashboards that give your global headquarters visibility into India pipeline, revenue, and partner performance - because your board will ask, and the answer needs to be instant, not a two-day export from a spreadsheet.",
        ],
        tags: [
          "Partner onboarding automation",
          "GST-compliant invoicing",
          "Distributor order management",
          "Support routing",
          "HQ performance dashboards",
        ],
      },
      {
        slug: "crm-sales-ops",
        title: "CRM & Sales Operations Setup",
        summary:
          "Pipeline clarity from Day 1 - CRM configuration, sales process design, and operations setup built around how B2B sales actually works in India.",
        lead: "Your sales team in India - whether internal hires or channel partners - needs a CRM configured for India's multi-tier sales motion.",
        body: [
          "Most global CRM deployments fail in India because they're set up for direct B2B sales: one salesperson, one prospect, one pipeline. India's channel-driven model requires tracking relationships across distributors, sub-distributors, resellers, and end customers simultaneously, with visibility at every tier.",
          "We implement and configure CRM systems built for this structure - with partner pipeline tracking, distributor performance dashboards, lead routing for multi-city coverage, and reporting formats that give your global HQ the visibility they need without overwhelming your India team.",
        ],
        tags: [
          "Channel pipeline configuration",
          "Distributor tracking",
          "Multi-city lead routing",
          "Partner dashboards",
          "HQ reporting integration",
        ],
      },
    ],
  },

  /* ======================= DIGITAL MARKETING ======================= */
  {
    slug: "digital-marketing",
    title: "Building Visibility & Demand in India's Digital Market",
    short: "Visibility & Demand",
    blurb: "Amplify your brand and pipeline.",
    subtext:
      "India’s digital audience is 900 million strong - and they don’t behave like your existing customers. They discover brands on YouTube before Google. They transact on WhatsApp before your website. They trust regional-language content more than English. Getting India digital marketing right means understanding these differences and building campaigns that work with them, not against them.",
    icon: "megaphone",
    hero: {
      badge: "India Digital Growth",
      lead: "Building",
      accent: "visibility & demand",
      tail: " in India's digital market",
      sub: "India's digital audience is 900 million strong - and they don't behave like your existing customers. We build and manage your India digital presence from the ground up, so your brand is findable, credible, and converting before your sales team makes its first call.",
    },
    challenge: {
      label: "Why India's Digital Landscape Is Different",
      title: "What every global startup gets wrong about digital marketing in India",
      intro:
        "Your existing playbook is almost certainly optimised for Western audiences. Running the same campaigns, content, and channel mix in India delivers a fraction of the results - not because the channels don't work, but because the behaviour is different. Here's what changes:",
      items: [
        {
          icon: "trending",
          title: "YouTube, not Google, is where discovery happens",
          body: "For high-consideration B2B and B2C decisions in India, YouTube is the primary research channel - not search. Indian buyers watch product explainers, comparison videos, and founder interviews before they visit a website.",
        },
        {
          icon: "chat",
          title: "WhatsApp is a marketing channel",
          body: "500+ million Indian users treat WhatsApp as their primary inbox. Brands that communicate through WhatsApp - with updates, offers, and content - consistently outperform those that rely on email alone.",
        },
        {
          icon: "globe",
          title: "Language is a competitive advantage",
          body: "70% of India's internet users are more comfortable in a regional language than in English. Hindi, Tamil, Telugu, Kannada, and Bengali content significantly outperform English-only campaigns in Tier 2 and Tier 3 cities.",
        },
        {
          icon: "gauge",
          title: "Indian CPCs are not Western CPCs",
          body: "Google Ads CPCs in India average 70–85% lower than US rates - but only when campaigns are structured for Indian search intent, bidding behaviour, and device type. Poorly structured campaigns burn budget just as fast.",
        },
      ],
    },
    servicesIntro: {
      label: "Our Services",
      title: "Six India digital growth services built around how India actually behaves online",
      intro:
        "Every service is designed with India's specific platform dynamics, language landscape, and buyer behaviour in mind. We don't adapt Western campaigns - we build for India from the start.",
    },
    why: {
      label: "How We Work",
      title: "India digital marketing that connects to your global reporting",
      intro:
        "One of the most common frustrations for global startups running India digital campaigns is the disconnect between what their India agency is doing and what their global CMO can see. We solve this by design - every engagement includes weekly reporting in formats that connect to your global marketing stack.",
      items: [
        {
          title: "India-first strategy",
          body: "Every campaign starts from Indian audience behaviour, Indian platform dynamics, and Indian search intent - not an adaptation of global campaigns.",
        },
        {
          title: "Global reporting standards",
          body: "Weekly performance reports in your preferred format, with CAC, CPL, pipeline contribution, and channel attribution metrics the global team can act on.",
        },
        {
          title: "Content built for India",
          body: "Ad copy, social content, and video scripts are written or reviewed by India-fluent content leads who understand the cultural nuances that make the difference between content that converts and content that's ignored.",
        },
        {
          title: "Integrated with your GTM",
          body: "Digital marketing activity is coordinated with channel partner launch, sales enablement, and India events - so every campaign supports the broader India commercial motion.",
        },
      ],
    },
    cta: {
      label: "Get Started",
      title: "Ready to build your India digital presence?",
      body: "Book a free 45-minute India Entry Strategy Call. We'll map out the opportunities, flag the real risks, and tell you honestly what it takes - with no obligation to proceed.",
    },
    services: [
      {
        slug: "seo",
        title: "SEO & Search Presence",
        summary:
          "Get found by Indian buyers before your competitors do - SEO built for India's search behaviour and language diversity.",
        lead: "Your global website is unlikely to rank for the Indian searches that matter to your buyers - and the keyword landscape is genuinely different from US, UK, or other global markets.",
        body: [
          "Indian buyers search differently: more conversational queries, high use of Hindi-English code-switching, and a strong preference for local and city-specific results. We build India-specific SEO from the ground up - keyword research calibrated to Indian search behaviour in your category, localised landing pages for the Indian cities and segments you're targeting, Google Business Profile setup and optimisation for your India office, technical SEO adapted for India's mobile-first indexing, and a content strategy that answers the questions Indian buyers are actually asking about your product.",
          "The output is organic search visibility that compounds over time - the most cost-efficient lead generation channel in India for startups willing to invest early.",
        ],
        tags: [
          "India keyword research",
          "City-specific landing pages",
          "Google Business Profile",
          "Mobile-first SEO",
          "India content strategy",
        ],
      },
      {
        slug: "social-media",
        title: "Social Media & Brand Building",
        summary:
          "Build brand trust with Indian audiences before you make your first sales call - a social presence across the platforms Indian buyers actually use.",
        lead: "LinkedIn is where Indian B2B decisions are researched and where your credibility as a foreign entrant is first established. Instagram is where D2C brands build desire. YouTube is where high-consideration product decisions are made.",
        body: [
          "The platforms are familiar, but the content that performs in India is different in tone, format, pacing, and language from what works in the US, Europe, or other global markets. We manage your India social presence with content built specifically for Indian professional and consumer audiences: thought leadership on LinkedIn that establishes your India credibility, visual storytelling on Instagram adapted for Indian aesthetics and cultural references, and YouTube content that addresses the specific questions Indian buyers ask before they consider a foreign brand.",
          "We also manage Hindi and key regional language content where your target segments make it worthwhile.",
        ],
        tags: [
          "LinkedIn brand presence",
          "Instagram for India",
          "YouTube content strategy",
          "Regional language content",
          "Founder positioning in India",
        ],
      },
      {
        slug: "google-ads",
        title: "Google Ads for India",
        summary:
          "High-intent leads, lower cost-per-click - Google Ads campaigns engineered for Indian search intent, pricing sensitivity, and buying behaviour.",
        lead: "India is one of the most cost-efficient Google Ads markets in the world - but only if your campaigns are built for how Indians search, what devices they're on, and what conversion actions are realistic at each funnel stage.",
        body: [
          "We understand that every business has unique goals, which is why we create customised Google Ads strategies that align with your objectives. Our certified Google Ads specialists focus on keyword research and optimisation to identify high-converting keywords, targeted audience segmentation so your ads reach the customers most likely to convert, and continuous A/B testing of ad copies, landing pages, and strategies to enhance results.",
          "We offer budget-friendly campaign management that delivers maximum value, with real-time tracking and transparent reporting so you can always see how your campaigns are performing.",
        ],
        tags: [
          "India keyword strategy",
          "Search & display campaigns",
          "YouTube pre-roll ads",
          "India CPC optimisation",
          "Pipeline attribution reporting",
        ],
      },
      {
        slug: "performance-marketing",
        title: "Performance Marketing & Lead Generation",
        summary:
          "Every rupee accountable - performance campaigns that generate real pipeline, not just traffic.",
        lead: "For B2B startups entering India, performance marketing means one thing: generating qualified pipeline from Indian enterprise buyers who are actively evaluating solutions in your category.",
        body: [
          "For B2C startups, it means efficient customer acquisition across Meta, Google, and India-specific platforms with Indian CAC benchmarks and LTV assumptions. We build and run performance campaigns structured around India's buyer journey - which is longer, more relationship-influenced, and more research-driven than Western markets for B2B, and significantly more value-sensitive for B2C.",
          "This includes audience building on LinkedIn and Meta using Indian professional segments, retargeting campaigns adapted for India's longer consideration cycles, and lead nurture flows that convert Indian interest into sales conversations. Full attribution reporting is delivered to your global team every week.",
        ],
        tags: [
          "B2B lead generation India",
          "Meta & LinkedIn campaigns",
          "Indian audience segmentation",
          "Lead nurture flows",
          "Weekly attribution reporting",
        ],
      },
      {
        slug: "youtube-video",
        title: "YouTube & Video Marketing",
        summary:
          "India is the world's largest YouTube market - tell your story where India watches, with video that builds awareness, trust, and action.",
        lead: "India is the world's largest YouTube market by active users, and video is the primary medium through which Indian buyers form opinions about brands they don't yet know.",
        body: [
          "For a foreign startup entering India, this matters enormously: your first impression with a large portion of your potential customers will be a video, not a website. We create and distribute India-specific video content across the formats that drive results - product explainers adapted for Indian use cases and pain points, founder and team videos that build trust with Indian buyers who prefer doing business with people they know, customer testimonial content from Indian users or pilot customers, and pre-roll ad campaigns targeting your exact buyer persona across India's most-watched YouTube channels.",
          "We also localise your existing global video assets for Indian audiences - adapting narration, on-screen text, and contextual examples where relevant.",
        ],
        tags: [
          "Product explainers for India",
          "Founder credibility videos",
          "Indian customer testimonials",
          "Pre-roll ad campaigns",
          "Global video localisation",
        ],
      },
      {
        slug: "whatsapp-email",
        title: "WhatsApp & Email Marketing",
        summary:
          "Reach Indian decision-makers where they actually respond - WhatsApp and email campaigns that reach Indian inboxes and get replies.",
        lead: "India has over 500 million WhatsApp users, and for a significant portion of Indian businesses and consumers, WhatsApp is their primary - and sometimes only - digital communication channel.",
        body: [
          "For your India operation, this means WhatsApp is not a nice-to-have marketing channel. It is the channel. We set up WhatsApp Business API campaigns for your India operation: partner and channel communications, customer onboarding and activation sequences, product update broadcasts, promotional campaigns, and support escalation workflows. All messaging is DLT-registered and compliant with TRAI's commercial communication regulations - a mandatory requirement for bulk messaging in India that most foreign startups overlook until they hit a delivery block.",
          "Combined with email nurture campaigns built for India's longer B2B sales cycles and high-mobile-open-rate behaviour, this gives you a complete owned-channel communication system from day one.",
        ],
        tags: [
          "WhatsApp Business API",
          "DLT-compliant messaging",
          "Customer onboarding flows",
          "Partner communications",
          "India email nurture sequences",
        ],
      },
    ],
  },

  /* ======================= CUSTOMER COMMUNICATION ======================= */
  {
    slug: "cpaas-omnichannel",
    title: "Customer Communication Services",
    short: "Customer Communication",
    blurb: "Unified customer communication at scale.",
    subtext:
      "In India, your customers are not waiting in your inbox. They’re on WhatsApp. India’s communication behaviour is fundamentally different from Western markets - customers expect WhatsApp updates, partners expect SMS confirmations, and enterprise buyers expect voice-first relationships. If your communication stack is built for Western behaviour, you will lose Indian customers at every touchpoint - not because your product is wrong, but because your channel is.",
    icon: "chat",
    whyBeforeFeatures: false,
    hero: {
      badge: "India Customer Communication",
      lead: "Reaching Indian customers",
      accent: "the way they actually communicate",
      tail: "",
      sub: "In India, your customers are not waiting in your inbox - they're on WhatsApp. We configure, integrate, and manage India-ready customer communication infrastructure so every interaction feels local, immediate, and trustworthy.",
    },
    challenge: {
      label: "The India Communication Gap",
      title: "Why your existing communication stack will underperform in India",
      intro:
        "Most global startups arrive in India with a communication stack optimised for Western audiences - email-first, app-notification-heavy, and voice-light. India inverts almost every one of these assumptions. Understanding the gap is the first step to closing it.",
      items: [
        {
          icon: "chat",
          title: "WhatsApp has 98% open rates in India",
          body: "Email open rates in India average 15–20%. WhatsApp messages are opened within minutes by over 500 million users. For customer updates, partner communications, and support, WhatsApp is the primary channel - not a secondary one.",
        },
        {
          icon: "folder",
          title: "SMS requires DLT registration",
          body: "India's TRAI regulations require all commercial SMS senders to register on the Distributed Ledger Technology (DLT) platform before sending. Non-compliant messages are blocked at the carrier level - most foreign startups discover this after their first campaign fails to deliver.",
        },
        {
          icon: "phone",
          title: "Voice is still dominant in B2B",
          body: "Indian enterprise buyers and channel partners close relationships on calls, not email threads. A contact centre or cloud voice solution is not optional for any India operation managing partners or enterprise accounts at scale.",
        },
        {
          icon: "shield",
          title: "OTP delivery has India-specific challenges",
          body: "India's telecom network conditions, carrier routing behaviour, and SIM-swap fraud rates make OTP delivery more complex than in Western markets. Without India-optimised routing, OTP failure rates can reach 15–20% - enough to materially damage conversion.",
        },
      ],
    },
    servicesIntro: {
      label: "Our Services",
      title: "India customer communication services, configured for how India actually works",
      intro:
        "We operate our own CPaaS and CCaaS infrastructure - enabling businesses to launch, manage, and scale customer communication across SMS, Voice, WhatsApp, RCS, verification, and omnichannel support from a single ecosystem. Every configuration is adapted to India's regulatory environment, carrier infrastructure, and communication behaviour.",
    },
    why: {
      label: "Why JB NewGen",
      title: "Communication infrastructure that reflects India's reality, not a template",
      items: [
        {
          title: "Built-in regulatory compliance",
          body: "DLT registration, Meta policy approval, DPDP Act consent frameworks, and RBI guidelines are built into every setup - not bolted on after problems arise.",
        },
        {
          title: "India carrier expertise",
          body: "We know which carriers deliver fastest in which regions, which routing paths have the lowest failure rates for OTP, and how to configure fallback logic for India's network complexity.",
        },
        {
          title: "Language-ready from day one",
          body: "IVR, WhatsApp message templates, and SMS content can be configured in Hindi and key regional languages from launch - not retrofitted six months later when churn data tells you it matters.",
        },
        {
          title: "Connected to your GTM",
          body: "Your communication infrastructure is coordinated with your channel partner onboarding, your customer activation sequence, and your India support operation - not set up in isolation.",
        },
      ],
    },
    features: [
      {
        label: "Regulatory Compliance",
        title: "India's communication regulations - what you need to know before you send a single message",
        intro:
          "India has among the world's most structured commercial communication regulatory frameworks. Launching without understanding these will result in messages being blocked, campaigns failing silently, and potential regulatory action. We handle compliance as a built-in part of every engagement.",
        tone: "cream",
        items: [
          {
            tag: "TRAI",
            title: "TRAI DLT Registration",
            body: "Mandatory for all commercial SMS in India. Entity, header, and template registration required before first send. We manage the full registration process.",
          },
          {
            tag: "DPDP",
            title: "DPDP Act (2023)",
            body: "India's data protection law governs how customer communication data is stored, processed, and consented to. We build compliant consent frameworks into every channel setup.",
          },
          {
            tag: "Meta",
            title: "Meta WhatsApp Policy",
            body: "WhatsApp Business API usage requires approval and ongoing policy compliance. Message templates must be pre-approved. We handle initial approval and ongoing template management.",
          },
          {
            tag: "RBI",
            title: "RBI Communication Rules",
            body: "For fintech and payment-related communication, RBI mandates specific disclosure requirements in customer messaging. We configure compliant message templates for regulated categories.",
          },
        ],
      },
    ],
    cta: {
      label: "Get Started",
      title: "Ready to connect with India the way India communicates?",
      body: "Book a free 45-minute India Communication Strategy call. We'll audit your current stack, identify the gaps, and design an India-ready communication infrastructure that delivers from day one.",
    },
    services: [
      {
        slug: "whatsapp-business-api",
        title: "WhatsApp Business API",
        summary:
          "From broadcast to two-way conversation - WhatsApp Business API setup, integration, and management for businesses serious about India customer engagement.",
        lead: "WhatsApp is India's dominant communication platform - over 500 million active users, 98% message open rates, and a genuine consumer expectation that brands will communicate with them there.",
        body: [
          "This is not a marketing experiment - it is the primary channel through which Indian customers want to receive order confirmations, support responses, payment reminders, and brand updates. We integrate WhatsApp Business API into your existing product and operational systems, design and deploy automated notification flows for the customer journeys that matter most in your category (onboarding, transactional updates, support escalation, re-engagement), and build conversational customer support workflows that reduce your support team's load while improving Indian customer satisfaction.",
          "We ensure every aspect of your WhatsApp implementation is compliant with Meta's business messaging policies and India's commercial communication regulations. For most global startups entering India, WhatsApp Business API delivers the single highest return on communication investment in Year 1.",
        ],
        tags: [
          "WhatsApp API integration",
          "Automated notification flows",
          "Conversational support bots",
          "Partner communication via WhatsApp",
          "Meta policy compliance",
        ],
      },
      {
        slug: "sms-rcs",
        title: "SMS & RCS: Compliant, Reliable, India-Optimised",
        summary:
          "Guaranteed delivery, zero regulatory surprises - India-compliant SMS and next-generation RCS messaging that reaches every Indian mobile, every time.",
        lead: "Transactional SMS remains a non-negotiable communication layer for any India operation - OTP delivery, payment confirmations, order status updates, logistics tracking, and appointment reminders all rely on SMS as the universal fallback that works across every device and network condition in India.",
        body: [
          "The critical difference in India is regulatory: all commercial SMS must be DLT-registered under TRAI's framework before a single message can be sent. We handle end-to-end DLT registration for your organisation - entity registration, header registration, and template pre-approval - so your SMS campaigns and transactional messages deliver reliably from launch day.",
          "On top of the SMS foundation, we layer RCS (Rich Communication Services) capabilities for the device segments and customer scenarios where richer messaging - branded sender IDs, interactive buttons, image carousels, and read receipts within the native SMS app - meaningfully improves engagement and conversion. India's RCS adoption is accelerating rapidly, and early movers gain significant engagement advantages.",
        ],
        tags: [
          "DLT registration & compliance",
          "Transactional SMS infrastructure",
          "RCS rich messaging",
          "Carrier routing optimisation",
          "Delivery rate monitoring",
        ],
      },
      {
        slug: "voice-contact-centre",
        title: "Voice & Contact Centre Solutions",
        summary:
          "From first call to resolution - scalable voice and contact centre solutions built for India's languages, time zones, and customer expectations.",
        lead: "India's business culture is fundamentally voice-first for relationship-building, issue resolution, and high-stakes decision-making.",
        body: [
          "Your channel partners want to call when something goes wrong. Your enterprise buyers want to speak to someone before they sign. Your customers in Tier 2 cities prefer voice support over chat. If your India operation doesn't have professional voice infrastructure from launch, you will lose deals and relationships that email and chat cannot recover.",
          "We implement cloud-based voice and contact centre solutions configured specifically for India: IVR systems in Hindi and key regional languages (Tamil, Telugu, Kannada, Bengali, Marathi) that reflect the linguistic reality of your Indian customer base, call recording infrastructure compliant with Indian data protection requirements, CRM integration so every partner or customer call is logged, attributed, and actionable within your pipeline, and queue management and routing logic that handles the geographic and language diversity of Indian inbound traffic.",
          "For startups launching a partner helpdesk, customer support function, or enterprise sales team in India, this is the operational communication foundation that everything else builds on.",
        ],
        tags: [
          "Cloud IVR in Hindi & regional languages",
          "Call recording & compliance",
          "CRM integration",
          "Partner helpdesk setup",
          "Enterprise sales line configuration",
        ],
      },
      {
        slug: "omnichannel-dashboard",
        title: "Omnichannel Dashboard & Unified Communication Analytics",
        summary:
          "One view, every channel - unified analytics that turn your India communication data into decisions, not spreadsheets.",
        lead: "Managing customer communication across WhatsApp, SMS, RCS, voice, and email in India simultaneously means dealing with multiple carriers, multiple regulatory frameworks, and multiple performance variables - all of which your global team needs visibility into without being overwhelmed by operational detail.",
        body: [
          "We implement a unified omnichannel communication dashboard that consolidates all your India communication channels into a single view: real-time message delivery rates by channel and carrier, customer engagement metrics across WhatsApp, SMS, and email, support volume and resolution time by channel, OTP delivery success rates, call handling metrics for your voice channels, and cost-per-interaction analysis that tells you where to invest more and where to pull back.",
          "Your India team gets an operational dashboard for day-to-day management. Your global headquarters gets an executive summary view that connects India communication performance to commercial outcomes - customer activation, partner engagement, and pipeline contribution.",
        ],
        tags: [
          "Unified channel dashboard",
          "Real-time delivery monitoring",
          "Engagement analytics",
          "Cost-per-interaction analysis",
          "Executive reporting for HQ",
        ],
      },
    ],
  },
];

export const pillarBySlug = (slug: string) => pillars.find((p) => p.slug === slug);
export const serviceInPillar = (pillar: Pillar, slug: string) =>
  pillar.services.find((s) => s.slug === slug);

/* -------------------------------------------------------------------------- */
/* Insights cluster - hub, categories, articles                                */
/* -------------------------------------------------------------------------- */

export type Category = { slug: string; title: string };
export const categories: Category[] = [
  { slug: "business-strategy", title: "Business & Strategy" },
  { slug: "digital-marketing", title: "Digital Marketing" },
  { slug: "digital-transformation", title: "Digital Transformation" },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  image?: string;
  /** Publication date as printed on the live post, e.g. "April 14, 2026". */
  date: string;
  /** Estimated reading time in minutes. */
  readMins: number;
  /** Verbatim opening line(s) from the live post - card preview + article lead. */
  excerpt: string;
};
export const articles: Article[] = [
  {
    slug: "leading-business-consulting-company-india",
    title: "JB NewGen - A Leading Business Consulting Company in India",
    category: "business-strategy",
    image: "/images/stock/ai-advertising.png",
    date: "April 14, 2026",
    readMins: 7,
    excerpt:
      "Let’s be real running a business today isn’t as simple as it used to be. Whether you’re a startup founder or managing a large enterprise, the challenges are constantly evolving.",
  },
  {
    slug: "channel-distribution-setup-scaling-regional-businesses",
    title: "The Role of Channel & Distribution Setup in Scaling Regional Businesses",
    category: "business-strategy",
    image: "/images/stock/distribution-channels.png",
    date: "October 14, 2025",
    readMins: 5,
    excerpt:
      "Every successful business, whether large or small, runs on the backbone of an efficient distribution and channel setup.",
  },
  {
    slug: "best-business-consulting-strategies-to-scale",
    title: "Best Business Consulting Strategies to Scale Your Company",
    category: "business-strategy",
    image: "/images/stock/consulting-laptop.png",
    date: "March 28, 2026",
    readMins: 7,
    excerpt:
      "Scaling a business today is not what it used to be a decade ago. In 2026, scaling business means increasing your revenue without increasing your costs at the same pace.",
  },
  {
    slug: "go-to-market-strategy-launch-successfully",
    title: "How Go-To-Market Strategy Helps Businesses Launch Successfully",
    category: "digital-transformation",
    date: "March 24, 2026",
    readMins: 7,
    excerpt:
      "A go to market strategy is a structured plan that helps businesses launch a new product or service into the market successfully.",
  },
  {
    slug: "role-of-business-consultants-modern-indian-enterprises",
    title: "The Role of Business Consultants in Modern Indian Enterprises",
    category: "digital-transformation",
    date: "November 14, 2025",
    readMins: 4,
    excerpt:
      "In today’s rapidly evolving business world, Indian enterprises are transforming faster than ever before.",
  },
  {
    slug: "top-consultancy-services-for-smes-india",
    title: "Top Business Consultancy Services for SMEs in India",
    category: "digital-marketing",
    date: "March 7, 2026",
    readMins: 10,
    excerpt:
      "Small and medium enterprises are the backbone of India’s economy. They are responsible for creating jobs, encouraging innovation, and supporting local and regional economic growth.",
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
export const articlesInCategory = (slug: string) => articles.filter((a) => a.category === slug);

/** Articles sorted newest-first by their printed publication date. */
export const articlesByNewest = (list: Article[] = articles) =>
  [...list].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

export const insightsChildren: NavLink[] = [
  { label: "All Insights", href: "/insights", desc: "Every article" },
  ...categories.map((c) => ({
    label: c.title,
    href: `/insights/category/${c.slug}`,
    desc: `${articlesInCategory(c.slug).length} article${articlesInCategory(c.slug).length === 1 ? "" : "s"}`,
  })),
];

/* -------------------------------------------------------------------------- */
/* Homepage content (real facts from jbnewgen.com)                             */
/* -------------------------------------------------------------------------- */

export const proofStats = [
  { value: "35+", label: "Years in the India market", sub: "Since India's early digital revolution" },
  { value: "7,000+", label: "Channel partners built & managed", sub: "Nationwide distribution" },
  { value: "30,000+", label: "Retail touchpoints established", sub: "Tier 1 & Tier 2 reach" },
  { value: "200–500%", label: "Revenue growth delivered", sub: "For the businesses we've scaled" },
];

export const ceo = {
  name: "Joyjeet Bose",
  role: "Founder & CEO",
  initials: "JB",
  quote:
    "India is not one market. It's 28 states, hundreds of languages, multiple tiers of distribution, and buyers who make decisions in ways that surprise every foreign company.",
  bioShort:
    "Built national channel networks across telecom, technology and retail - at Tata Teleservices, the Airtel group and India's early internet sector.",
  href: "/about/ceo",
};

export const testimonials = [
  {
    quote:
      "The GTM & Ops Consultancy service helped us break into new markets with ease. Their tailored strategy ensured we reached the right audience. A game-changer for us!",
    name: "Ravi Sharma",
    role: "Agent Manager",
  },
  {
    quote:
      "We were struggling with distribution inefficiencies, but the team's expert consultancy streamlined our channels. Our market penetration improved significantly!",
    name: "Priya Mehta",
    role: "Assistant Manager",
  },
  {
    quote:
      "Their approach to refining our business operations was truly innovative. We saw immediate improvements in resource utilization and cost savings.",
    name: "Amit Kumar",
    role: "Operations Lead",
  },
  {
    quote:
      "The digital transformation service allowed us to automate most of our manual processes. Our productivity has increased by 40% since then!",
    name: "Anjali Gupta",
    role: "Agent Manager",
  },
];

export const featuredArticles = () => articles.slice(0, 3);

/* The two markets the distribution network serves. */
export type Market = {
  key: string;
  label: string;
  title: string;
  desc: string;
  points: string[];
  href: string;
  cta: string;
  icon: string;
};

export const markets: Market[] = [
  {
    key: "market-entry",
    label: "Market entry",
    title: "Enter & scale in India",
    desc: "For global brands and startups that want a running business in India - not just a plan on paper.",
    points: ["Go-to-market strategy", "Channel & distribution setup", "On-ground launch & execution"],
    href: "/services/business-consultancy",
    cta: "Explore market entry",
    icon: "compass",
  },
  {
    key: "communication",
    label: "Communication & cloud",
    title: "Reach India’s customers",
    desc: "CPaaS, CCaaS and cloud, delivered through our partner channel across India’s tiers.",
    points: ["WhatsApp, SMS/RCS & voice", "Omnichannel contact centre", "Cloud & security solutions"],
    href: "/services/cpaas-omnichannel",
    cta: "Explore communication",
    icon: "chat",
  },
];

/* -------------------------------------------------------------------------- */
/* Primary navigation                                                          */
/* -------------------------------------------------------------------------- */

export type NavItem = {
  label: string;
  href: string;
  type?: "dropdown" | "mega";
  children?: NavLink[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", type: "dropdown", children: aboutChildren },
  { label: "Services", href: "/services", type: "mega" },
  { label: "Insights", href: "/insights", type: "dropdown", children: insightsChildren },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

/* -------------------------------------------------------------------------- */
/* Flat page registry - powers search + footer sitemap                         */
/* -------------------------------------------------------------------------- */

export type PageEntry = { href: string; title: string; group: string };

export function allPages(): PageEntry[] {
  const list: PageEntry[] = [
    { href: "/", title: "Home", group: "Main" },
    { href: "/about/company", title: "The Company", group: "About" },
    { href: "/about/ceo", title: "Our CEO - Joyjeet Bose", group: "About" },
    { href: "/services", title: "Services - Overview", group: "Services" },
    { href: "/careers", title: "Careers", group: "Main" },
    { href: "/contact", title: "Contact", group: "Main" },
    { href: "/quote", title: "Get a Quote", group: "Main" },
    { href: "/insights", title: "Insights - Overview", group: "Insights" },
  ];

  for (const p of pillars) {
    list.push({ href: `/services/${p.slug}`, title: p.short, group: "Services" });
    for (const s of p.services) {
      list.push({
        href: `/services/${p.slug}/${s.slug}`,
        title: s.title,
        group: `Services · ${p.short}`,
      });
    }
  }
  for (const c of categories) {
    list.push({
      href: `/insights/category/${c.slug}`,
      title: `${c.title} (category)`,
      group: "Insights",
    });
  }
  for (const a of articles) {
    list.push({ href: `/insights/${a.slug}`, title: a.title, group: "Insights · Articles" });
  }
  return list;
}

export function searchPages(query: string): PageEntry[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/);
  return allPages()
    .map((p) => {
      const hay = `${p.title} ${p.group} ${p.href}`.toLowerCase();
      const score = terms.reduce((acc, t) => acc + (hay.includes(t) ? 1 : 0), 0);
      return { p, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.p);
}
