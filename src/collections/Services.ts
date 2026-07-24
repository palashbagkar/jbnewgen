import type { CollectionConfig } from 'payload'

const slugify = (s = '') =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

/**
 * Individual services. Each belongs to one service category (pillar) and gets
 * its own page at /services/<pillar-slug>/<service-slug>.
 */
export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'pillar', 'order'],
    group: 'Services',
    description: 'Every service, its description and its focus areas.',
  },
  access: { read: () => true },
  defaultSort: 'order',
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'pillar',
      type: 'relationship',
      relationTo: 'service-pillars',
      required: true,
      label: 'Service category',
      admin: { position: 'sidebar' },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'URL segment: /services/<category>/<slug>. Auto-filled from the title.',
      },
      hooks: {
        beforeValidate: [({ value, data }) => value || slugify(data?.title as string)],
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Lower numbers appear first within the category.' },
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
      admin: { description: 'One-line summary shown in the category service list and under the page title.' },
    },
    {
      name: 'lead',
      type: 'textarea',
      admin: { description: 'Optional emphasised opening sentence on the service page.' },
    },
    {
      name: 'body',
      type: 'array',
      label: 'Description paragraphs',
      labels: { singular: 'Paragraph', plural: 'Paragraphs' },
      fields: [{ name: 'text', type: 'textarea', required: true }],
      admin: { description: 'The main write-up. One entry per paragraph.' },
    },
    {
      name: 'subsections',
      type: 'array',
      label: 'Sub-service cards',
      labels: { singular: 'Card', plural: 'Cards' },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'body', type: 'textarea', required: true },
      ],
      admin: {
        description: 'Optional nested cards (used by Expert Advisory for its functional specialists).',
      },
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Focus areas',
      labels: { singular: 'Focus area', plural: 'Focus areas' },
      fields: [{ name: 'label', type: 'text', required: true }],
      admin: { description: 'The chips shown on the category list and at the foot of the service page.' },
    },
  ],
}
