import type { Metadata } from "next";
import { PageHeader } from "@/components/nav/PageHeader";
import { NavGrid } from "@/components/nav/NavGrid";
import { NextStep } from "@/components/nav/NextStep";
import { Icon } from "@/components/ui/Icon";
import { searchPages } from "@/lib/content";

export const metadata: Metadata = { title: "Search" };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = query ? searchPages(query) : [];

  return (
    <>
      <PageHeader
        eyebrow="Search"
        title={query ? `Results for “${query}”` : "Search"}
        trail={[
          { label: "Home", href: "/" },
          { label: "Search", href: "/search" },
        ]}
        note={
          query
            ? `${results.length} page${results.length === 1 ? "" : "s"} matched.`
            : "Search every page in the site — services, team, insights and more."
        }
      >
        <form action="/search" role="search" className="flex w-full max-w-xl items-center gap-2 rounded-[7px] border border-ink-200 bg-white px-4 py-2 shadow-sm">
          <Icon name="search" size={20} className="shrink-0 text-ink-400" />
          <input
            type="search"
            name="q"
            defaultValue={query}
            autoFocus
            placeholder="Try “ceo”, “whatsapp”, “strategy”…"
            className="h-9 w-full bg-transparent text-ink-900 outline-none placeholder:text-ink-400"
          />
          <button type="submit" className="shrink-0 rounded-[7px] bg-flame-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-flame-600">
            Search
          </button>
        </form>
      </PageHeader>

      {query && results.length > 0 && (
        <NavGrid
          title="Matching pages"
          columns={2}
          items={results.map((r) => ({ label: r.title, href: r.href, desc: r.group, icon: "arrowUpRight" }))}
        />
      )}

      {query && results.length === 0 && (
        <NavGrid
          title="No matches — try these"
          caption={`Nothing matched “${query}”`}
          columns={3}
          items={[
            { label: "Services", href: "/services", desc: "All 4 pillars", icon: "compass" },
            { label: "About", href: "/about", desc: "Company, CEO & team", icon: "users" },
            { label: "Insights", href: "/insights", desc: "Articles", icon: "bulb" },
          ]}
        />
      )}

      {!query && (
        <NavGrid
          title="Popular destinations"
          columns={3}
          items={[
            { label: "Services", href: "/services", desc: "4 pillars", icon: "compass" },
            { label: "Our CEO", href: "/about/ceo", desc: "Joyjeet Bose", icon: "users" },
            { label: "Customer Communication", href: "/services/cpaas-omnichannel", desc: "WhatsApp, SMS, voice", icon: "chat" },
            { label: "Insights", href: "/insights", desc: "Articles & categories", icon: "bulb" },
            { label: "Careers", href: "/careers", desc: "Open roles", icon: "briefcase" },
            { label: "Get a quote", href: "/quote", desc: "Start a project", icon: "spark" },
          ]}
        />
      )}

      <NextStep />
    </>
  );
}
