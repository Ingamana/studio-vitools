import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemaTypes'

import {CogIcon, HomeIcon} from '@sanity/icons'

export default defineConfig({
  name: 'default',
  title: 'vitools',

  projectId: '8l42xkn4',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            S.listItem().title('General').id('general').icon(CogIcon).child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType('general').documentId('general'),
            ),

            S.divider(),

            // Pages
            S.listItem()
              .title('Homepage')
              .id('home')
              .icon(HomeIcon)
              .child(S.document().schemaType('home').documentId('home')),
            // S.documentTypeListItem('pages').title('Pages').icon(FolderIcon),
            // S.documentTypeListItem('products').title('Products').icon(DiamondIcon),
            // Sprint 1
            // S.documentTypeListItem('platforms').title('Platforms').icon(SquareIcon),
            // S.documentTypeListItem('industries').title('Industries').icon(RocketIcon),

            // S.listItem()
            //   .title('Resources')
            //   .icon(DocumentTextIcon)
            //   .child(
            //     S.list()
            //       .title('Resources')
            //       .items([
            //         S.documentTypeListItem('resourcesPage')
            //           .title('Resources Pages')
            //           .icon(FolderIcon),
            //         S.documentTypeListItem('articles').title('Insights').icon(DocumentTextIcon),
            //         S.documentTypeListItem('case_study')
            //           .title('Case studies')
            //           .icon(DocumentTextIcon),
            //         S.documentTypeListItem('newsEntries').title('News').icon(DocumentTextIcon),
            //         S.documentTypeListItem('webinars').title('Webinars').icon(DocumentTextIcon),
            //         S.documentTypeListItem('events').title('Events').icon(DocumentTextIcon),
            //         S.documentTypeListItem('reports').title('Reports').icon(DocumentTextIcon),
            //         S.documentTypeListItem('guides').title('Guides').icon(DocumentTextIcon),
            //         S.documentTypeListItem('press').title('Press').icon(DocumentTextIcon),
            //         S.documentTypeListItem('annotations')
            //           .title('Annotations')
            //           .icon(DocumentTextIcon),
            //       ]),
            //   ),

            // S.divider(),

            // S.documentTypeListItem('audiences').title('Audiences').icon(TagIcon),
            // S.documentTypeListItem('childAudiences').title('Child Audiences').icon(TagsIcon),

            // S.divider(),

            // S.listItem()
            //   .title('Taxonomies')
            //   .icon(ArchiveIcon)
            //   .child(
            //     S.list()
            //       .title('Taxonomies')
            //       .items([
            //         S.documentTypeListItem('feature').title('Feature').icon(TagIcon),
            //         S.documentTypeListItem('topic').title('Topic').icon(TagIcon),
            //         S.documentTypeListItem('region').title('Region').icon(TagIcon),
            //       ]),
            //   ),

            // S.documentTypeListItem('authors').title('Authors').icon(ComposeSparklesIcon),
            // S.documentTypeListItem('investors').title('Investors').icon(DoubleChevronUpIcon),
            // S.documentTypeListItem('team').title('Team').icon(UsersIcon),
            // S.documentTypeListItem('customersPartners')
            //   .title('Customers / Partners')
            //   .icon(UsersIcon),
            // S.documentTypeListItem('demos').title('Demos').icon(BlockElementIcon),
            // S.documentTypeListItem('stateMandates').title('States Mandates').icon(BlockElementIcon),

            // S.listItem()
            //   .title('Pricing & comparisons')
            //   .icon(DocumentSheetIcon)
            //   .child(
            //     S.list()
            //       .title('Pricing & comparisons')
            //       .items([
            //         S.documentTypeListItem('pricingPlans')
            //           .title('Pricing Plans')
            //           .icon(DocumentSheetIcon),
            //         S.documentTypeListItem('pricingComparison')
            //           .title('Pricing Comparisons')
            //           .icon(ThListIcon),
            //       ]),
            //   ),

            // S.listItem()
            //   .title('ABLE Plans & States')
            //   .icon(DocumentSheetIcon)
            //   .child(
            //     S.list()
            //       .title('ABLE Plans & States')
            //       .items([
            //         S.documentTypeListItem('ABLEPlans').title('ABLE Plans').icon(DocumentSheetIcon),
            //         S.documentTypeListItem('ABLEStates').title('ABLE States').icon(ThListIcon),
            //       ]),
            //   ),

            // S.divider(),

            // S.listItem()
            //   .title('Legacy articles')
            //   .icon(ArchiveIcon)
            //   .child(
            //     S.list()
            //       .title('Legacy articles')
            //       .items([
            //         S.documentTypeListItem('person').title('People').icon(ComposeSparklesIcon),
            //         S.documentTypeListItem('post').title('Blog - Legacy').icon(DocumentTextIcon),
            //         S.documentTypeListItem('news').title('News').icon(DocumentTextIcon),
            //         S.documentTypeListItem('blogCategory').title('Blog Categories').icon(TagIcon),
            //         S.documentTypeListItem('blogTag').title('Blog Tags').icon(TagsIcon),
            //       ]),
            //   ),
          ]),
    }),
    // structureTool(),
    // visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
