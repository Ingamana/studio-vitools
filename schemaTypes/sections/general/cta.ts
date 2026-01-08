import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const sectionCta = defineType({
  name: 'sectionCta',
  title: 'Section — CTA',
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
      type: 'customText',
      validation: (rule) => rule.required(),
    },
    {
      name: 'buttonPrimary',
      title: 'Button',
      type: 'button',
    },
    {
      name: 'subText',
      title: 'Text below button',
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
        subtitle: 'Section — CTA',
      }
    },
  },
})
