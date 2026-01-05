import {defineType} from 'sanity'

export const generalSectionsTypes = [
  {type: 'sectionArticlesListing'},
  {type: 'sectionStoriesListing'},
  {type: 'sectionCta'},
  {type: 'sectionHowItWorks'},
  {type: 'sectionIntro'},
  {type: 'sectionLargeTestimonials'},
  {type: 'sectionNewsletter'},
  {type: 'sectionProductHighlight'},
  {type: 'sectionQuotesSlider'},
  {type: 'sectionResourcesCardsListing'},
  {type: 'sectionTabbedContent'},
  {type: 'sectionTextMedia'},
  {type: 'sectionTools'},
  {type: 'sectionToolsComparison'},
  {type: 'sectionTransformations'},
  {type: 'sectionTwoCta'},
]

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
          previewImageUrl: (schemaTypeName) => `/static/previews/${schemaTypeName}.png`,
        },
        {name: 'list'},
      ],
    },
  },
})
