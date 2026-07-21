/**
 * Optimized information architecture for JBNewGen.
 * This is the single source of truth for every route, the navigation tree,
 * breadcrumbs, the footer sitemap, and site search. Pages are intentionally
 * content-light — they render only the navigation relevant to their position.
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
/* Services cluster — 4 pillars, each with sub-services                        */
/* -------------------------------------------------------------------------- */

export type Service = { slug: string; title: string };
export type Pillar = {
  slug: string;
  title: string;
  short: string;
  blurb: string;
  /** One-paragraph intro shown beside the pillar visual on the homepage. */
  subtext: string;
  icon: string;
  services: Service[];
};

export const pillars: Pillar[] = [
  {
    slug: "business-consultancy",
    title: "Business Consultancy — Your India GTM Partner",
    short: "Business Consultancy",
    blurb: "From strategy to on-ground execution.",
    subtext:
      "We help US, EU, and global startups go from “we want to enter India” to “we are operating in India” — in months, not years. On-ground expertise. Real networks. End-to-end accountability.",
    icon: "compass",
    services: [
      { slug: "go-to-market", title: "Go-to-Market Strategy" },
      { slug: "channel-distribution", title: "Channel & Distribution Network" },
      { slug: "process-policies", title: "Process & Policies – for ready Operations" },
      { slug: "partner-engagement", title: "Partner Engagement" },
      { slug: "end-to-end-execution", title: "End to End Execution" },
      { slug: "training", title: "Training – Sales & Leadership" },
    ],
  },
  {
    slug: "tech-readiness",
    title: "Tech Readiness Services",
    short: "Tech Readiness",
    blurb: "Startup-ready digital infrastructure.",
    subtext:
      "Your product works perfectly in the US or Europe. India will test it differently. India is a mobile-first, WhatsApp-native, UPI-powered market — and your payment stack, CRM, data infrastructure, and compliance posture all need to be assessed and often adapted before you go live. We handle that India tech readiness layer so your launch isn’t derailed by avoidable integration failures.",
    icon: "cpu",
    services: [
      { slug: "tech-stack-assessment", title: "Tech Stack Assessment & Integration" },
      { slug: "cloud-hosting-data", title: "Cloud, Hosting & Data Solutions" },
      { slug: "telecom-connectivity", title: "Telecom & Connectivity Solutions" },
      { slug: "cyber-security", title: "Cyber Security Product & Solutions" },
      { slug: "process-automation", title: "Process Automation for Operations" },
      { slug: "crm-sales-ops", title: "CRM & Sales Operations Setup" },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Building Visibility & Demand in India's Digital Market",
    short: "Visibility & Demand",
    blurb: "Amplify your brand and pipeline.",
    subtext:
      "India’s digital audience is 900 million strong — and they don’t behave like your existing customers. They discover brands on YouTube before Google. They transact on WhatsApp before your website. They trust regional-language content more than English. Getting India digital marketing right means understanding these differences and building campaigns that work with them, not against them.",
    icon: "megaphone",
    services: [
      { slug: "seo", title: "SEO & Search Presence" },
      { slug: "social-media", title: "Social Media & Brand Building" },
      { slug: "google-ads", title: "Google Ads for India" },
      { slug: "performance-marketing", title: "Performance Marketing & Lead Generation" },
      { slug: "youtube-video", title: "YouTube & Video Marketing" },
      { slug: "whatsapp-email", title: "WhatsApp & Email Marketing" },
    ],
  },
  {
    slug: "cpaas-omnichannel",
    title: "Customer Communication Services",
    short: "Customer Communication",
    blurb: "Unified customer communication at scale.",
    subtext:
      "In India, your customers are not waiting in your inbox. They’re on WhatsApp. India’s communication behaviour is fundamentally different from Western markets — customers expect WhatsApp updates, partners expect SMS confirmations, and enterprise buyers expect voice-first relationships. If your communication stack is built for Western behaviour, you will lose Indian customers at every touchpoint — not because your product is wrong, but because your channel is.",
    icon: "chat",
    services: [
      { slug: "whatsapp-business-api", title: "WhatsApp Business API" },
      { slug: "sms-rcs", title: "SMS & RCS: Compliant, Reliable, India-Optimised" },
      { slug: "voice-contact-centre", title: "Voice & Contact Centre Solutions" },
      { slug: "omnichannel-dashboard", title: "Omnichannel Dashboard & Unified Communication Analytics" },
    ],
  },
];

export const pillarBySlug = (slug: string) => pillars.find((p) => p.slug === slug);
export const serviceInPillar = (pillar: Pillar, slug: string) =>
  pillar.services.find((s) => s.slug === slug);

/* -------------------------------------------------------------------------- */
/* Insights cluster — hub, categories, articles                                */
/* -------------------------------------------------------------------------- */

export type Category = { slug: string; title: string };
export const categories: Category[] = [
  { slug: "business-strategy", title: "Business & Strategy" },
  { slug: "digital-marketing", title: "Digital Marketing" },
  { slug: "digital-transformation", title: "Digital Transformation" },
];

export type Article = { slug: string; title: string; category: string; image?: string };
export const articles: Article[] = [
  {
    slug: "leading-business-consulting-company-india",
    title: "JB NewGen — A Leading Business Consulting Company in India",
    category: "business-strategy",
    image: "/images/stock/ai-advertising.png",
  },
  {
    slug: "channel-distribution-strategy-helps-businesses-grow",
    title: "How Channel Distribution Strategy Helps Businesses Grow",
    category: "business-strategy",
    image: "/images/stock/distribution-channels.png",
  },
  {
    slug: "best-business-consulting-strategies-to-scale",
    title: "Best Business Consulting Strategies to Scale Your Company",
    category: "business-strategy",
    image: "/images/stock/consulting-laptop.png",
  },
  {
    slug: "go-to-market-strategy-launch-successfully",
    title: "How Go-To-Market Strategy Helps Businesses Launch Successfully",
    category: "digital-transformation",
  },
  {
    slug: "business-consultants-help-startups-grow-faster",
    title: "How Business Consultants Help Startups Grow Faster",
    category: "digital-transformation",
  },
  {
    slug: "top-consultancy-services-for-smes-india",
    title: "Top Business Consultancy Services for SMEs in India",
    category: "digital-marketing",
  },
];

export const categoryBySlug = (slug: string) => categories.find((c) => c.slug === slug);
export const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);
export const articlesInCategory = (slug: string) => articles.filter((a) => a.category === slug);

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
    "Built national channel networks across telecom, technology and retail — at Tata Teleservices, the Airtel group and India's early internet sector.",
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
    desc: "For global brands and startups that want a running business in India — not just a plan on paper.",
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
/* Flat page registry — powers search + footer sitemap                         */
/* -------------------------------------------------------------------------- */

export type PageEntry = { href: string; title: string; group: string };

export function allPages(): PageEntry[] {
  const list: PageEntry[] = [
    { href: "/", title: "Home", group: "Main" },
    { href: "/about/company", title: "The Company", group: "About" },
    { href: "/about/ceo", title: "Our CEO — Joyjeet Bose", group: "About" },
    { href: "/services", title: "Services — Overview", group: "Services" },
    { href: "/careers", title: "Careers", group: "Main" },
    { href: "/contact", title: "Contact", group: "Main" },
    { href: "/quote", title: "Get a Quote", group: "Main" },
    { href: "/insights", title: "Insights — Overview", group: "Insights" },
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
