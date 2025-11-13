import {defineType} from 'sanity'

export const sectionToolkitCTA = defineType({
  name: 'sectionToolkitCTA',
  title: 'Section — Toolkit CTA',
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
        subtitle: 'Section — Toolkit CTA',
      }
    },
  },
})
