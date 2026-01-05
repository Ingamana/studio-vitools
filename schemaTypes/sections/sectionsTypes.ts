import {defineType} from 'sanity'
import {articleToolkitSectionsTypes} from './articleToolkit'
import {shopSectionsTypes} from './shop'
import {generalSectionsTypes} from './general'

const allTypes = [...articleToolkitSectionsTypes, ...shopSectionsTypes, ...generalSectionsTypes]

const seen = new Set<string>()
export const sectionsTypes = allTypes.filter((item) => {
  if (seen.has(item.type)) {
    return false
  }
  seen.add(item.type)
  return true
})

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
          previewImageUrl: (schemaTypeName) => `/static/previews/${schemaTypeName}.png`,
        },
        {name: 'list'},
      ],
    },
  },
})
