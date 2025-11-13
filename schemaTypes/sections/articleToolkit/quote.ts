import {defineType} from 'sanity'

export const sectionQuote = defineType({
  name: 'sectionQuote',
  title: 'Section — Quote',
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
        subtitle: 'Section — Quote',
      }
    },
  },
})
