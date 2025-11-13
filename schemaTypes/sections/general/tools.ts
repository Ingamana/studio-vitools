import {defineType} from 'sanity'

export const sectionTools = defineType({
  name: 'sectionTools',
  title: 'Section — Tools',
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
        subtitle: 'Section — Tools',
      }
    },
  },
})
