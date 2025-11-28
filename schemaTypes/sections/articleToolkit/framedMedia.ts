import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'
import {ExternalImagePreview} from '../../../components/ExternalPreviewImage'

export const sectionFramedMedia = defineType({
  name: 'sectionFramedMedia',
  title: 'Section — Framed Media',
  type: 'object',
  fields: [
    {
      name: 'media',
      title: 'Media',
      type: 'shopify.asset',
      validation: (rule) => rule.required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'customText',
    },
  ],
  preview: {
    select: {
      title: 'caption',
      media: 'media',
    },
    prepare({title, media}) {
      return {
        title: title ? portableTextToPlainText(title) : media.url,
        subtitle: 'Section — Simple Media',
        media: media.url ? media.url : undefined,
      }
    },
  },
  components: {
    preview: ExternalImagePreview, // Add custom preview component
  },
})
