import {defineType} from 'sanity'
import {portableTextToPlainText} from '../helpers/functions'
import PrefixedSlugInput from './components/prefixedSlugInput'

export const articlesTypes = defineType({
  name: 'articles',
  title: 'Page',
  type: 'document',
  documentId: 'articles',
  fields: [
    {
      name: 'slug',
      type: 'slug',
      description: 'Will be used as page url, example : article-1',
      validation: (rule) => rule.required(),
      components: {
        input: PrefixedSlugInput, // Use the custom component
      },
      options: {
        prefix: 'articles/',
      },
      fieldset: 'general',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'tag',
      fieldset: 'general',
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
    },
    {
      name: 'featuredMedia',
      title: 'Featured Media',
      type: 'shopify.asset',
      description: 'Expected aspect-ratio: 1:1',
      validation: (rule) => rule.required(),
      fieldset: 'general',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'customText',
      validation: (rule) => rule.required(),
      fieldset: 'general',
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
