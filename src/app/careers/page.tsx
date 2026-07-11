import type { Metadata } from "next";
import { PageHeader } from "@/components/nav/PageHeader";
import { NavGrid } from "@/components/nav/NavGrid";
import { NextStep } from "@/components/nav/NextStep";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Careers"
        trail={[
          { label: "Home", href: "/" },
          { label: "Careers", href: "/careers" },
        ]}
        note="Navigation stub. Apply, or explore who you'd be working with."
      >
        <Button href="/contact">Apply / enquire</Button>
      </PageHeader>
      <NavGrid
        title="Get to know us"
        caption="Cross-links from Careers"
        columns={3}
        items={[
          { label: "Our CEO", href: "/about/ceo", desc: "Joyjeet Bose", icon: "users" },
          { label: "Core Team", href: "/about/team", desc: "Who you'd work with", icon: "users" },
          { label: "Contact", href: "/contact", desc: "Reach the team", icon: "mail" },
        ]}
      />
      <NextStep heading="Ready to apply?" actions={[{ label: "Contact us", href: "/contact", variant: "primary" }]} />
    </>
  );
}
