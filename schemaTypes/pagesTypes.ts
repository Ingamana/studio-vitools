import {defineType} from 'sanity'
import {portableTextToPlainText} from '../helpers/functions'
import PrefixedSlugInput from './components/prefixedSlugInput'

export const pagesTypes = defineType({
  name: 'pages',
  title: 'Page',
  type: 'document',
  documentId: 'pages',
  fields: [
    {
      name: 'slug',
      type: 'slug',
      description: 'Will be used as page url, example : page-1',
      validation: (rule) => rule.required(),
      components: {
        input: PrefixedSlugInput, // Use the custom component
      },
      options: {
        prefix: '',
      },
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
        subtitle: `/${slug.current}`,
      }
    },
  },
})
