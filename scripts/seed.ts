/**
 * One-off seed: initialise the DB schema, create the first admin user, and the
 * three insight categories. Idempotent — safe to re-run.
 * Run with:  npx payload run scripts/seed.ts
 */
import { getPayload } from 'payload'
import config from '../src/payload.config'

const CATEGORIES = [
  { slug: 'business-strategy', title: 'Business & Strategy' },
  { slug: 'digital-marketing', title: 'Digital Marketing' },
  { slug: 'digital-transformation', title: 'Digital Transformation' },
]

const run = async () => {
  const payload = await getPayload({ config })

  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD
  if (!email || !password) throw new Error('ADMIN_EMAIL / ADMIN_PASSWORD missing from env')

  const existingAdmin = await payload.find({
    collection: 'users',
    where: { email: { equals: email } },
    limit: 1,
  })
  if (existingAdmin.totalDocs === 0) {
    await payload.create({ collection: 'users', data: { email, password, name: 'Admin' } })
    console.log(`✓ created admin user: ${email}`)
  } else {
    console.log(`• admin user already exists: ${email}`)
  }

  for (const c of CATEGORIES) {
    const existing = await payload.find({
      collection: 'categories',
      where: { slug: { equals: c.slug } },
      limit: 1,
    })
    if (existing.totalDocs === 0) {
      await payload.create({ collection: 'categories', data: c })
      console.log(`✓ created category: ${c.title}`)
    } else {
      console.log(`• category exists: ${c.title}`)
    }
  }

  console.log('Seed complete.')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
