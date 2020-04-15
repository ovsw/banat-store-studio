export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fieldsets: [
    {title: 'SEO Info',
      name: 'seo',
      options: {collapsible: true, collapsed: true}
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
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'parents',
      title: 'Parent categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}]
        }
      ]
    }
  ]
}
