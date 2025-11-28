import {defineType} from 'sanity'

export const meta = defineType({
  name: 'meta',
  title: 'Components - Meta',
  type: 'object',
  description: 'For SEO & Social sharing',
  fields: [
    {
      name: 'meta_title',
      title: 'Meta title',
      type: 'string',
      validation: (rule) => rule.max(140),
    },
    {
      name: 'meta_description',
      title: 'Meta description',
      type: 'text',
      validation: (rule) => rule.max(140),
    },
    {
      name: 'meta_images',
      title: 'Open Graph / Social Media Images',
      type: 'array',
      of: [
        {
          type: 'shopify.asset',
        },
      ],
      validation: (Rule) => Rule.min(1).max(10), // at least 1, at most 10
      options: {
        layout: 'grid', // nice grid view in Studio
      },
    },
  ],
})
