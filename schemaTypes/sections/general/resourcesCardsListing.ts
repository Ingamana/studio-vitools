import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'
import {ExternalImagePreview} from '../../../components/ExternalPreviewImage'

export const sectionResourcesCardsListing = defineType({
  name: 'sectionResourcesCardsListing',
  title: 'Section — Resources Cards Listing',
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
      // validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'customText',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        defineType({
          name: 'resourcescardItem',
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
              type: 'customText',
              validation: (rule) => rule.required(),
            },
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'customText',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'customText',
            },
            {
              name: 'tag',
              title: 'Tag',
              type: 'tag',
              description: 'Displayed in the listing card',
            },
            {
              name: 'button',
              title: 'Button',
              type: 'button',
              description:
                'If Modal Video is defined, button will open the modal instead of navigating to a URL.',
            },
            // Modal Video specific fields
            {
              name: 'modalTitle',
              title: 'Modal Title',
              type: 'customText',
              description: 'Displayed in the video modal informations',
            },
            {
              name: 'modalDescription',
              title: 'Modal Description',
              type: 'customText',
              description: 'Displayed in the video modal informations',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'productIcon',
              description: 'Displayed in the video modal informations',
            },
            {
              name: 'duration',
              title: 'Duration',
              type: 'string',
              description: 'Displayed in the video modal informations and in the section card',
            },
            {
              name: 'modalVideo',
              title: 'Modal video',
              type: 'shopify.asset',
              description:
                'Expected aspect-ratio: 16:9. If defined, overrides button URL to open the video modal instead.',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'subtitle',
              description: 'description',
              image: 'media',
            },
            prepare({title, subtitle, description, image}) {
              return {
                title: portableTextToPlainText(title),
                subtitle: subtitle
                  ? portableTextToPlainText(subtitle)
                  : portableTextToPlainText(description),
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
        subtitle: 'Section — Resources Cards Listing',
      }
    },
  },
})
