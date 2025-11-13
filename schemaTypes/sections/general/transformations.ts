import {defineType} from 'sanity'

export const sectionTransformations = defineType({
  name: 'sectionTransformations',
  title: 'Section — Transformations',
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
        subtitle: 'Section — Transformations',
      }
    },
  },
})
