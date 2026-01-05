import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'

import {
  BlockContentIcon,
  BookIcon,
  CogIcon,
  DocumentTextIcon,
  FolderIcon,
  HomeIcon,
  ProjectsIcon,
  RocketIcon,
  TrolleyIcon,
} from '@sanity/icons'

import {shopifyAssets} from 'sanity-plugin-shopify-assets'

import {shopifySiteUrl} from './helpers/constants'
import {PreviewAction} from './components/PreviewAction'

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
            S.documentTypeListItem('pages').title('Pages').icon(FolderIcon),
            // S.documentTypeListItem('products').title('Products').icon(DiamondIcon),
            // Sprint 1
            // S.documentTypeListItem('platforms').title('Platforms').icon(SquareIcon),
            // S.documentTypeListItem('industries').title('Industries').icon(RocketIcon),

            // S.documentTypeListItem('products').title('Products').icon(RocketIcon),

            S.documentTypeListItem('shop')
              .title('Shop')
              .icon(TrolleyIcon)
              .child(S.document().schemaType('shop').documentId('shop')),
            S.documentTypeListItem('product').title('Products').icon(ProjectsIcon),

            S.documentTypeListItem('articles').title('Articles').icon(BlockContentIcon),

            S.documentTypeListItem('stories').title('Stories').icon(BookIcon),

            // S.listItem()
            //   .title('Shopify Products')
            //   .icon(() => '🛍️') // optional emoji or import an icon
            //   .child(
            //     S.documentList()
            //       .title('All Products')
            //       .menuItems([...S.documentTypeList('product').getMenuItems()]), // keeps the “New product” button if you ever want it
            //     // .defaultOrdering([{field: 'store.title', direction: 'asc'}]), // sorts by Shopify title
            //   ),

            // Optional: separate list for hidden/disabled products
            // S.listItem()
            //   .title('Hidden Products')
            //   .child(S.documentList().filter('_type == "product"')),

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
    visionTool(),
    colorInput(),

    shopifyAssets({
      shopifyDomain: 'vitools-store.myshopify.com',
    }),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    newDocumentOptions: (prev, {creationContext}) => {
      // products are autopopulated by shopify
      if (creationContext.schemaType === 'product') {
        return []
      }

      return prev
    },

    actions: (prev) => {
      // find the index of "publish"
      const publishIndex = prev.findIndex((action) => action.action === 'publish')

      if (publishIndex === -1) {
        // fallback if publish is missing
        return [PreviewAction, ...prev]
      }

      // put Preview right after Publish
      return [...prev.slice(0, publishIndex + 1), PreviewAction, ...prev.slice(publishIndex + 1)]
    },
  },
})
