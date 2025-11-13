import {defineType} from 'sanity'

export const sectionIntro = defineType({
  name: 'sectionIntro',
  title: 'Section — Intro',
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
        subtitle: 'Section — Intro',
      }
    },
  },
})
