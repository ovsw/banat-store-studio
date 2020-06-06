import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'pageTabs',
  type: 'object',
  title: 'Page Tabs',
  inputComponent: Tabs,
  fieldsets: [
    { name: 'main', title: 'Main' },
    { name: 'defaultMeta', title: 'Meta' }
  ],
  fields: [
    {
      type: 'pageTabContent',
      name: 'main',
      fieldset: 'main'
    },
    {
      type: 'metaCardContent',
      name: 'meta',
      fieldset: 'defaultMeta'
    }
  ]
}
