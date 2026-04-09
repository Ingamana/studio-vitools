import {DocumentActionComponent} from 'sanity'
import {EyeOpenIcon} from '@sanity/icons' // 👈 Sanity's own icon pack

import {getPreviewUrl} from '../helpers/constants'

type ProductDoc = {
  slug?: {current?: string} | string | null
  target_audience?: {_ref?: string}
}

export const PreviewAction: DocumentActionComponent = (props) => {
  const allowedTypes = [
    'general',
    'pages',
    'articles',
    'product',
    'shop',
    'home',
    'communityStories',
    'transformationStories',
    'journalLanding',
    'communityStoriesLanding',
    'transformationStoriesLanding',
  ] // Only show for these schemas

  if (!allowedTypes.includes(props.type)) {
    return null // 👈 hides the button for other schemas
  }

  const doc = (props.draft || props.published) as ProductDoc | null
  if (!doc) return null

  const specialSlugMap: Record<string, string> = {
    general: 'general',
    home: 'home',
    communityStoriesLanding: 'community-stories',
    transformationStoriesLanding: 'transformation-stories',
    journalLanding: 'journal',
  }
  const specialSlug = specialSlugMap[props.type]

  console.log('doc', doc)

  const slug =
    specialSlug ||
    (typeof doc.slug === 'string' ? doc.slug : doc.slug?.current) ||
    doc.store?.slug?.current

  return {
    label: 'Preview',
    icon: EyeOpenIcon,
    onHandle: async () => {
      let suffix = ''

      const previewUrl = getPreviewUrl(props.type, slug) + suffix

      if (previewUrl) {
        window.open(previewUrl, '_blank')
      } else {
        window.alert('Missing preview URL — cannot preview')
      }
    },
  }
}
