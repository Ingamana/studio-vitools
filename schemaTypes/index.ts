// Globals
import {generalTypes} from './generalTypes'

// Components
import {meta} from './components/meta'

// Pages
import {homeTypes} from './homeTypes'
import {title} from './components/title'
import {sections} from './sections/sectionsTypes'
import {articleToolkitSections} from './sections/articleToolkit'
import {shopSections} from './sections/shop'
import {hero} from './components/hero'
import {heroNarrow} from './sections/heros/heroNarrow'
import {heroFullscreen} from './sections/heros/heroFullscreen'
import {sectionToolkitCTA} from './sections/articleToolkit/cta'
import {sectionDualFramedMedia} from './sections/articleToolkit/dualFramedMedia'
import {sectionFourImages} from './sections/articleToolkit/fourImages'
import {sectionFramedMedia} from './sections/articleToolkit/framedMedia'
import {sectionQuote} from './sections/articleToolkit/quote'
import {sectionSideBySideMedias} from './sections/articleToolkit/sideBySideMedias'
import {sectionSimpleMedia} from './sections/articleToolkit/simpleMedia'
import {sectionText} from './sections/articleToolkit/text'
import {sectionHighlightedProduct} from './sections/shop/highlightedProduct'
import {sectionPerksCardsListing} from './sections/shop/perksCardsListing'
import {sectionProductsListing} from './sections/shop/productsListing'
import {sectionArticlesListing} from './sections/general/articlesListing'
import {sectionCta} from './sections/general/cta'
import {sectionHowItWorks} from './sections/general/howItWorks'
import {sectionIntro} from './sections/general/intro'
import {sectionLargeTestimonials} from './sections/general/largeTestimonials'
import {sectionList} from './sections/general/list'
import {sectionMedia} from './sections/general/media'
import {sectionNewsletter} from './sections/general/newsletter'
import {sectionProductHighlight} from './sections/general/productHighlight'
import {sectionQuotesSlider} from './sections/general/quotesSlider'
import {sectionResourcesCardsListing} from './sections/general/resourcesCardsListing'
import {sectionTabbedContent} from './sections/general/tabbedContent'
import {sectionTextMedia} from './sections/general/textMedia'
import {sectionTools} from './sections/general/tools'
import {sectionToolsComparison} from './sections/general/toolsComparison'
import {sectionTransformations} from './sections/general/transformations'
import {sectionTwoCta} from './sections/general/twoCta'
import {button} from './components/button'
import {shopifyProductId} from './components/shopifyProductId'
import {sectionBackgroundColor} from './components/sectionBackgroundColor'
import {customText} from './components/text'
import {productIcon} from './components/productIcon'
import {tag} from './components/tag'
import {faqList} from './components/faqList'
import {accordionList} from './components/accordionList'
import {productsTypes} from './productsTypes'
import {pagesTypes} from './pagesTypes'
import {generalSections} from './sections/general'
import {articlesTypes} from './articlesTypes'
import {wysiwygText} from './components/wysiwygText'
import {storiesTypes} from './storiesTypes'
import {wysiwygTextTabbedContent} from './components/wysiwygTextTabbedContent'
import {sectionProductInformations} from './sections/shop/productInformations'
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
  sectionBackgroundColor,
  productIcon,
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
  generalSections,
  shopSections,
  articleToolkitSections,

  // Sections individual types
  sectionToolkitCTA,
  sectionDualFramedMedia,
  sectionFourImages,
  sectionFramedMedia,
  sectionQuote,
  sectionSideBySideMedias,
  sectionSimpleMedia,
  sectionText,
  sectionHighlightedProduct,
  sectionPerksCardsListing,
  sectionProductsListing,
  sectionArticlesListing,
  sectionCta,
  sectionHowItWorks,
  sectionIntro,
  sectionLargeTestimonials,
  sectionList,
  sectionMedia,
  sectionNewsletter,
  sectionProductHighlight,
  sectionQuotesSlider,
  sectionResourcesCardsListing,
  sectionTabbedContent,
  sectionTextMedia,
  sectionTools,
  sectionToolsComparison,
  sectionTransformations,
  sectionTwoCta,
  sectionProductInformations,

  // Pages
  homeTypes,
  pagesTypes,
  productsTypes,
  articlesTypes,
  storiesTypes,
  shopTypes,
]
