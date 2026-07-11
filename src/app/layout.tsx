import type { Metadata } from "next";
import { Inter, Space_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
const SITE_DESCRIPTION =
  "35 years, 7,000+ channel partners and 30,000+ retail touchpoints. JBNewGen puts India's deepest distribution network to work — for global brands entering India, and for customer communication & cloud across India.";

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

// Serif accent for hero emphasis — echoes the "NewGen" serif in the logo.
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
    default: "JBNewGen — India's Distribution & Go-To-Market Partner",
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
    title: "JBNewGen — India's Distribution & Go-To-Market Partner",
    description: SITE_DESCRIPTION,
    url: "https://jbnewgen.com",
    siteName: "JBNewGen",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JBNewGen — India's Distribution & Go-To-Market Partner",
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${display.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
