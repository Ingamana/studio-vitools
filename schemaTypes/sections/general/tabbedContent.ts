import {defineType} from 'sanity'

export const sectionTabbedContent = defineType({
  name: 'sectionTabbedContent',
  title: 'Section — Tabbed Content',
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
        subtitle: 'Section — Tabbed Content',
      }
    },
  },
})
