import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/services/ServiceDetail";
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

  return <ServiceDetail pillar={p} service={s} />;
}
