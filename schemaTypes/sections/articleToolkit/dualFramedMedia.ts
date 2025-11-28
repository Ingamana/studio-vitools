import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'
import {ExternalImagePreview} from '../../../components/ExternalPreviewImage'

export const sectionDualFramedMedia = defineType({
  name: 'sectionDualFramedMedia',
  title: 'Section — Media slider',
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
      name: 'medias',
      title: 'Medias',
      type: 'array',
      of: [
        defineType({
          name: 'dualMediaItem',
          type: 'object',
          fields: [
            {
              name: 'media',
              title: 'Media (larger frame)',
              type: 'shopify.asset',
              validation: (rule) => rule.required(),
            },
            {
              name: 'media2',
              title: 'Media (smaller frame)',
              type: 'shopify.asset',
              validation: (rule) => rule.required(),
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'customText',
              // validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'media',
            },
            prepare({title, media}) {
              return {
                title: title ? portableTextToPlainText(title) : 'Dual Media Item',
                subtitle: `Media Item`,
                media: media?.url ? media.url : undefined,
              }
            },
          },
          components: {
            preview: ExternalImagePreview, // Add custom preview component
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    },
  ],
  preview: {
    select: {
      medias: 'medias',
    },
    prepare({medias}) {
      return {
        title: `${medias?.length || 0} Media Items`,
        subtitle: 'Section — Media slider',
        media: medias && medias.length > 0 ? medias[0].media.url : undefined,
      }
    },
  },
  components: {
    preview: ExternalImagePreview, // Add custom preview component
  },
})
