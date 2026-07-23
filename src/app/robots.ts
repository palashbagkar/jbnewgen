import type { MetadataRoute } from 'next'

/** Keep the admin surface out of search engines. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/admin-verify', '/twofa'],
    },
    // sitemap: 'https://jbnewgen.com/sitemap.xml', // add once the domain is live
  }
}
