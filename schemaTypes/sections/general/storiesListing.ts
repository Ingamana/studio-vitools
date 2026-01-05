import {defineType} from 'sanity'

export const sectionStoriesListing = defineType({
  name: 'sectionStoriesListing',
  title: 'Section — Stories Listing',
  type: 'object',
  fields: [
    {
      name: 'variant',
      title: 'Variant',
      defaultValue: 'default',
      initialValue: 'default',
      type: 'string',
      description: '"Variant 2" has typewriter font + framed medias',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Variant 2', value: 'variant-2'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'loadMoreAmount',
      title: 'Load More after how many stories?',
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
        'Automatic: stories are pulled automatically by date | Manual: select stories manually',
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
      name: 'stories',
      title: 'Stories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'stories'}]}],
      hidden: ({parent}) => parent?.curation === 'automatic',

      validation: (Rule) =>
        Rule.custom((value, context) => {
          const curation = (context.parent as any)?.curation

          if (curation === 'manual') {
            if (!value || value.length === 0) {
              return 'At least one story is required in manual mode'
            }
            if (value.length < 2) {
              return 'Please select at least 2 stories'
            }
          }
          return true
        }),
    },
  ],
  preview: {
    select: {
      stories: 'stories',
      variant: 'variant',
    },
    prepare({stories, variant}) {
      const title = `${stories?.length || 0} story(ies) with ${variant} variant`
      return {
        title: title,
        subtitle: 'Section — Stories Listing',
      }
    },
  },
})
