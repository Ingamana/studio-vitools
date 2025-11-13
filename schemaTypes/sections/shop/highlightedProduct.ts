import {defineType} from 'sanity'

export const sectionHighlightedProduct = defineType({
  name: 'sectionHighlightedProduct',
  title: 'Section — Highlighted Product',
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
        subtitle: 'Section — Highlighted Product',
      }
    },
  },
})
