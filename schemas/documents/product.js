export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fieldsets: [
    {
      title: 'SEO Info',
      name: 'seo',
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'localeString',
      fieldset: 'seo'
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'localeText',
      fieldset: 'seo'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
      validation: Rule =>
        Rule.error('Every product needs a title.').required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule =>
        Rule.error('Every product needs a page slug.').required()
    },
    {
      title: 'Main SKU',
      name: 'sku',
      type: 'string'
    },
    {
      title: 'Base Price',
      name: 'price',
      type: 'number',
      validation: Rule =>
        Rule.error('Every product needs a base price.').required()
    },
    {
      title: 'Weight (grams)',
      name: 'grams',
      type: 'number',
      validation: Rule =>
        Rule.error('Every product needs a base weight.').required()
    },
    // {
    //   title: 'Taxable',
    //   name: 'taxable',
    //   type: 'boolean'
    // },
    {
      title: 'Main Images',
      description: 'Need at least one. If more than one is added, the first one will be used as a cover for the product display in the product listing.',
      name: 'images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ],
      validation: Rule =>
        Rule.error('Every product needs at least one image.').required()
    },
    {
      title: 'Variants',
      description: 'if product has any options (color, size, etc) enter them here as variants. If not, leave this empty.',
      name: 'variants',
      type: 'array',
      of: [
        {
          title: 'Variant',
          type: 'productVariant'
        }
      ]
    },
    // {
    //   title: 'Tags',
    //   name: 'tags',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'string'
    //     }
    //   ],
    //   options: {
    //     layout: 'tags'
    //   }
    // },
    {
      name: 'vendor',
      title: 'Vendor',
      type: 'reference',
      to: { type: 'vendor' },
      validation: Rule =>
        Rule.error('Every product needs a vendor.').required()
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'category' }
        }
      ],
      validation: Rule =>
        Rule.error('Every product needs a base category.').required()
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'localeString',
      validation: Rule =>
        Rule.error('Every product needs a blurb.').required()
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeBlockContent'
    }
  ],

  preview: {
    select: {
      title: 'title.en',
      subtitle: 'vendor.title',
      media: 'images.0'
    }
  }
}
