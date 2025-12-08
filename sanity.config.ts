import {colorInput} from '@sanity/color-input'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemaTypes'

import {CogIcon, FolderIcon, HomeIcon, ProjectsIcon, TrolleyIcon} from '@sanity/icons'

import {shopifyAssets} from 'sanity-plugin-shopify-assets'

export default defineConfig({
  name: 'default',
  title: process.env.PROJECT_NAME || 'Sanity Studio',

  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_PROJECT_DATASET,

  plugins: [
    deskTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('General')
              .id('general')
              .icon(CogIcon)
              .child(S.document().schemaType('general').documentId('general')),

            S.divider(),

            // Pages
            S.listItem()
              .title('Homepage')
              .id('home')
              .icon(HomeIcon)
              .child(S.document().schemaType('home').documentId('home')),
            S.documentTypeListItem('pages').title('Pages').icon(FolderIcon),
            S.documentTypeListItem('shop')
              .title('Shop')
              .icon(TrolleyIcon)
              .child(S.document().schemaType('shop').documentId('shop')),
            S.documentTypeListItem('product').title('Products').icon(ProjectsIcon),
          ]),
    }),
    // structureTool(),
    visionTool(),
    colorInput(),

    shopifyAssets({
      shopifyDomain: 'ingamana-test-2.myshopify.com',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
