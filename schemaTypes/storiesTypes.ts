import {defineType} from 'sanity'
import {portableTextToPlainText} from '../helpers/functions'
import PrefixedSlugInput from './components/prefixedSlugInput'

export const storiesTypes = defineType({
  name: 'stories',
  title: 'Story',
  type: 'document',
  documentId: 'stories',
  fields: [
    {
      name: 'slug',
      type: 'slug',
      description: 'Will be used as page url, example : story-1',
      validation: (rule) => rule.required(),
      components: {
        input: PrefixedSlugInput, // Use the custom component
      },
      options: {
        prefix: 'articles/',
      },
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'tag',
      fieldset: 'general',
      description: 'Displayed when referenced in article lists',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      defaultValue: {hex: '#FFFFFF'},
      options: {
        disableAlpha: true,
      },
      validation: (rule) => rule.required(),
      fieldset: 'general',
      description: 'Defines the page background color, also used when referenced in article lists',
    },
    {
      name: 'featuredMedia',
      title: 'Featured Media',
      type: 'shopify.asset',
      validation: (rule) => rule.required(),
      fieldset: 'general',
      description: 'Displayed when referenced in article lists, Expected aspect-ratio: 1:1',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'customText',
      validation: (rule) => rule.required(),
      fieldset: 'general',
      description: 'Displayed as content preview when referenced in article lists',
    },

    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
      fieldset: 'hero',
    },

    {
      name: 'sections',
      title: 'Sections',
      // type: 'array',
      // of: [{type: 'sectionTextMedia'}],
      type: 'sections',
      fieldset: 'sections',
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
      name: 'general',
      title: 'General',
      options: {collapsible: true, collapsed: true},
    },
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
    select: {
      slug: 'slug',
      hero: 'hero',
    },
    prepare({hero, slug}) {
      return {
        // title: portableTextToPlainText(title),
        title: hero?.[0]?.title ? portableTextToPlainText(hero[0].title) : slug?.current,
        // subtitle: 'Hero — Fullscreen',
      }
    },
  },
})
