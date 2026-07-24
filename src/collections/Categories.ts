import type { CollectionConfig } from 'payload'

const slugify = (s = '') =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

/** Insight categories (Business & Strategy, Digital Marketing, ...). */
export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: { singular: 'Insight Category', plural: 'Insight Categories' },
  admin: { useAsTitle: 'title', group: 'Insights' },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      hooks: {
        beforeValidate: [({ value, data }) => value || slugify(data?.title as string)],
      },
    },
  ],
}
