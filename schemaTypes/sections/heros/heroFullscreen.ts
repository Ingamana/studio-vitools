import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const heroFullscreen = defineType({
  name: 'heroFullscreen',
  title: 'Hero — Fullscreen',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'button',
    },
    {
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'button',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: portableTextToPlainText(title),
        subtitle: 'Hero — Fullscreen',
      }
    },
  },
})
