export default {
  title: 'Product variant',
  name: 'productVariant',
  type: 'object',
  fields: [
    {
      title: 'Variant Title',
      name: 'title',
      type: 'localeString',
    },
    {
      title: 'Weight in grams',
      name: 'grams',
      type: 'number'
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number'
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string'
    },
    // {
    //   title: 'Taxable',
    //   name: 'taxable',
    //   type: 'boolean'
    // },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    // {
    //   title: 'Bar code',
    //   name: 'barcode',
    //   type: 'barcode'
    // }
  ],
  preview: {
    select: {
      title: 'title.en',
      media: 'images.0'
    }
  }
}
