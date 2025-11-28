import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'
import {ExternalImagePreview} from '../../../components/ExternalPreviewImage'

export const sectionTextMedia = defineType({
  name: 'sectionTextMedia',
  title: 'Section — Text Media',
  type: 'object',
  fields: [
    {
      name: 'backgroundColor',
      type: 'sectionBackgroundColor',
    },
    {
      name: 'isReverted',
      title: 'Is reverted',
      type: 'boolean',
      description: 'Reverted puts the media on the left side.',
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
      name: 'button',
      title: 'Button',
      type: 'button',
    },
    {
      name: 'media',
      title: 'Media',
      type: 'shopify.asset',
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
        subtitle: 'Section — Text Media',
        media: media?.url ? media.url : undefined,
      }
    },
  },
  components: {
    preview: ExternalImagePreview, // Add custom preview component
  },
})
