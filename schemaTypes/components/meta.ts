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
      name: 'meta_image',
      title: 'Meta image',
      type: 'image',
      options: {
        accept: 'image/jpg, image/jpeg, image/png',
      },
    },
  ],
})
