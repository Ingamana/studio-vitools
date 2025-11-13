import {defineType, defineField} from 'sanity'
import {link} from './legacy/link'

export const button = defineType({
  name: 'button',
  title: 'Components - Button',
  type: 'object',
  fields: [
    // Current button fields (keep intact)
    {
      name: 'button_label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'button_url',
      title: 'URL',
      type: 'string',
      description: 'Can be internal (/slug) or external (https://...)',
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
  preview: {
    select: {
      button_label: 'button_label',
      button_url: 'button_url',
    },
    prepare: ({button_label, button_url}) => {
      if (button_label && button_url) {
        return {
          title: button_label,
          subtitle: button_url,
        }
      }
      return {
        title: 'Button',
        subtitle: 'No content',
      }
    },
  },
})
