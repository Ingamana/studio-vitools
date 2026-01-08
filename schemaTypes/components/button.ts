import {defineType} from 'sanity'
import {link} from './legacy/link'

export const button = defineType({
  name: 'button',
  title: 'Components - Button',
  type: 'object',
  fields: [
    // Current button fields (keep intact)
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'linkType',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          {title: 'External Link', value: 'externalLink'},
          {title: 'Internal Link', value: 'internalLink'},
        ],
        layout: 'radio',
      },
      defaultValue: 'internalLink',
    },
    {
      name: 'reference',
      title: 'Internal page link',
      type: 'reference',
      to: [
        {type: 'pages'},
        {type: 'articles'},
        {type: 'shop'},
        {type: 'product'},
        {type: 'stories'},
        {type: 'home'},
      ],
      hidden: ({parent}) => parent?.linkType !== 'internalLink',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
      description: 'External (https://...)',
      hidden: ({parent}) => parent?.linkType !== 'externalLink',
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
  preview: {
    select: {
      button_label: 'label',
      button_url: 'url',
      ref: 'reference',
      refSlug: 'reference.slug.current',
      refStoreSlug: 'reference.store.slug.current',
      refType: 'reference._type',
      type: 'linkType',
    },
    prepare: ({button_label, button_url, refSlug, refStoreSlug, ref, refType, type}) => {
      if (button_label && (button_url || ref)) {
        const refName = refSlug || refStoreSlug || refType || 'undefined'
        let subtitle = 'No link type chosen'
        if (type === 'externalLink') {
          subtitle = button_url
        } else if (type === 'internalLink') {
          subtitle = `Reference to ${refName}`
        }

        return {
          title: button_label,
          subtitle: subtitle,
        }
      }
      return {
        title: 'Button',
        subtitle: 'No content',
      }
    },
  },
})
