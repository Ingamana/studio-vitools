import {defineType} from 'sanity'

export const generalSectionsTypes = [{type: 'sectionTextMedia'}]

export const generalSections = defineType({
  name: 'generalSections',
  title: 'All General Sections',
  type: 'array',
  of: generalSectionsTypes,
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
