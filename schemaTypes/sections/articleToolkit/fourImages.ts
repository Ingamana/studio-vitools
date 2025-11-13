import {defineType} from 'sanity'

export const sectionFourImages = defineType({
  name: 'sectionFourImages',
  title: 'Section — Four Images',
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
        subtitle: 'Section — Four Images',
      }
    },
  },
})
