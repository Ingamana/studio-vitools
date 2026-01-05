import {defineType} from 'sanity'

export const shopSectionsTypes = [
  {type: 'sectionPerksCardsListing'},
  {type: 'sectionProductsListing'},
  {type: 'sectionProductInformations'},
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
          previewImageUrl: (schemaTypeName) => `/static/previews/${schemaTypeName}.png`,
        },
        {name: 'list'},
      ],
    },
  },
})
