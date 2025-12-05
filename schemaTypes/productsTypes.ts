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
            prefix: 'product/',
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
          type: 'number',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'isDeleted',
          type: 'boolean',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'options',
          type: 'array',
          hidden: true,
          readOnly: true,
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  type: 'string',
                  hidden: true,
                  readOnly: true,
                },
                {
                  name: 'values',
                  type: 'array',
                  hidden: true,
                  readOnly: true,
                  of: [
                    {
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'previewImageUrl',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'priceRange',
          type: 'object',
          hidden: true,
          readOnly: true,
          fields: [
            {
              name: 'maxVariantPrice',
              type: 'number',
              hidden: true,
              readOnly: true,
            },
            {
              name: 'minVariantPrice',
              type: 'number',
              hidden: true,
              readOnly: true,
            },
          ],
        },
        {
          name: 'productType',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
        {
          name: 'shop',
          type: 'object',
          hidden: true,
          readOnly: true,
          fields: [
            {
              name: 'domain',
              type: 'string',
              hidden: true,
              readOnly: true,
            },
          ],
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
          weak: true,
          hidden: true,
          readOnly: true,
          type: 'array',
          of: [
            {
              type: 'reference',
              to: [{type: 'string'}],
              weak: true,
            },
          ],
        },
        {
          name: 'vendor',
          type: 'string',
          hidden: true,
          readOnly: true,
        },
      ],
    },

    {
      name: 'productPerks',
      title: 'Product perks',
      description: 'Displayed along products shop perks (general).',
      type: 'accordionList',
      validation: (rule) => rule.required(),
      fieldset: 'productSpecs',
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
      name: 'productSpecs',
      title: 'Product specifications',
      options: {collapsible: true, collapsed: true},
    },
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
