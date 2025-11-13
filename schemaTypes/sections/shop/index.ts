import {defineType} from 'sanity'

export const shopSectionsTypes = [
  {type: 'sectionHighlightedProduct'},
  {type: 'sectionPerksCardsListing'},
  {type: 'sectionProductsListing'},
]

export const shopSections = defineType({
  name: 'shopSections',
  title: 'All Shop Sections',
  type: 'array',
  of: shopSectionsTypes,
  options: {
    sortable: true,
    insertMenu: {
      views: [
        {
          name: 'grid',
          previewImageUrl: (schemaTypeName) => `/static/previews/${schemaTypeName}.jpg`,
        },
        {name: 'list'},
      ],
    },
  },
})
