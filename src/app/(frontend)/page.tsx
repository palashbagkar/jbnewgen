import { Hero } from "@/components/home/Hero";
import { ProofBar } from "@/components/home/ProofBar";
import { Problem } from "@/components/home/Problem";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { Testimonials } from "@/components/home/Testimonials";
import { FounderBand } from "@/components/home/FounderBand";
import { GetInTouch } from "@/components/home/GetInTouch";
import { Newsletter } from "@/components/home/Newsletter";
import { FeaturedInsights } from "@/components/home/FeaturedInsights";
import { getNavPillars } from "@/lib/services-data";

export default async function HomePage() {
  const pillars = await getNavPillars();

  return (
    <>
      <Hero />
      <ProofBar />
      <Problem />
      <ServicesShowcase pillars={pillars} />
      <Testimonials />
      <FounderBand />
      <GetInTouch />
      <FeaturedInsights />
      <Newsletter />
    </>
  );
}
