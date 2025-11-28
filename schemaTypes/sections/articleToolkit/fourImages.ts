import {defineType} from 'sanity'
import {ExternalImagePreview} from '../../../components/ExternalPreviewImage'

export const sectionFourImages = defineType({
  name: 'sectionFourImages',
  title: 'Section — Four Images',
  type: 'object',
  fields: [
    {
      name: 'medias',
      title: 'Medias',
      type: 'array',
      of: [{type: 'shopify.asset'}],
      validation: (rule) => rule.required().min(4).max(4),
    },
  ],
  preview: {
    select: {
      medias: 'medias',
    },
    prepare({title, medias}) {
      return {
        title: 'Four Images',
        subtitle: 'Section — Four Images',
        media: medias && medias.length > 0 ? medias[0].url : undefined,
      }
    },
  },
  components: {
    preview: ExternalImagePreview, // Add custom preview component
  },
})
