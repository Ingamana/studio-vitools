import {defineType} from 'sanity'
import {portableTextToPlainText} from '../../../helpers/functions'

export const sectionText = defineType({
  name: 'sectionText',
  title: 'Section — Text',
  type: 'object',
  fields: [
    {
      name: 'roundedSection',
      title: 'Rounded section',
      type: 'boolean',
      initialValue: false,
      description:
        'Adds rounded corners to the section, keep unticked if you want the section to be shown seamlessly inline.',
    },
    {
      name: 'backgroundColor',
      type: 'sectionBackgroundColor',
      description: 'Only useful when rounded section is ticked',
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
    {
      name: 'title',
      title: 'Main Title',
      type: 'title',
      description: 'Displayed above the content, can be left empty if not needed',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'wysiwygText',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'content',
    },
    prepare({title}) {
      return {
        title: portableTextToPlainText(title),
        subtitle: 'Section — Text',
      }
    },
  },
})
