import {defineType} from 'sanity'

export const sectionFramedMedia = defineType({
  name: 'sectionFramedMedia',
  title: 'Section — Framed Media',
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
        subtitle: 'Section — Framed Media',
      }
    },
  },
})
