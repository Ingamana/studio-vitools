import {defineType} from 'sanity'

export const generalTypes = defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  documentId: 'general',
  fields: [
    // Header
    {
      name: 'meta',
      title: 'Default SEO',
      type: 'meta',
      fieldset: 'metas',
      description: 'Used as default values for pages with undefined metas.',
      validation: (rule) => rule.required(),
    },
  ],

  fieldsets: [
    {
      name: 'metas',
      title: 'Default SEO',
      options: {collapsible: true, collapsed: true},
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'General Settings',
      }
    },
  },
})
