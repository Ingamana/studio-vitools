import {defineType} from 'sanity'

export const sectionArticlesListing = defineType({
  name: 'sectionArticlesListing',
  title: 'Section — Articles Listing',
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
        subtitle: 'Section — Articles Listing',
      }
    },
  },
})
