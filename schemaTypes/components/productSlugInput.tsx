// components/CustomSlugInput.jsx
import React, {useEffect, useState} from 'react'
import {Card, Stack, Text} from '@sanity/ui'
import {SlugInput as DefaultSlugInput} from 'sanity'
import {useClient} from 'sanity'
import {useFormValue} from 'sanity'

import {siteUrl, shopifySiteUrl} from '../../helpers/constants'

const CustomSlugInput = (props) => {
  const {schemaType, value, onChange, validation, elementProps} = props
  const site = `https://www.vestwell.com/`
  const stage = 'https://staging--vestwell-2025.netlify.app/'
  const {staging} = schemaType.options
  const prefix = schemaType.options?.prefix || ''
  const client = useClient({apiVersion: '2023-05-03'}) // Adjust API version as needed
  const [suffix, setSuffix] = useState('')

  // Get the target_audience reference ID from the form
  const id = useFormValue(['store.id'])

  // Fetch the target_audience document's slug.current
  // useEffect(() => {
  //   if (targetAudienceRef?._ref) {
  //     client
  //       .fetch(`*[_id == $ref][0]{slug{current}}`, {ref: targetAudienceRef._ref})
  //       .then((result) => {
  //         setSuffix(result?.slug?.current ? `/for-"${result.slug.current}` : '')
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching target audience slug:', error)
  //         setSuffix('')
  //       })
  //   } else {
  //     setSuffix('')
  //   }
  // }, [targetAudienceRef, client])

  // Construct the full URL
  // const fullUrl = `${staging ? stage : site}${prefix}${value?.current || value || ''}${suffix}`
  const fullUrl = `https://admin.shopify.com/store/${shopifySiteUrl}/products/${id}`
  const productUrl = `${siteUrl}${prefix}${value?.current || value || ''}${suffix}`

  return (
    <Stack space={3}>
      <Card padding={2} tone={validation?.length > 0 ? 'critical' : 'default'}>
        <DefaultSlugInput
          {...props}
          value={value}
          onChange={onChange}
          elementProps={elementProps}
        />
      </Card>
      <Text size={1} muted>
        Shop URL:{' '}
        <a href={fullUrl} target="_blank" rel="noopener noreferrer">
          {fullUrl || '[FULL URL]'}
        </a>
        <br />
        Site URL:{' '}
        <a href={productUrl} target="_blank" rel="noopener noreferrer">
          {productUrl || '[FULL URL]'}
        </a>
      </Text>
    </Stack>
  )
}

export default CustomSlugInput
