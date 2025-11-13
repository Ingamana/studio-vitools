import {defineType} from 'sanity'

export const sectionProductsListing = defineType({
  name: 'sectionProductsListing',
  title: 'Section — Products Listing',
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
        subtitle: 'Section — Products Listing',
      }
    },
  },
})
