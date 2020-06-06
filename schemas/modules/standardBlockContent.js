import React from 'react'
import Emoji from 'a11y-react-emoji'
const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='📝' />

export default {
  title: 'Rich Text',
  name: 'standardBlockContent',
  type: 'object',
  icon: Icon,
  // hidden: true,
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'H6', value: 'h6' },
            { title: 'Quote', value: 'blockquote' }
          ],
          // Marks let you mark up inline text in the block editor.
          marks: {
            // Annotations can be any object structure – e.g. a link or a footnote.
            decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'em' }],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'Link',
                    name: 'href',
                    type: 'url',
                    validation: Rule =>
                      Rule.required().uri({ scheme: ['http', 'https', 'mailto', 'tel'], allowRelative: true })
                  }
                ]
              }
            ]
          }
        }
        // {
        //   type: 'imageModule'
        // },
        // {
        //   type: 'imgTextColumns'
        // },
        // {
        //   type: 'button'
        // },
        // {
        //   type: 'youtube'
        // },
        // {
        //   type: 'ctaBlock'
        // },
        // {
        //   type: 'iframeEmbed'
        // },
        // {
        //   type: 'commonTextRef'
        // }
      ]
    }
  ],
  preview: {
    select: {
      text: 'text'
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
