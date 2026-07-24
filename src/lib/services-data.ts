import 'server-only'
import { getPayload } from 'payload'
import config from '@payload-config'

import {
  type ChallengeBlock,
  type CtaBlock,
  type FeatureBlock,
  type NavPillar,
  type Pillar,
  type Service,
  type ServiceHero,
  type StepBlock,
  type WhyBlock,
  pillars as staticPillars,
} from '@/lib/content'

/**
 * Server-side data layer for services, backed by Payload/Neon.
 *
 * The editable fields (categories, services, summaries, descriptions, focus
 * areas) come from the CMS. The narrative page blocks that were never made
 * editable — hero, challenge grid, why-us, feature grids, step timeline, CTA —
 * are matched from the static content in src/lib/content.ts by pillar slug.
 *
 * If the database is unreachable or still empty, everything falls back to the
 * static content, so the site renders identically to before the CMS existed.
 */

/** A pillar as the pages consume it: CMS fields + static narrative blocks. */
export type PillarView = {
  slug: string
  title: string
  short: string
  blurb: string
  subtext: string
  icon: string
  hero: ServiceHero
  servicesIntro: { label: string; title: string; intro: string }
  challenge?: ChallengeBlock
  why?: WhyBlock
  whyBeforeFeatures?: boolean
  features?: FeatureBlock[]
  steps?: StepBlock
  cta?: CtaBlock
  services: Service[]
}

export type { NavPillar }

const staticBySlug = new Map(staticPillars.map((p) => [p.slug, p]))

const fromStatic = (p: Pillar): PillarView => ({ ...p })

/* eslint-disable @typescript-eslint/no-explicit-any */
const toService = (d: any): Service => ({
  slug: d.slug,
  title: d.title,
  summary: d.summary ?? '',
  lead: d.lead || undefined,
  body: Array.isArray(d.body) ? d.body.map((b: any) => b?.text).filter(Boolean) : [],
  subsections: Array.isArray(d.subsections) && d.subsections.length
    ? d.subsections.map((s: any) => ({ title: s.title, body: s.body }))
    : undefined,
  tags: Array.isArray(d.tags) ? d.tags.map((t: any) => t?.label).filter(Boolean) : [],
})

const toPillar = (d: any, services: Service[]): PillarView => {
  const base = staticBySlug.get(d.slug)
  return {
    slug: d.slug,
    title: d.title,
    short: d.short,
    blurb: d.blurb,
    subtext: d.subtext,
    icon: d.icon,
    // Narrative blocks stay in code, keyed by slug. A category created in the
    // CMS has no static match, so its hero is composed from its own fields and
    // the remaining blocks are simply omitted rather than invented.
    hero: base?.hero ?? { badge: d.short, lead: '', accent: d.title, tail: '', sub: d.subtext },
    servicesIntro: base?.servicesIntro ?? { label: d.short, title: d.title, intro: d.subtext },
    challenge: base?.challenge,
    why: base?.why,
    whyBeforeFeatures: base?.whyBeforeFeatures,
    features: base?.features,
    steps: base?.steps,
    cta: base?.cta,
    services,
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/** Every service category with its services, ordered by the CMS "Order" field. */
export const getPillars = async (): Promise<PillarView[]> => {
  try {
    const payload = await getPayload({ config })
    const [pillarRes, serviceRes] = await Promise.all([
      payload.find({ collection: 'service-pillars', depth: 0, limit: 100, sort: 'order' }),
      payload.find({ collection: 'services', depth: 0, limit: 500, sort: 'order' }),
    ])
    if (pillarRes.docs.length === 0) return staticPillars.map(fromStatic)

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const byPillar = new Map<string, Service[]>()
    for (const doc of serviceRes.docs as any[]) {
      const key = typeof doc.pillar === 'object' && doc.pillar ? String(doc.pillar.id) : String(doc.pillar)
      const list = byPillar.get(key) ?? []
      list.push(toService(doc))
      byPillar.set(key, list)
    }
    return (pillarRes.docs as any[]).map((d) => toPillar(d, byPillar.get(String(d.id)) ?? []))
    /* eslint-enable @typescript-eslint/no-explicit-any */
  } catch {
    // No database configured (e.g. a build without DATABASE_URL) — serve the
    // static content rather than failing the render.
    return staticPillars.map(fromStatic)
  }
}

export const getPillarBySlug = async (slug: string): Promise<PillarView | undefined> => {
  const all = await getPillars()
  return all.find((p) => p.slug === slug)
}

export const serviceInPillar = (pillar: PillarView, slug: string): Service | undefined =>
  pillar.services.find((s) => s.slug === slug)

/** Strip the narrative blocks before handing pillars to a client component. */
export const toNavPillars = (list: PillarView[]): NavPillar[] =>
  list.map((p) => ({
    slug: p.slug,
    short: p.short,
    title: p.title,
    blurb: p.blurb,
    subtext: p.subtext,
    icon: p.icon,
    services: p.services.map((s) => ({ slug: s.slug, title: s.title })),
  }))

export const getNavPillars = async (): Promise<NavPillar[]> => toNavPillars(await getPillars())
