import {defineType} from 'sanity'

export const sectionToolsComparison = defineType({
  name: 'sectionToolsComparison',
  title: 'Section — Tools Comparison',
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
        subtitle: 'Section — Tools Comparison',
      }
    },
  },
})
