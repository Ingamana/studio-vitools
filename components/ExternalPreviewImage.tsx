// components/ExternalImagePreview.tsx
import {Text} from '@sanity/ui'
import React from 'react'

export function ExternalImagePreview(props) {
  const {title, subtitle, media} = props

  if (!title) return

  const clampedTitle = title.length > 50 ? title.slice(0, 47) + '...' : title
  const clampedSubtitle =
    subtitle && subtitle.length > 50 ? subtitle.slice(0, 47) + '...' : subtitle
  const isVideo =
    media && typeof media === 'string' && (media.endsWith('.mp4') || media.endsWith('.mov'))
  return (
    <div
      style={{
        height: '2.0625rem',
        padding: '0.5rem',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        {media && !isVideo ? (
          <span
            style={{
              width: 33,
              height: 33,
            }}
          >
            <img src={media} alt="" style={{width: 33, height: 33, objectFit: 'cover'}} />
          </span>
        ) : (
          <span
            style={{
              width: 33,
              height: 33,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 33,
                height: 33,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 0.1,
                borderRadius: '0.0625rem',
                boxShadow: 'inset 0 0 0 1px var(--card-fg-color)',
              }}
            />
            <svg
              data-sanity-icon="document"
              width="1.28em"
              height="1.28em"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="sanity-studio__preview-fallback-icon"
              style={{color: 'var(--card-icon-color)'}}
            >
              <path
                d="M11.5 4.5V9.5H6.5"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18.5 20.5H6.5V9.5L11.5 4.5H18.5V20.5Z"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            position: 'relative',
          }}
        >
          <Text size={1}>{clampedTitle}</Text>
          {subtitle && (
            <Text size={1} style={{color: 'var(--card-muted-fg-color)'}}>
              {clampedSubtitle}
            </Text>
          )}
        </div>
      </div>
    </div>
  )
}
