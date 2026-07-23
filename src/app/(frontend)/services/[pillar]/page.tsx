import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ChallengeGrid } from "@/components/services/ChallengeGrid";
import { ServiceList } from "@/components/services/ServiceList";
import { WhyGrid } from "@/components/services/WhyGrid";
import { FeatureGrid } from "@/components/services/FeatureGrid";
import { StepTimeline } from "@/components/services/StepTimeline";
import { ServiceCTA } from "@/components/services/ServiceCTA";
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

  const whyBlock = <WhyGrid {...p.why} />;
  const featureBlocks = p.features?.map((f) => <FeatureGrid key={f.title} {...f} />);
  const whyBeforeFeatures = p.whyBeforeFeatures ?? true;

  return (
    <>
      <ServiceHero {...p.hero} />
      <ChallengeGrid {...p.challenge} />
      <ServiceList pillar={p} />

      {whyBeforeFeatures ? (
        <>
          {whyBlock}
          {featureBlocks}
        </>
      ) : (
        <>
          {featureBlocks}
          {whyBlock}
        </>
      )}

      {p.steps && <StepTimeline {...p.steps} />}

      <ServiceCTA {...p.cta} />
    </>
  );
}
