import {defineType} from 'sanity'

export const sectionText = defineType({
  name: 'sectionText',
  title: 'Section — Text',
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
        subtitle: 'Section — Text',
      }
    },
  },
})
