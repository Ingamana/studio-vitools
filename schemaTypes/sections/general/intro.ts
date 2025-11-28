import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const sectionIntro = defineType({
  name: 'sectionIntro',
  title: 'Section — Intro',
  type: 'object',
  fields: [
    {
      name: 'backgroundColor',
      type: 'sectionBackgroundColor',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'title',
      validation: (rule) => rule.required(),
    },
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            // {title: 'Normal', value: 'normal'},
          ],
          marks: {
            decorators: [
              // {title: 'Emphasis', value: 'em'},
              // {title: 'Superscript', value: 'sup'},
            ],
            annotations: [], // Disable annotations like links
          },
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: 'fontFamily',
      title: 'Font family',
      defaultValue: 'default',
      initialValue: 'default',
      type: 'string',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Typewriter', value: 'typewriter'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: portableTextToPlainText(title),
        subtitle: 'Section — Intro',
      }
    },
  },
})
