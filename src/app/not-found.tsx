import { PageHeader } from "@/components/nav/PageHeader";
import { NavGrid } from "@/components/nav/NavGrid";
import { NextStep } from "@/components/nav/NextStep";

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="Page not found"
        trail={[{ label: "Home", href: "/" }]}
        note="That route doesn't exist — but every real destination is one click away."
      />
      <NavGrid
        title="Go somewhere real"
        columns={3}
        items={[
          { label: "Home", href: "/", icon: "arrowRight" },
          { label: "Services", href: "/services", desc: "4 pillars", icon: "compass" },
          { label: "About", href: "/about", desc: "Company, CEO & team", icon: "users" },
          { label: "Insights", href: "/insights", desc: "Articles", icon: "bulb" },
          { label: "Contact", href: "/contact", icon: "mail" },
          { label: "Get a quote", href: "/quote", icon: "spark" },
        ]}
      />
      <NextStep />
    </>
  );
}
