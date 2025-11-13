import {defineType} from 'sanity'

export const sectionDualFramedMedia = defineType({
  name: 'sectionDualFramedMedia',
  title: 'Section — Dual Framed Media',
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
        subtitle: 'Section — Dual Framed Media',
      }
    },
  },
})
