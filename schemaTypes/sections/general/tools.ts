import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'
import {ExternalImagePreview} from '../../../components/ExternalPreviewImage'

export const sectionTools = defineType({
  name: 'sectionTools',
  title: 'Section — Tools',
  type: 'object',
  fields: [
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
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          name: 'product',
          title: 'Product',
          type: 'shopify.product',
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required().min(1),
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
            media: media?.url ? media.url : undefined,
          }
        },
      },
      components: {
        preview: ExternalImagePreview, // Add custom preview component
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: portableTextToPlainText(title),
        subtitle: 'Section — Tools',
      }
    },
  },
})
