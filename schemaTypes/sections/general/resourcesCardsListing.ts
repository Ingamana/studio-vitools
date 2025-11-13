import {defineType} from 'sanity'

export const sectionResourcesCardsListing = defineType({
  name: 'sectionResourcesCardsListing',
  title: 'Section — Resources Cards Listing',
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
        subtitle: 'Section — Resources Cards Listing',
      }
    },
  },
})
