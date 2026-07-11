import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/nav/PageHeader";
import { NavGrid } from "@/components/nav/NavGrid";
import { NextStep } from "@/components/nav/NextStep";
import { aboutChildren } from "@/lib/content";

const pages = aboutChildren.filter((c) => c.href !== "/about");

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.href.split("/").pop()! }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pages.find((p) => p.href.endsWith(`/${slug}`));
  return { title: page ? `${page.label} · About` : "About" };
}

export default async function AboutChildPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = pages.find((p) => p.href.endsWith(`/${slug}`));
  if (!page) notFound();

  const siblings = pages.filter((p) => p.href !== page.href);

  return (
    <>
      <PageHeader
        eyebrow="About"
        title={page.label}
        trail={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: page.label, href: page.href },
        ]}
        note={page.desc}
      />
      <NavGrid
        title="Elsewhere in About"
        caption="Sibling pages"
        columns={3}
        items={[
          { label: "About — Overview", href: "/about", desc: "Back to the hub", icon: "arrowRight" },
          ...siblings.map((s) => ({ label: s.label, href: s.href, desc: s.desc, icon: "users" as const })),
        ]}
      />
      <NextStep />
    </>
  );
}
