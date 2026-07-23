import 'server-only'
import { getPayload } from 'payload'
import config from '@payload-config'

import { type Article, articles as staticArticles } from '@/lib/content'

/**
 * Server-side data layer for Insights, backed by Payload/Neon.
 * Returns the Article shape the existing UI components consume; the article
 * page renders the raw Lexical body via <LexicalBody />.
 */

// Fallback cover images from the original static content, keyed by slug, used
// until images are re-uploaded through the CMS (Vercel Blob step).
const fallbackImage = new Map(staticArticles.map((a) => [a.slug, a.image]))

const getClient = async () => getPayload({ config })

const fmtDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

/* eslint-disable @typescript-eslint/no-explicit-any */
const toArticle = (d: any): Article => {
  const category =
    d.category && typeof d.category === 'object' ? (d.category.slug as string) : String(d.category ?? '')
  const cover = d.coverImage && typeof d.coverImage === 'object' ? (d.coverImage.url as string) : undefined
  return {
    slug: d.slug,
    title: d.title,
    category,
    image: cover ?? fallbackImage.get(d.slug) ?? undefined,
    date: fmtDate(d.date),
    readMins: d.readMins ?? 0,
    excerpt: d.excerpt,
  }
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/** All published insights, newest first. */
export const getInsights = async (): Promise<Article[]> => {
  const payload = await getClient()
  const res = await payload.find({ collection: 'insights', depth: 1, limit: 200, sort: '-date' })
  return res.docs.map(toArticle)
}

/** One published insight + its raw Lexical body, or null. */
export const getInsightBySlug = async (
  slug: string,
): Promise<{ article: Article; body: unknown } | null> => {
  const payload = await getClient()
  const res = await payload.find({
    collection: 'insights',
    depth: 1,
    limit: 1,
    where: { slug: { equals: slug } },
  })
  const d = res.docs[0]
  if (!d) return null
  return { article: toArticle(d), body: (d as { body?: unknown }).body }
}

/** Published insights within a category slug, newest first. */
export const getInsightsInCategory = async (categorySlug: string): Promise<Article[]> => {
  const all = await getInsights()
  return all.filter((a) => a.category === categorySlug)
}
