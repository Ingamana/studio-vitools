// Globals
import {generalTypes} from './generalTypes'

// Components
import {meta} from './components/meta'

// Pages
import {hero} from './components/hero'
import {title} from './components/title'
import {homeTypes} from './homeTypes'
import {sectionTextMedia} from './sections/general/textMedia'
import {heroFullscreen} from './sections/heros/heroFullscreen'
import {heroNarrow} from './sections/heros/heroNarrow'
import {sections} from './sections/sectionsTypes'

import {accordionList} from './components/accordionList'
import {button} from './components/button'
import {faqList} from './components/faqList'
import {shopifyProductId} from './components/shopifyProductId'
import {tag} from './components/tag'
import {customText} from './components/text'
import {wysiwygText} from './components/wysiwygText'
import {wysiwygTextTabbedContent} from './components/wysiwygTextTabbedContent'
import {pagesTypes} from './pagesTypes'
import {productsTypes} from './productsTypes'
import {shopTypes} from './shopTypes'

export const schemaTypes = [
  // Globals
  generalTypes,

  // Components
  meta,
  title,
  customText,
  button,
  hero,
  shopifyProductId,
  tag,
  faqList,
  accordionList,
  wysiwygText,
  wysiwygTextTabbedContent,

  // Heros
  heroFullscreen,
  heroNarrow,

  // Sections List
  sections,

  // Sections individual types
  sectionTextMedia,

  // Pages
  homeTypes,
  pagesTypes,
  productsTypes,
  shopTypes,
]
