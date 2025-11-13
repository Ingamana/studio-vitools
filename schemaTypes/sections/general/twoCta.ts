import {defineType} from 'sanity'

export const sectionTwoCta = defineType({
  name: 'sectionTwoCta',
  title: 'Section — Two CTA',
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
        subtitle: 'Section — Two CTA',
      }
    },
  },
})
