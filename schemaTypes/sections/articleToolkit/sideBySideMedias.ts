import {defineType} from 'sanity'
import {ExternalImagePreview} from '../../../components/ExternalPreviewImage'

export const sectionSideBySideMedias = defineType({
  name: 'sectionSideBySideMedias',
  title: 'Section — Side By Side Medias',
  type: 'object',
  fields: [
    {
      name: 'roundedSection',
      title: 'Rounded section',
      type: 'boolean',
      initialValue: false,
      description:
        'Adds rounded corners to the section, keep unticked if you want the section to be shown seamlessly inline.',
    },
    {
      name: 'backgroundColor',
      type: 'sectionBackgroundColor',
      description: 'Only useful when rounded section is ticked',
    },
    {
      name: 'bordered',
      title: 'Bordered',
      type: 'boolean',
      initialValue: false,
      description: 'Add a border around the medias',
    },
    {
      name: 'media',
      title: 'Media (left)',
      type: 'shopify.asset',
      description: 'Expected aspect-ratio: 1:1',
      validation: (rule) => rule.required(),
    },
    {
      name: 'mediaCaption',
      title: 'Media (left) caption',
      type: 'string',
      description: 'Displayed under media (left)',
    },
    {
      name: 'media2',
      title: 'Media (right)',
      type: 'shopify.asset',
      description: 'Expected aspect-ratio: 1:1',
      validation: (rule) => rule.required(),
    },
    {
      name: 'media2caption',
      title: 'Media (right) caption',
      type: 'string',
      description: 'Displayed under media (right)',
    },
  ],
  preview: {
    select: {
      media: 'media',
    },
    prepare({media}) {
      return {
        title: 'Side By Side Medias',
        subtitle: 'Section — Side By Side Medias',
        media: media?.url ? media.url : undefined,
      }
    },
  },
  components: {
    preview: ExternalImagePreview, // Add custom preview component
  },
})
