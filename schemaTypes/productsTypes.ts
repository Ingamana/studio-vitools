import {defineType} from 'sanity'
import PrefixedSlugInput from './components/productSlugInput'

export const productsTypes = defineType({
  name: 'product',
  title: 'Product Page',
  type: 'document',
  documentId: 'product',
  fields: [
    {
      name: 'store',
      title: 'Shopify Data',
      description: 'Read-only Shopify product data, to edit please visit Shopify admin.',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
          readOnly: true,
        },
        {
          name: 'slug',
          title: 'Handle',
          type: 'slug',
          validation: (rule) => rule.required(),
          readOnly: true,
          components: {
            input: PrefixedSlugInput, // Use the custom component
          },
          options: {
            staging: true,
            prefix: 'blog/',
          },
        },
        // Unused fields but kept for potential future use
        {
          name: 'createdAt',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'descriptionHtml',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'gid',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'id',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'isDeleted',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'options',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'previewImageUrl',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'priceRange',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'productType',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'shop',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'status',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'tags',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'variants',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'vendor',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
      ],
    },
    // {
    //   name: 'store.slug',
    //   title: 'Test',
    //   type: 'slug',
    // },
    {
      name: 'sections',
      title: 'Sections',
      type: 'shopSections',
      fieldset: 'sections',
    },
    {
      name: 'meta',
      title: 'SEO',
      type: 'meta',
      fieldset: 'metas',
    },
  ],
  preview: {
    select: {
      title: 'store.title',
      // media: 'store.previewImageUrl',
    },
    prepare(selection) {
      const {
        title,
        // media
      } = selection
      return {
        title: title || 'No title',
        // media: media || undefined,
      }
    },
  },
  fieldsets: [
    {
      name: 'sections',
      title: 'Sections',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'metas',
      title: 'SEO',
      options: {collapsible: true, collapsed: true},
    },
  ],
})
