import {defineType} from 'sanity'

export const sectionMedia = defineType({
  name: 'sectionMedia',
  title: 'Section — Media',
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
        subtitle: 'Section — Media',
      }
    },
  },
})
