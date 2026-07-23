import type { CollectionConfig } from 'payload'

/** Uploaded images (article covers, in-body images, exported graph PNGs).
 *  Local disk in dev; swapped to Vercel Blob for production (see todo). */
export const Media: CollectionConfig = {
  slug: 'media',
  access: { read: () => true },
  upload: true,
  fields: [
    { name: 'alt', type: 'text', label: 'Alt text' },
    { name: 'caption', type: 'text' },
  ],
}
