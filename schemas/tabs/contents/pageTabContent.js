export default {
  title: 'Page Content',
  name: 'pageTabContent',
  type: 'object',
  // hidden: true,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'content.main.title.en',
        maxLength: 96
      },
      validation: Rule => Rule.required().error('slug is missing')
    },
    {
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        {
          type: 'localeStandardBlockContent'
        }
        // {
        //   type: 'videoHero'
        // },
        // {
        //   type: 'casettes'
        // },
        // {
        //   type: 'sectionWithItems'
        // },
        // {
        //   type: 'testimonials'
        // },
        // {
        //   type: 'heroInnerModule'
        // },
        // {
        //   type: 'imageWTextOverModule'
        // },
        // {
        //   type: 'pricingTableRef'
        // }
      ]
    }
  ]
}
