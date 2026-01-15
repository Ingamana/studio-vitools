export const siteUrl = 'https://vitools-git-develop-ingamana.vercel.app/'
export const shopifySiteUrl = 'vitools-store' //.myshopify.com
const SANITY_VIEWER_TOKEN =
  'skzspb7i3iXrssWtwb30IAgBMXLulWTBx8DqLmAcfzotl7OZOPH3Xe1JarmBWrUzR2JPbz1Bd9tQzZpTpUhPx24HKjD1QUbxK5qSTuJeEtmBnJphnPmSWSFt7a1DAmdzQko1q4IfmtFDzgnvXEhb8ITFXIiuP44IosN9QjNHOER09JtV3Uos'

export function getPreviewUrl(type, slug) {
  // if (!slug) return null

  const prefixMap = {
    page: '', // root-level pages
    articles: 'journal',
    product: 'product',
    shop: 'shop',
    home: '',
    stories: 'stories',
  }

  const specialSlugUrlMap = {
    general: '',
    home: '',
  }

  // console.log('type', type, 'slug', slug)

  const prefix = prefixMap[type] ?? ''
  const specialSlugUrl = specialSlugUrlMap[slug]
  let path = ''
  if (!slug) {
    path = prefix
  } else {
    path = prefix
      ? `${prefix}/${slug}`
      : specialSlugUrl || specialSlugUrl === ''
        ? specialSlugUrl
        : slug
  }

  return `https://vitools-git-develop-ingamana.vercel.app/api/enable-draft?secret=${SANITY_VIEWER_TOKEN}&slug=${path}`
  // return `http://localhost:3000/api/enable-draft?secret=${SANITY_VIEWER_TOKEN}&slug=${path}`
}
