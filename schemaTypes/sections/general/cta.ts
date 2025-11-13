import {defineType} from 'sanity'

export const sectionCta = defineType({
  name: 'sectionCta',
  title: 'Section — Cta',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'title',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title,
        subtitle: 'Section — Cta',
      }
    },
  },
})
