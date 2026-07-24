import type { CollectionConfig } from 'payload'

import { ICON_OPTIONS } from './iconOptions'

const slugify = (s = '') =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

/**
 * Service categories — the four pillars that group every service
 * (Business Consultancy, Tech Readiness, Visibility & Demand, Customer Communication).
 *
 * The narrative blocks on a pillar page (hero, challenge, why-us, feature grids,
 * step timeline, CTA) stay in src/lib/content.ts and are matched to the pillar by
 * slug — only the fields below are editable here.
 */
export const ServicePillars: CollectionConfig = {
  slug: 'service-pillars',
  labels: { singular: 'Service Category', plural: 'Service Categories' },
  admin: {
    useAsTitle: 'short',
    defaultColumns: ['short', 'title', 'slug', 'order'],
    group: 'Services',
    description: 'The pillars that group services. Reorder with the "Order" field.',
  },
  access: { read: () => true },
  defaultSort: 'order',
  fields: [
    {
      name: 'short',
      type: 'text',
      required: true,
      label: 'Short name',
      admin: { description: 'Used in navigation, breadcrumbs and cards, e.g. "Tech Readiness".' },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Full title',
      admin: { description: 'The long headline, e.g. "Tech Readiness Services".' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'URL segment: /services/<slug>. Changing this changes the live URL.',
      },
      hooks: {
        beforeValidate: [({ value, data }) => value || slugify(data?.short as string)],
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Lower numbers appear first.' },
    },
    {
      name: 'icon',
      type: 'select',
      required: true,
      defaultValue: 'compass',
      options: ICON_OPTIONS,
      admin: { position: 'sidebar' },
    },
    {
      name: 'blurb',
      type: 'text',
      required: true,
      label: 'One-line blurb',
      admin: { description: 'Short line under the pillar name on cards, e.g. "Amplify your brand and pipeline."' },
    },
    {
      name: 'subtext',
      type: 'textarea',
      required: true,
      label: 'Intro paragraph',
      admin: { description: 'The paragraph shown beside the pillar visual on the homepage.' },
    },
  ],
}
