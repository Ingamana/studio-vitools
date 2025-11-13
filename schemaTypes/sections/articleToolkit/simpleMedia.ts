import {defineType} from 'sanity'

export const sectionSimpleMedia = defineType({
  name: 'sectionSimpleMedia',
  title: 'Section — Simple Media',
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
        subtitle: 'Section — Simple Media',
      }
    },
  },
})
