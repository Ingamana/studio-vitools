import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'
import {ExternalImagePreview} from '../../../components/ExternalPreviewImage'

export const sectionTransformations = defineType({
  name: 'sectionTransformations',
  title: 'Section — Transformations',
  type: 'object',
  fields: [
    {
      name: 'backgroundColor',
      type: 'sectionBackgroundColor',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        defineType({
          name: 'transformationCardItem',
          type: 'object',
          components: {
            preview: ExternalImagePreview, // Add custom preview component
          },
          fields: [
            {
              name: 'media',
              title: 'Media',
              type: 'shopify.asset',
              description: 'Expected aspect-ratio: 1:1',
              validation: (rule) => rule.required(),
            },
            {
              name: 'title',
              title: 'Title',
              type: 'title',
              validation: (rule) => rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'customText',
            },
            {
              name: 'button',
              title: 'Button',
              type: 'button',
            },
          ],
          preview: {
            select: {
              title: 'title',
              description: 'description',
              image: 'media',
            },
            prepare({title, description, image}) {
              return {
                title: portableTextToPlainText(title),
                subtitle: portableTextToPlainText(description),
                media: image?.url || undefined,
              }
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: portableTextToPlainText(title),
        subtitle: 'Section — Transformations',
      }
    },
  },
})
