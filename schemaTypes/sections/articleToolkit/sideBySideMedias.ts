import {defineType} from 'sanity'

export const sectionSideBySideMedias = defineType({
  name: 'sectionSideBySideMedias',
  title: 'Section — Side By Side Medias',
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
        subtitle: 'Section — Side By Side Medias',
      }
    },
  },
})
