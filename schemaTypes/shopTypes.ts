import {defineType} from 'sanity'

// Define the "home" type as a singleton
export const shopTypes = defineType({
  name: 'shop',
  title: 'Shop',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
      fieldset: 'hero',
    },
    {
      name: 'meta',
      title: 'SEO',
      type: 'meta',
      fieldset: 'metas',
    },
  ],

  fieldsets: [
    {
      name: 'hero',
      title: 'Hero',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'sections',
      title: 'Sections',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'metas',
      title: 'SEO',
      options: {collapsible: true, collapsed: true},
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'Homepage',
      }
    },
  },
})
