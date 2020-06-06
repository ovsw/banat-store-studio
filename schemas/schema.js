// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// objects
import blockContent from './blockContent'

// documents
import siteSettings from './documents/siteSettings'
import category from './documents/category'
import product from './documents/product'
import vendor from './documents/vendor'
import productVariant from './documents/productVariant'
import page from './documents/page'

// tabs
import pageTabs from './tabs/pageTabs'
// tab contents
import pageTabContent from './tabs/contents/pageTabContent'
import metaCardContent from './tabs/contents/metaCardContent'

// modules
import standardBlockContent from './modules/standardBlockContent'

// locale
import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'
import localeStandardBlockContent from './locale/standardBlockContent'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    blockContent,
    // documents
    siteSettings,
    product,
    vendor,
    category,
    page,
    productVariant,

    // tabs
    pageTabs,
    // tab contents
    metaCardContent,
    pageTabContent,

    // modules
    standardBlockContent,

    // locale
    localeText,
    localeBlockContent,
    localeStandardBlockContent,
    localeString
  ])
})
