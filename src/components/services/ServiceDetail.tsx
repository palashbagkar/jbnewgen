import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { NavGrid } from "@/components/nav/NavGrid";
import { ServiceCTA } from "./ServiceCTA";
import type { Service } from "@/lib/content";
import type { PillarView } from "@/lib/services-data";

/** Sub-service detail template: dark header (white breadcrumb + orange title),
 *  the writeup, its focus areas, sibling navigation, and the pillar CTA. */
export function ServiceDetail({ pillar, service }: { pillar: PillarView; service: Service }) {
  const siblings = pillar.services.filter((x) => x.slug !== service.slug);
  const trail = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: pillar.short, href: `/services/${pillar.slug}` },
    { label: service.title, href: `/services/${pillar.slug}/${service.slug}` },
  ];

  return (
    <>
      {/* ---- Dark header: white breadcrumb, orange service title ---- */}
      <header className="relative overflow-hidden bg-ink-950 text-white">
        <div className="pointer-events-none absolute inset-0 mesh opacity-45" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-[7px] bg-flame-500/12 blur-3xl" />

        <div className="relative mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-24">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
              {trail.map((c, i) => {
                const last = i === trail.length - 1;
                return (
                  <li key={c.href} className="flex items-center gap-1.5">
                    {i > 0 && <Icon name="chevronDown" size={14} className="-rotate-90 text-white/40" />}
                    {last ? (
                      <span className="font-medium text-white" aria-current="page">
                        {c.label}
                      </span>
                    ) : (
                      <Link href={c.href} className="text-white/70 transition-colors hover:text-flame-300">
                        {c.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-flame-400 sm:text-5xl">
            {service.title}
          </h1>
          {service.summary && (
            <p className="mt-5 max-w-2xl text-pretty text-lg text-ink-200">{service.summary}</p>
          )}
        </div>
      </header>

      {/* ---- Writeup ---- */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          {service.lead && (
            <p className="text-pretty text-xl font-medium leading-relaxed text-ink-800">{service.lead}</p>
          )}

          <div className="mt-6 space-y-5">
            {service.body.map((para, i) => (
              <p key={i} className="text-pretty leading-relaxed text-ink-600">
                {para}
              </p>
            ))}
          </div>

          {service.subsections && (
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {service.subsections.map((sub) => (
                <Reveal key={sub.title} variant="pop">
                  <div className="card h-full p-6">
                    <h3 className="font-semibold text-ink-900">{sub.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">{sub.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {service.tags.length > 0 && (
            <div className="mt-10 border-t border-ink-100 pt-6">
              <p className="eyebrow mb-3">Focus areas</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink-100 bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <NavGrid
        title={`More in ${pillar.short}`}
        caption="Sibling services + back to the pillar overview"
        columns={3}
        className="pt-0"
        items={[
          {
            label: `${pillar.short} - Overview`,
            href: `/services/${pillar.slug}`,
            desc: "Back to the pillar",
            icon: "arrowRight",
          },
          ...siblings.map((x) => ({
            label: x.title,
            href: `/services/${pillar.slug}/${x.slug}`,
            icon: pillar.icon,
          })),
        ]}
      />

      {pillar.cta && <ServiceCTA {...pillar.cta} />}
    </>
  );
}
