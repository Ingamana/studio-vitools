import {defineType} from 'sanity'

export const sectionNewsletter = defineType({
  name: 'sectionNewsletter',
  title: 'Section — Newsletter',
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
        subtitle: 'Section — Newsletter',
      }
    },
  },
})
