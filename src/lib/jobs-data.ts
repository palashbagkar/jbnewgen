import 'server-only'
import { getPayload } from 'payload'
import config from '@payload-config'

import { type Role, careerRoles as staticRoles } from '@/lib/content'

/** Open roles for /careers, from the CMS. Falls back to the static list when
 *  the database is empty or unreachable. */
export const getJobs = async (): Promise<Role[]> => {
  try {
    const payload = await getPayload({ config })
    const res = await payload.find({
      collection: 'jobs',
      depth: 0,
      limit: 200,
      sort: 'order',
      where: { active: { equals: true } },
    })
    if (res.docs.length === 0) return staticRoles
    /* eslint-disable @typescript-eslint/no-explicit-any */
    return (res.docs as any[]).map((d) => ({
      title: d.title,
      locations: d.locations,
      type: d.type,
      icon: d.icon,
      body: d.body,
    }))
    /* eslint-enable @typescript-eslint/no-explicit-any */
  } catch {
    return staticRoles
  }
}
