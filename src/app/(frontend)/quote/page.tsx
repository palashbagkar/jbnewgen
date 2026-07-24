import type { Metadata } from "next";
import { PageHeader } from "@/components/nav/PageHeader";
import { NavGrid } from "@/components/nav/NavGrid";
import { NextStep } from "@/components/nav/NextStep";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content";
import { getNavPillars } from "@/lib/services-data";

export const metadata: Metadata = { title: "Get a Quote" };

export default async function QuotePage() {
  const pillars = await getNavPillars();
  return (
    <>
      <PageHeader
        eyebrow="Get a quote"
        title="Get a quote"
        trail={[
          { label: "Home", href: "/" },
          { label: "Get a quote", href: "/quote" },
        ]}
        note="The conversion destination reachable from every page. Pick a service area or reach out directly."
      >
        <Button href={site.phoneHref} icon="phone">
          Call {site.phone}
        </Button>
        <Button href="/contact" variant="ghost" icon="arrowUpRight">
          Contact form
        </Button>
      </PageHeader>
      <NavGrid
        title="What do you need help with?"
        caption="Jump to a service pillar"
        columns={4}
        items={pillars.map((p) => ({ label: p.short, href: `/services/${p.slug}`, desc: p.blurb, icon: p.icon }))}
      />
      <NextStep heading="Prefer to talk?" actions={[{ label: "Contact us", href: "/contact", variant: "primary" }]} />
    </>
  );
}
