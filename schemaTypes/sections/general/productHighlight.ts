import {defineType} from 'sanity'

export const sectionProductHighlight = defineType({
  name: 'sectionProductHighlight',
  title: 'Section — Product Highlight',
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
        subtitle: 'Section — Product Highlight',
      }
    },
  },
})
