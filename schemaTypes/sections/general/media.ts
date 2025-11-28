import {defineType} from 'sanity'
import {ExternalImagePreview} from '../../../components/ExternalPreviewImage'

export const sectionMedia = defineType({
  name: 'sectionMedia',
  title: 'Section — Media',
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
      // validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'media',
    },
    prepare({title, media}) {
      return {
        title: title,
        subtitle: 'Section — Media',
        media: media,
      }
    },
  },
  components: {
    preview: ExternalImagePreview, // Add custom preview component
  },
})
