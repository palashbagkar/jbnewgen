import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/nav/PageHeader";
import { NavGrid } from "@/components/nav/NavGrid";
import { NextStep } from "@/components/nav/NextStep";
import { pillarBySlug, pillars } from "@/lib/content";

export function generateStaticParams() {
  return pillars.map((p) => ({ pillar: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pillar: string }>;
}): Promise<Metadata> {
  const { pillar } = await params;
  const p = pillarBySlug(pillar);
  return { title: p ? `${p.short} · Services` : "Services" };
}

export default async function PillarPage({
  params,
}: {
  params: Promise<{ pillar: string }>;
}) {
  const { pillar } = await params;
  const p = pillarBySlug(pillar);
  if (!p) notFound();

  const related = pillars.filter((x) => x.slug !== p.slug);

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title={p.title}
        trail={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: p.short, href: `/services/${p.slug}` },
        ]}
        note={`${p.blurb} ${p.services.length} sub-services in this pillar.`}
      />
      <NavGrid
        title="Sub-services"
        caption={`Inside ${p.short}`}
        columns={3}
        items={p.services.map((s) => ({
          label: s.title,
          href: `/services/${p.slug}/${s.slug}`,
          icon: p.icon,
        }))}
      />
      <NavGrid
        title="Related pillars"
        caption="Cross-links to the other service areas"
        columns={3}
        className="pt-0"
        items={related.map((r) => ({
          label: r.short,
          href: `/services/${r.slug}`,
          desc: r.blurb,
          icon: r.icon,
        }))}
      />
      <NextStep />
    </>
  );
}
