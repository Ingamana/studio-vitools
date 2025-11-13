import {defineType} from 'sanity'

export const sectionTextMedia = defineType({
  name: 'sectionTextMedia',
  title: 'Section — Text Media',
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
        subtitle: 'Section — Text Media',
      }
    },
  },
})
