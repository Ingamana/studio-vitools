import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'
import {ExternalImagePreview} from '../../../components/ExternalPreviewImage'

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
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        defineType({
          name: 'heroFullscreenButtons',
          type: 'object',
          fields: [
            {
              name: 'button',
              title: 'Button',
              type: 'button',
              validation: (rule) => rule.required(),
            },
            {
              name: 'variant',
              title: 'Variant',
              type: 'string',
              description: 'Choose the button style variant',
              defaultValue: 'tertiary',
              options: {
                list: [
                  {title: 'Green', value: 'primary'},
                  {title: 'Black', value: 'secondary'},
                  {title: 'White', value: 'tertiary'},
                  {title: 'Light grey', value: 'quaternary'},
                ],
                layout: 'radio',
              },
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              label: 'button.label',
              variant: 'variant',
            },
            prepare({label, variant}) {
              return {
                title: label,
                subtitle: `${variant} variant`,
              }
            },
          },
        }),
      ],
      options: {
        sortable: true,
      },
    },
    {
      name: 'media',
      title: 'Media asset',
      type: 'shopify.asset',
      validation: (rule) => rule.required(),
    },
    {
      name: 'theme',
      title: 'Text Theme',
      description: 'Light = white text, Dark = dark text',
      defaultValue: 'light',
      type: 'string',
      options: {
        list: [
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'media',
    },
    prepare({title, media}) {
      return {
        title: portableTextToPlainText(title),
        subtitle: 'Hero — Fullscreen',
        media: media.url ? media.url : undefined,
      }
    },
  },
  components: {
    preview: ExternalImagePreview, // Add custom preview component
  },
})
