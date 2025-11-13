import {portableTextToPlainText} from '../../helpers/functions'
import {defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Sections - Hero',
  type: 'object',
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'array',
      of: [{type: 'heroFullscreen'}, {type: 'heroNarrow'}],
      options: {
        sortable: true,
      },
      validation: (Rule) => Rule.required().min(1).max(1),
    },
  ],
  preview: {
    select: {
      hero: 'hero',
      title: 'hero[0].title',
    },
    prepare({hero, title}) {
      // console.log(hero, title)
      // const plainTitle = title && typeof title === 'object' ? portableTextToPlainText(title) : title

      return {
        title: 'test',
      }
    },
  },
})
