import type { Payload } from 'payload'

import { careerRoles, careersCopy, pillars } from './content'

/**
 * Loads the built-in site content (service categories, services, job openings,
 * site settings) into the CMS so every field becomes editable from /admin.
 *
 * Idempotent: anything already present is left untouched, so re-running never
 * overwrites an editor's changes.
 */
export const seedSiteContent = async (payload: Payload): Promise<string[]> => {
  const log: string[] = []

  /* ---- Service categories (pillars) + their services ---- */
  for (const [i, p] of pillars.entries()) {
    let pillarId: string | number

    const existingPillar = await payload.find({
      collection: 'service-pillars',
      where: { slug: { equals: p.slug } },
      limit: 1,
    })

    if (existingPillar.totalDocs === 0) {
      const created = await payload.create({
        collection: 'service-pillars',
        data: {
          slug: p.slug,
          title: p.title,
          short: p.short,
          blurb: p.blurb,
          subtext: p.subtext,
          icon: p.icon,
          order: i,
        },
      })
      pillarId = created.id
      log.push(`created service category: ${p.short}`)
    } else {
      pillarId = existingPillar.docs[0].id
      log.push(`service category exists: ${p.short}`)
    }

    for (const [j, s] of p.services.entries()) {
      const existingService = await payload.find({
        collection: 'services',
        where: { and: [{ slug: { equals: s.slug } }, { pillar: { equals: pillarId } }] },
        limit: 1,
      })
      if (existingService.totalDocs > 0) {
        log.push(`  service exists: ${s.title}`)
        continue
      }
      await payload.create({
        collection: 'services',
        data: {
          title: s.title,
          slug: s.slug,
          pillar: pillarId,
          order: j,
          summary: s.summary,
          lead: s.lead ?? null,
          body: s.body.map((text) => ({ text })),
          subsections: (s.subsections ?? []).map((sub) => ({ title: sub.title, body: sub.body })),
          tags: s.tags.map((label) => ({ label })),
        },
      })
      log.push(`  created service: ${s.title}`)
    }
  }

  /* ---- Job openings ---- */
  for (const [i, r] of careerRoles.entries()) {
    const existing = await payload.find({
      collection: 'jobs',
      where: { title: { equals: r.title } },
      limit: 1,
    })
    if (existing.totalDocs > 0) {
      log.push(`job exists: ${r.title}`)
      continue
    }
    await payload.create({
      collection: 'jobs',
      data: {
        title: r.title,
        locations: r.locations,
        type: r.type,
        icon: r.icon,
        body: r.body,
        active: true,
        order: i,
      },
    })
    log.push(`created job: ${r.title}`)
  }

  /* ---- Site settings ---- */
  const settings = (await payload.findGlobal({ slug: 'site-settings' })) as Record<string, unknown>
  if (!settings?.brandPrefix) {
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        brandPrefix: 'JB',
        brandSuffix: 'NewGen',
        tagline: 'Empowering Digital Future',
        careersIntro: careersCopy.intro,
        careersRolesEyebrow: careersCopy.rolesEyebrow,
        careersRolesTitle: careersCopy.rolesTitle,
        careersRolesIntro: careersCopy.rolesIntro,
        careersAddress: careersCopy.address,
      },
    })
    log.push('populated site settings')
  } else {
    log.push('site settings already populated')
  }

  return log
}
