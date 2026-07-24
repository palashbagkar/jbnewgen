import type { Block, CollectionConfig } from 'payload'
import { BlocksFeature, UploadFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

const slugify = (s = '') =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

/** Embeddable interactive graph — rendered client-side (Recharts) from config,
 *  so charts stay live & editable rather than being flattened to an image. */
const ChartBlock: Block = {
  slug: 'chart',
  interfaceName: 'ChartBlock',
  labels: { singular: 'Chart / Graph', plural: 'Charts / Graphs' },
  fields: [
    {
      name: 'kind',
      type: 'select',
      required: true,
      defaultValue: 'bar',
      options: [
        { label: 'Bar', value: 'bar' },
        { label: 'Line', value: 'line' },
        { label: 'Area', value: 'area' },
        { label: 'Pie', value: 'pie' },
      ],
    },
    { name: 'title', type: 'text' },
    {
      name: 'data',
      type: 'json',
      required: true,
      admin: {
        description: 'Array, e.g. [{ "label": "2024", "value": 120 }, { "label": "2025", "value": 260 }]',
      },
    },
    { name: 'caption', type: 'text' },
  ],
}

/** Insights = articles + archived posts. One collection, filtered by date/status.
 *  Field set mirrors the existing Article model in src/lib/content.ts. */
export const Insights: CollectionConfig = {
  slug: 'insights',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'date', '_status'],
    group: 'Insights',
    description: 'Articles & archived insights.',
  },
  versions: { drafts: true },
  access: { read: () => true },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'Auto-filled from the title; edit if you need a custom URL.',
      },
      hooks: {
        beforeValidate: [({ value, data }) => value || slugify(data?.title as string)],
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      label: 'Publication date',
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'dayOnly', displayFormat: 'MMMM d, yyyy' },
      },
    },
    {
      name: 'readMins',
      type: 'number',
      label: 'Read time (mins)',
      admin: { position: 'sidebar' },
    },
    { name: 'coverImage', type: 'upload', relationTo: 'media' },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      admin: { description: 'Card preview + article lead — the verbatim opening line(s).' },
    },
    {
      name: 'body',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          UploadFeature(),
          BlocksFeature({ blocks: [ChartBlock] }),
        ],
      }),
    },
  ],
}
