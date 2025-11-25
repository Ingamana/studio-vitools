import ShopifyProductIdInput from './ShopifyProductIdInput'
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
      product: 'shopifyProductId',
    },
    prepare({product}) {
      return {
        title: `Product ID: ${product}`,
      }
    },
  },
})
