import 'server-only'
import { getPayload } from 'payload'
import config from '@payload-config'

import { brand, careersCopy } from '@/lib/content'

export type SiteSettingsView = {
  logoUrl?: string
  logoAlt: string
  brandPrefix: string
  brandSuffix: string
  tagline: string
  careers: {
    intro: string
    rolesEyebrow: string
    rolesTitle: string
    rolesIntro: string
    address: string
  }
}

const defaults: SiteSettingsView = {
  logoUrl: undefined,
  logoAlt: brand.logoAlt,
  brandPrefix: brand.prefix,
  brandSuffix: brand.suffix,
  tagline: brand.tagline,
  careers: {
    intro: careersCopy.intro,
    rolesEyebrow: careersCopy.rolesEyebrow,
    rolesTitle: careersCopy.rolesTitle,
    rolesIntro: careersCopy.rolesIntro,
    address: careersCopy.address,
  },
}

/** Site-wide settings from the CMS. Every blank field falls back to the
 *  built-in value, so a partially filled global never blanks the site. */
export const getSiteSettings = async (): Promise<SiteSettingsView> => {
  try {
    const payload = await getPayload({ config })
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const d = (await payload.findGlobal({ slug: 'site-settings', depth: 1 })) as any
    const logo = d?.logo && typeof d.logo === 'object' ? (d.logo.url as string | undefined) : undefined
    return {
      logoUrl: logo || undefined,
      logoAlt: d?.logoAlt || defaults.logoAlt,
      brandPrefix: d?.brandPrefix || defaults.brandPrefix,
      brandSuffix: d?.brandSuffix || defaults.brandSuffix,
      tagline: d?.tagline || defaults.tagline,
      careers: {
        intro: d?.careersIntro || defaults.careers.intro,
        rolesEyebrow: d?.careersRolesEyebrow || defaults.careers.rolesEyebrow,
        rolesTitle: d?.careersRolesTitle || defaults.careers.rolesTitle,
        rolesIntro: d?.careersRolesIntro || defaults.careers.rolesIntro,
        address: d?.careersAddress || defaults.careers.address,
      },
    }
    /* eslint-enable @typescript-eslint/no-explicit-any */
  } catch {
    return defaults
  }
}
