import Link from "next/link";
import { aboutChildren, categories, pillars, site } from "@/lib/content";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "./Logo";

/** Footer doubles as a complete sitemap - every cluster reachable from any page. */
export function Footer() {
  const year = new Date().getFullYear();

  const columns: { title: string; links: { label: string; href: string }[] }[] = [
    {
      title: "About",
      links: aboutChildren.map((c) => ({ label: c.label, href: c.href })),
    },
    {
      title: "Services",
      links: [
        { label: "All Services", href: "/services" },
        ...pillars.map((p) => ({ label: p.short, href: `/services/${p.slug}` })),
      ],
    },
    {
      title: "Insights",
      links: [
        { label: "All Insights", href: "/insights" },
        ...categories.map((c) => ({ label: c.title, href: `/insights/category/${c.slug}` })),
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Get a quote", href: "/quote" },
        { label: "Search", href: "/search" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink-950 pb-24 text-ink-200 sm:pb-0">
      <div className="pointer-events-none absolute inset-0 mesh opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 py-16 md:grid-cols-[1.3fr_2.6fr]">
          <Reveal variant="pop">
            <Logo light withTagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-300">
              Your India Go-To-Market partner. This footer is a full sitemap - every page is one
              click away.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
                <Icon name="phone" size={16} className="text-flame-400" />
                {site.phone}
              </a>
              <a href={`mailto:${site.emails.sales}`} className="inline-flex items-center gap-2 hover:text-white">
                <Icon name="mail" size={16} className="text-flame-400" />
                {site.emails.sales}
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-[7px] border border-white/15 text-ink-200 transition-colors hover:border-flame-400 hover:text-flame-400">
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-white">{col.title}</h4>
                <ul className="mt-5 space-y-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link href={l.href} className="text-ink-300 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-sm text-ink-400 sm:flex-row">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p>{site.domain} · Navigation prototype</p>
        </div>
      </div>
    </footer>
  );
}
