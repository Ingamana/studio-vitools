import {defineType} from 'sanity'

export const sectionList = defineType({
  name: 'sectionList',
  title: 'Section — List',
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
        subtitle: 'Section — List',
      }
    },
  },
})
