import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const sectionProductHighlight = defineType({
  name: 'sectionProductHighlight',
  title: 'Section — Product Highlight',
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
          name: 'productItem',
          type: 'object',
          fields: [
            {
              name: 'selectLabel',
              title: 'Select Label',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'product',
              title: 'Product',
              type: 'shopify.product',
              validation: (rule) => rule.required(),
            },
            {
              name: 'buyLabel',
              title: 'Buy Label',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'faq',
              title: 'FAQ',
              type: 'faqList',
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              productTitle: 'product.shopifyProduct.store.title', // product title
              slug: 'product.shopifyProduct.store.slug.current', // store slug
            },
            prepare({productTitle, slug}) {
              return {
                title: productTitle || 'No product selected',
                subtitle: slug || 'No store',
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
        subtitle: 'Section — Product Highlight',
      }
    },
  },
})
