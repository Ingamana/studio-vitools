import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const sectionQuote = defineType({
  name: 'sectionQuote',
  title: 'Section — Quote',
  type: 'object',
  fields: [
    {
      name: 'fontFamily',
      title: 'Font family',
      initialValue: 'default',
      type: 'string',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Typewriter', value: 'typewriter'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    },
    {
      name: 'variant',
      title: 'Variant',
      type: 'string',
      initialValue: '8col',
      options: {
        list: [
          {title: 'Default', value: '8col'},
          {title: 'Large', value: '10col'},
          {title: 'Default (rounded)', value: 'rounded8col'},
          {title: 'Large (rounded)', value: 'rounded10col'},
        ],
        layout: 'radio',
      },
      description:
        '(rounded): adds rounded corners to the section, keep unticked if you want the section to be shown seamlessly inline.',
      validation: (rule) => rule.required(),
    },
    {
      name: 'backgroundColor',
      type: 'sectionBackgroundColor',
      description: 'Only useful when rounded section is ticked',
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'quoteAuthor',
      title: 'Quote Author',
      type: 'customText',
    },
  ],
  preview: {
    select: {
      quote: 'quote',
    },
    prepare({quote}) {
      return {
        title: `"${portableTextToPlainText(quote)}"`,
        subtitle: 'Section — Quote',
      }
    },
  },
})
