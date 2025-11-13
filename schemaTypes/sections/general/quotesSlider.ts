import {defineType} from 'sanity'

export const sectionQuotesSlider = defineType({
  name: 'sectionQuotesSlider',
  title: 'Section — Quotes Slider',
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
        subtitle: 'Section — Quotes Slider',
      }
    },
  },
})
