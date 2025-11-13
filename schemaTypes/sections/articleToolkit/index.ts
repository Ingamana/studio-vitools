import {defineType} from 'sanity'
export const articleToolkitSectionsTypes = [
  {type: 'sectionToolkitCTA'},
  {type: 'sectionDualFramedMedia'},
  {type: 'sectionFourImages'},
  {type: 'sectionFramedMedia'},
  {type: 'sectionQuote'},
  {type: 'sectionSideBySideMedias'},
  {type: 'sectionSimpleMedia'},
  {type: 'sectionText'},
]

export const articleToolkitSections = defineType({
  name: 'articleToolkitSections',
  title: 'All Article Toolkit Sections',
  type: 'array',
  of: articleToolkitSectionsTypes,
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
