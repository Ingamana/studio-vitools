import {defineType} from 'sanity'

export const sectionHowItWorks = defineType({
  name: 'sectionHowItWorks',
  title: 'Section — How It Works',
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
        subtitle: 'Section — How It Works',
      }
    },
  },
})
