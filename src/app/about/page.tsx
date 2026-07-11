import type { Metadata } from "next";
import { PageHeader } from "@/components/nav/PageHeader";
import { NavGrid } from "@/components/nav/NavGrid";
import { NextStep } from "@/components/nav/NextStep";
import { aboutChildren } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function AboutHub() {
  const children = aboutChildren.filter((c) => c.href !== "/about");
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About JBNewGen"
        trail={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
        note="Hub page. Links to the company profile, the CEO, and the core team."
      />
      <NavGrid
        title="In this section"
        columns={3}
        items={children.map((c) => ({ label: c.label, href: c.href, desc: c.desc, icon: "users" }))}
      />
      <NextStep />
    </>
  );
}
