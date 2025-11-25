import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

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
    {
      name: 'description',
      title: 'Description',
      type: 'customText',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        defineType({
          name: 'productPerksCardItem',
          type: 'object',
          fields: [
            {
              name: 'backgroundColor',
              title: 'Background Color',
              type: 'color',
              defaultValue: {hex: '#FFFFFF'},
              options: {
                disableAlpha: true,
              },
              validation: (rule) => rule.required(),
            },
            {
              name: 'title',
              title: 'Title',
              type: 'title',
              validation: (rule) => rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'customText',
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
            prepare({title}) {
              return {
                title: portableTextToPlainText(title),
              }
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: portableTextToPlainText(title),
        subtitle: 'Section — Perks Cards Listing',
      }
    },
  },
})
