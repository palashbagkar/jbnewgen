import type { CollectionConfig } from 'payload'

import { ICON_OPTIONS } from './iconOptions'

/** Open roles listed on /careers. */
export const Jobs: CollectionConfig = {
  slug: 'jobs',
  labels: { singular: 'Job Opening', plural: 'Job Openings' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'locations', 'type', 'active', 'order'],
    group: 'Careers',
    description: 'Open roles on the Careers page. Untick "Listed" to hide a role without deleting it.',
  },
  access: { read: () => true },
  defaultSort: 'order',
  fields: [
    { name: 'title', type: 'text', required: true, label: 'Role title' },
    {
      name: 'locations',
      type: 'text',
      required: true,
      admin: { description: 'e.g. "Bangalore · Chennai · Hyderabad · Mumbai · DNCR · Kolkata".' },
    },
    {
      name: 'type',
      type: 'text',
      required: true,
      defaultValue: 'Remote',
      label: 'Work type',
      admin: { description: 'The badge on the role card, e.g. "Remote".' },
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
      label: 'Role description',
    },
    {
      name: 'icon',
      type: 'select',
      required: true,
      defaultValue: 'briefcase',
      options: ICON_OPTIONS,
      admin: { position: 'sidebar' },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      label: 'Listed',
      admin: { position: 'sidebar', description: 'Show this role on the Careers page.' },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Lower numbers appear first.' },
    },
  ],
}
