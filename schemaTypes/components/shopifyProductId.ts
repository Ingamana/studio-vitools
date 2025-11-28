import {ExternalImagePreview} from '../../components/ExternalPreviewImage'
import {defineType} from 'sanity'

export const shopifyProductId = defineType({
  name: 'shopify.product',
  title: 'Shopify product ID',
  type: 'object',
  fields: [
    {
      name: 'shopifyProduct',
      title: 'Shopify Product',
      type: 'reference',
      to: [{type: 'product'}],
    },
  ],
  preview: {
    select: {
      productTitle: 'shopifyProduct.store.title', // title
      slug: 'shopifyProduct.store.slug.current', // store slug
      media: 'shopifyProduct.store.previewImageUrl', // media
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
  // components: {
  //   preview: ExternalImagePreview, // Add custom preview component
  // },
})
