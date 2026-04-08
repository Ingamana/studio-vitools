import {defineType} from 'sanity'

export const sectionCommunityStoriesSlider = defineType({
  name: 'sectionCommunityStoriesSlider',
  title: 'Section — Community Stories Slider',
  type: 'object',
  fields: [
    {
      name: 'backgroundColor',
      type: 'sectionBackgroundColor',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            // {title: 'Normal', value: 'normal'},
          ],
          marks: {
            decorators: [
              // {title: 'Emphasis', value: 'em'},
              // {title: 'Superscript', value: 'sup'},
            ],
            annotations: [], // Disable annotations like links
          },
        },
      ],
      validation: (rule) => rule.required(),
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
        subtitle: 'Section — Community Stories Slider',
      }
    },
  },
})
