import {defineType} from 'sanity'
import {articleToolkitSectionsTypes} from './articleToolkit'
import {shopSectionsTypes} from './shop'
import {generalSectionsTypes} from './general'

export const sectionsTypes = [
  ...articleToolkitSectionsTypes,
  ...shopSectionsTypes,
  ...generalSectionsTypes,
]

export const sections = defineType({
  name: 'sections',
  title: 'All Sections',
  type: 'array',
  of: sectionsTypes,
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
