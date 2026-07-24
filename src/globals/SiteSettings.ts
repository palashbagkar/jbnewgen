import type { GlobalConfig } from 'payload'

/**
 * Site-wide settings: the brand mark used in the header and footer, plus the
 * Careers page copy that has to move whenever the open-role list changes.
 * Every field is optional — anything left blank falls back to the built-in value.
 */
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: {
    group: 'Site',
    description: 'Logo, brand wordmark and Careers page copy.',
  },
  access: { read: () => true },
  fields: [
    {
      type: 'collapsible',
      label: 'Logo & wordmark',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Logo mark',
          admin: {
            description:
              'Square image shown before the wordmark in the header and footer. Leave empty to keep the current mark.',
          },
        },
        {
          name: 'logoAlt',
          type: 'text',
          label: 'Logo alt text',
          admin: { description: 'Leave empty if the wordmark beside it already names the company.' },
        },
        {
          name: 'brandPrefix',
          type: 'text',
          label: 'Wordmark — accent part',
          admin: { description: 'Rendered in the brand orange. Currently "JB".' },
        },
        {
          name: 'brandSuffix',
          type: 'text',
          label: 'Wordmark — plain part',
          admin: { description: 'Rendered in the body colour. Currently "NewGen".' },
        },
        {
          name: 'tagline',
          type: 'text',
          admin: { description: 'Shown under the wordmark in the footer. Currently "Empowering Digital Future".' },
        },
      ],
    },
    {
      type: 'collapsible',
      label: 'Careers page',
      fields: [
        {
          name: 'careersIntro',
          type: 'textarea',
          label: 'Hero paragraph',
          admin: { description: 'The paragraph under the Careers headline — mentions how many roles are open.' },
        },
        {
          name: 'careersRolesEyebrow',
          type: 'text',
          label: 'Open-roles eyebrow',
          admin: { description: 'Small label above the role list. Currently "Open Roles".' },
        },
        {
          name: 'careersRolesTitle',
          type: 'text',
          label: 'Open-roles heading',
          admin: { description: 'Currently "5 current openings".' },
        },
        {
          name: 'careersRolesIntro',
          type: 'textarea',
          label: 'Open-roles intro',
        },
        {
          name: 'careersAddress',
          type: 'textarea',
          label: 'Footer address line',
          admin: { description: 'The single-line address printed at the bottom of the Careers page.' },
        },
      ],
    },
  ],
}
