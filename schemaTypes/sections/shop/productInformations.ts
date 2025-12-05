import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const sectionProductInformations = defineType({
  name: 'sectionProductInformations',
  title: 'Section — Product Informations',
  type: 'object',
  fields: [
    {
      name: 'tabs',
      title: 'Tabs',
      type: 'array',
      of: [
        defineType({
          name: 'textualContentItem',
          type: 'object',
          fields: [
            {
              name: 'tabTitle',
              title: 'Tab Title',
              type: 'string',
              validation: (rule) => rule.required(),
            },

            {
              name: 'contents',
              title: 'Contents',
              type: 'array',
              of: [
                defineType({
                  name: 'productInfosContentItem',
                  type: 'object',
                  fields: [
                    {
                      name: 'backgroundColor',
                      title: 'Background Color',
                      type: 'color',
                      defaultValue: {hex: '#FFFFFF'},
                      options: {
                        disableAlpha: true,
                      },
                      validation: (rule) => rule.required(),
                    },
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'title',
                      validation: (rule) => rule.required(),
                    },
                    {
                      name: 'content',
                      title: 'Content',
                      type: 'wysiwygTextTabbedContent',
                    },
                  ],
                  preview: {
                    select: {
                      title: 'title',
                    },
                    prepare({title}) {
                      return {
                        title: portableTextToPlainText(title),
                      }
                    },
                  },
                }),
              ],
              validation: (rule) => rule.required().min(1).max(2),
            },
          ],
          preview: {
            select: {
              title: 'tabTitle',
            },
            prepare({title}) {
              return {
                title: title,
              }
            },
          },
        }),
        defineType({
          name: 'imageContentItem',
          type: 'object',
          fields: [
            {
              name: 'backgroundColor',
              title: 'Background Color',
              type: 'color',
              defaultValue: {hex: '#FFFFFF'},
              options: {
                disableAlpha: true,
              },
              validation: (rule) => rule.required(),
            },
            {
              name: 'tabTitle',
              title: 'Tab Title',
              type: 'string',
              validation: (rule) => rule.required(),
            },
            {
              name: 'media',
              title: 'Media',
              type: 'shopify.asset',
              description: 'Expected size: 686px(w) x 437px(h)',
              validation: (rule) => rule.required(),
            },
            {
              name: 'mobileMedia',
              title: 'Mobile Media',
              type: 'shopify.asset',
              description: 'Expected size: 343px(w) x 300px(h)',
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'tabTitle',
            },
            prepare({title}) {
              return {
                title: title,
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
      tabs: 'tabs',
    },
    prepare({tabs}) {
      return {
        title: `${tabs?.length || 0} Tabs`,
        subtitle: 'Section — Product informations',
      }
    },
  },
})
