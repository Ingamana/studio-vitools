import {defineField, defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'
import {ExternalImagePreview} from '../../../components/ExternalPreviewImage'

export const sectionLargeTestimonials = defineType({
  name: 'sectionLargeTestimonials',
  title: 'Section — Large Testimonials',
  type: 'object',
  fields: [
    {
      name: 'quotes',
      title: 'Quotes',
      type: 'array',
      of: [
        defineType({
          name: 'largeTestimonialItem',
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
              name: 'quote',
              title: 'Quote',
              type: 'title',
              validation: (rule) => rule.required(),
            },
            {
              name: 'media',
              title: 'Media',
              type: 'shopify.asset',
              description: 'Expected aspect-ratio: 1:1',
              validation: (rule) => rule.required(),
            },
            {
              name: 'quoteAuthor',
              title: 'Quote Author',
              type: 'customText',
              validation: (rule) => rule.required(),
            },
            {
              name: 'quoteAuthorSubtitle',
              title: 'Quote Author Subtitle',
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
              title: 'quote',
              subtitle: 'quoteAuthor',
              media: 'media',
            },
            prepare({title, subtitle, media}) {
              return {
                title: portableTextToPlainText(title),
                subtitle: portableTextToPlainText(subtitle),
                media: media?.url ? media.url : undefined,
              }
            },
          },
          components: {
            preview: ExternalImagePreview, // Add custom preview component
          },
        }),
      ],

      validation: (rule) => rule.required().min(2),
    },
  ],
  preview: {
    select: {
      quotes: 'quotes',
    },
    prepare({quotes}) {
      return {
        title: `Large Testimonials ${quotes ? `(${quotes.length})` : ''}`,
        subtitle: 'Section — Large Testimonials',
      }
    },
  },
})
