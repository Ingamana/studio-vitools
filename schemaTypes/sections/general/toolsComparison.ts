import {defineField, defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'
import {ExternalImagePreview} from '../../../components/ExternalPreviewImage'

export const sectionToolsComparison = defineType({
  name: 'sectionToolsComparison',
  title: 'Section — Tools Comparison',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        defineType({
          name: 'toolComparisonItem',
          type: 'object',

          fields: [
            {
              name: 'product',
              title: 'Product',
              type: 'shopify.product',
              validation: (rule) => rule.required(),
            },
            {
              name: 'icon',
              title: 'Product Icon',
              type: 'productIcon',
              validation: (rule) => rule.required(),
            },
            {
              name: 'media',
              title: 'Media',
              type: 'shopify.asset',
              description: 'If a specific asset is desired, default to product feature media',
            },
            {
              name: 'list',
              title: 'List',
              type: 'array',
              of: [
                defineType({
                  name: 'toolComparisonListItem',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'listElement',
                      title: 'List element',
                      type: 'customText',
                      validation: (rule) => rule.required(),
                    }),
                  ],
                  preview: {
                    select: {
                      title: 'listElement',
                    },
                    prepare({title}) {
                      return {
                        title: portableTextToPlainText(title) || 'No value',
                      }
                    },
                  },
                }),
              ],
            },
            {
              name: 'text',
              title: 'Text',
              type: 'customText',
              validation: (rule) => rule.required(),
            },
            {
              name: 'quote',
              title: 'Quote',
              type: 'customText',
            },
            {
              name: 'quoteAuthor',
              title: 'Quote Author',
              type: 'string',
            },
          ],
          preview: {
            select: {
              productTitle: 'product.shopifyProduct.store.title', // product title
              slug: 'product.shopifyProduct.store.slug.current', // store slug
              media: 'product.shopifyProduct.store.previewImageUrl', // media
            },
            prepare({productTitle, slug, media}) {
              return {
                title: productTitle || 'No product selected',
                subtitle: slug || 'No store',
                media: media,
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
      title: 'title',
    },
    prepare({title}) {
      return {
        title: portableTextToPlainText(title),
        subtitle: 'Section — Tools Comparison',
      }
    },
  },
})
