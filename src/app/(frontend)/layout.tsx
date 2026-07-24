import type { Metadata } from "next";
import { Inter, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { getNavPillars } from "@/lib/services-data";
import { getSiteSettings } from "@/lib/site-settings";
const SITE_DESCRIPTION =
  "35 years, 7,000+ channel partners and 30,000+ retail touchpoints. JBNewGen puts India's deepest distribution network to work - for global brands entering India, and for customer communication & cloud across India.";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Serif accent for hero emphasis - echoes the "NewGen" serif in the logo.
const serif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jbnewgen.com"),
  title: {
    default: "JBNewGen - India's Distribution & Go-To-Market Partner",
    template: "%s · JBNewGen",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "India GTM",
    "go-to-market India",
    "business consultancy India",
    "market entry India",
    "channel distribution India",
    "CPaaS",
    "digital transformation",
  ],
  openGraph: {
    title: "JBNewGen - India's Distribution & Go-To-Market Partner",
    description: SITE_DESCRIPTION,
    url: "https://jbnewgen.com",
    siteName: "JBNewGen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JBNewGen - India's Distribution & Go-To-Market Partner",
    description: SITE_DESCRIPTION,
  },
};

// The header nav, footer sitemap and brand mark are all CMS-driven, so every
// page below this layout renders per request — otherwise an edit in /admin
// would not appear until the next deploy.
export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Navigation and brand mark are CMS-driven; both fall back to the static
  // content when the database is empty or unreachable.
  const [pillars, settings] = await Promise.all([getNavPillars(), getSiteSettings()]);
  const brand = {
    logoUrl: settings.logoUrl,
    logoAlt: settings.logoAlt,
    brandPrefix: settings.brandPrefix,
    brandSuffix: settings.brandSuffix,
    tagline: settings.tagline,
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <Header pillars={pillars} brand={brand} />
        <main className="flex-1">{children}</main>
        <Footer pillars={pillars} brand={brand} />
      </body>
    </html>
  );
}
