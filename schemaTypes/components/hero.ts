import {ExternalImagePreview} from '../../components/ExternalPreviewImage'
import {portableTextToPlainText} from '../../helpers/functions'
import {defineType} from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'array',
  of: [{type: 'heroFullscreen'}, {type: 'heroNarrow'}],
  options: {
    sortable: true,
  },
  validation: (Rule) => Rule.required().min(1).max(1),
  preview: {
    select: {
      hero: 'hero',
      title: 'hero[0].title',
      media: 'hero[0].media',
    },
    prepare({hero, title, media}) {
      const plainTitle = title && typeof title === 'object' ? portableTextToPlainText(title) : title

      return {
        title: plainTitle || 'Hero',
        media: media?.url ? media.url : undefined,
      }
    },
  },
  components: {
    preview: ExternalImagePreview, // Add custom preview component
  },
})
