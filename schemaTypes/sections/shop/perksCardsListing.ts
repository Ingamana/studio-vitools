import {defineType} from 'sanity'

export const sectionPerksCardsListing = defineType({
  name: 'sectionPerksCardsListing',
  title: 'Section — Perks Cards Listing',
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
        subtitle: 'Section — Perks Cards Listing',
      }
    },
  },
})
