import type { Metadata } from "next";
import { PageHeader } from "@/components/nav/PageHeader";
import { NavGrid } from "@/components/nav/NavGrid";
import { NextStep } from "@/components/nav/NextStep";
import { pillars } from "@/lib/content";

export const metadata: Metadata = { title: "Services" };

export default function ServicesHub() {
  const subCount = pillars.reduce((n, p) => n + p.services.length, 0);
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we do"
        trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        note={`Hub page. Four service pillars and ${subCount} sub-services - each with its own page.`}
      />
      <NavGrid
        title="Service pillars"
        caption="Open a pillar to see its sub-services"
        columns={4}
        items={pillars.map((p) => ({
          label: p.short,
          href: `/services/${p.slug}`,
          desc: `${p.services.length} services`,
          icon: p.icon,
        }))}
      />
      <NextStep />
    </>
  );
}
