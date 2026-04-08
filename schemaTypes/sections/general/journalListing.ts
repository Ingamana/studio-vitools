import {defineType} from 'sanity'

export const sectionJournalListing = defineType({
  name: 'sectionJournalListing',
  title: 'Section — Journal Listing',
  type: 'object',
  fields: [
    {
      name: 'backgroundColor',
      type: 'sectionBackgroundColor',
    },
    {
      name: 'loadMoreAmount',
      title: 'Load More after how many articles?',
      description: 'Set to 0 to disable load more button',
      defaultValue: 4,
      initialValue: 4,
      type: 'number',
    },
    {
      name: 'curation',
      title: 'Curation',
      defaultValue: 'manual',
      initialValue: 'manual',
      type: 'string',
      description:
        'Automatic: articles are pulled automatically by date | Manual: select articles manually',
      options: {
        list: [
          {title: 'Automatic', value: 'automatic'},
          {title: 'Manual', value: 'manual'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'articles',
      title: 'Articles',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'articles'}]}],
      hidden: ({parent}) => parent?.curation === 'automatic',

      validation: (Rule) =>
        Rule.custom((value, context) => {
          const curation = (context.parent as any)?.curation

          if (curation === 'manual') {
            if (!value || value.length === 0) {
              return 'At least one article is required in manual mode'
            }
            if (value.length < 2) {
              return 'Please select at least 2 articles'
            }
          }
          return true
        }),
    },
  ],
  preview: {
    select: {
      articles: 'articles',
      variant: 'variant',
    },
    prepare({articles, variant}) {
      const title = `${articles?.length || 0} article(s) with ${variant} variant`
      return {
        title: title,
        subtitle: 'Section — Journal Listing',
      }
    },
  },
})
