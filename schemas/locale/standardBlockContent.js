import supportedLanguages from './supportedLanguages'

export default {
  name: 'localeStandardBlockContent',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: supportedLanguages.map(lang => ({
    title: lang.title,
    name: lang.id,
    type: 'standardBlockContent',
    fieldset: lang.isDefault ? null : 'translations'
  })),
  preview: {
    select: {
      blocks: 'en.text'
    },
    prepare ({ blocks }) {
      const block = (blocks || []).find(block => block._type === 'block')
      const exceprt =
      block
        ? block.children.filter(child => child._type === 'span')
          .map(span => span.text)
          .join('')
        : 'No title'

      return {
        title: `[Rich Text] ${exceprt.substring(0, 40)}`
      }
    }
  }
}
