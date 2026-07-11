import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/nav/PageHeader";
import { NavGrid } from "@/components/nav/NavGrid";
import { NextStep } from "@/components/nav/NextStep";
import { pillarBySlug, pillars, serviceInPillar } from "@/lib/content";

export function generateStaticParams() {
  return pillars.flatMap((p) =>
    p.services.map((s) => ({ pillar: p.slug, service: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pillar: string; service: string }>;
}): Promise<Metadata> {
  const { pillar, service } = await params;
  const p = pillarBySlug(pillar);
  const s = p ? serviceInPillar(p, service) : undefined;
  return { title: s ? `${s.title} · ${p!.short}` : "Service" };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ pillar: string; service: string }>;
}) {
  const { pillar, service } = await params;
  const p = pillarBySlug(pillar);
  const s = p ? serviceInPillar(p, service) : undefined;
  if (!p || !s) notFound();

  const siblings = p.services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHeader
        eyebrow={`Services · ${p.short}`}
        title={s.title}
        trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: p.short, href: `/services/${p.slug}` },
          { label: s.title, href: `/services/${p.slug}/${s.slug}` },
        ]}
        note="Leaf page. Navigate back to the pillar hub or across to a sibling service."
      />
      <NavGrid
        title={`More in ${p.short}`}
        caption="Sibling services + back to the pillar hub"
        columns={3}
        items={[
          { label: `${p.short} — Overview`, href: `/services/${p.slug}`, desc: "Back to the hub", icon: "arrowRight" },
          ...siblings.map((x) => ({
            label: x.title,
            href: `/services/${p.slug}/${x.slug}`,
            icon: p.icon,
          })),
        ]}
      />
      <NextStep heading="Interested in this service?" />
    </>
  );
}
