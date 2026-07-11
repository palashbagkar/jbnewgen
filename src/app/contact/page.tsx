import type { Metadata } from "next";
import { PageHeader } from "@/components/nav/PageHeader";
import { NavGrid } from "@/components/nav/NavGrid";
import { NextStep } from "@/components/nav/NextStep";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact"
        trail={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
        note="Navigation stub. Every contact action is a live link."
      />
      <NavGrid
        title="Reach us"
        caption="Device & conversion links"
        columns={3}
        items={[
          { label: "Call us", href: site.phoneHref, desc: site.phone, icon: "phone", external: true },
          { label: "Email sales", href: `mailto:${site.emails.sales}`, desc: site.emails.sales, icon: "mail", external: true },
          { label: "Email support", href: `mailto:${site.emails.support}`, desc: site.emails.support, icon: "mail", external: true },
          { label: "Get a quote", href: "/quote", desc: "Start a project", icon: "spark" },
          { label: "LinkedIn", href: site.socials[0].href, desc: "Connect with us", icon: "linkedin", external: true },
          { label: "Careers", href: "/careers", desc: "Join the team", icon: "briefcase" },
        ]}
      />
      <NextStep />
    </>
  );
}
