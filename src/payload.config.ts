import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Categories } from './collections/Categories'
import { Insights } from './collections/Insights'
import { Jobs } from './collections/Jobs'
import { Media } from './collections/Media'
import { ServicePillars } from './collections/ServicePillars'
import { Services } from './collections/Services'
import { Users } from './collections/Users'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    // Swap every piece of Payload's own branding for the JB NewGen CMS mark:
    // login graphic, nav icon, browser tab icon and title, and link previews.
    components: {
      graphics: {
        Logo: '/components/admin/Logo#AdminLogo',
        Icon: '/components/admin/Icon#AdminIcon',
      },
    },
    meta: {
      title: 'JB NewGen CMS',
      titleSuffix: '· JB NewGen CMS',
      description: 'Content management for jbnewgen.com',
      icons: [{ rel: 'icon', type: 'image/png', url: '/images/logo-CMS.png' }],
      openGraph: {
        title: 'JB NewGen CMS',
        description: 'Content management for jbnewgen.com',
        images: [{ url: '/images/logo-CMS.png' }],
      },
    },
  },
  collections: [ServicePillars, Services, Jobs, Insights, Categories, Media, Users],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URL || '' },
  }),
  plugins: [
    // Media → Vercel Blob in production. Activates only when the token is set;
    // local disk is used in dev without it (same self-activating pattern as 2FA).
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  sharp,
})
