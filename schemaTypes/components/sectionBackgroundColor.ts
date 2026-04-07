import {defineType} from 'sanity'

export const sectionBackgroundColor = defineType({
  name: 'sectionBackgroundColor',
  title: 'Components - Section Background Color',
  type: 'object',
  fields: [
    {
      name: 'backgroundColor',
      title: 'Section Background Color',
      type: 'string',
      defaultValue: 'white',
      initialValue: 'white',
      options: {
        list: [
          {title: 'White', value: 'white'},
          {title: 'Pale Purple', value: 'purple'},
          {title: 'Yellow/Green', value: 'yellow-green'},
          {title: 'Green', value: 'green'},
          {title: 'Black', value: 'black'},
          {title: 'Grey', value: 'grey'},
          {title: 'Pale Blue', value: 'pale-blue'},
        ],
        layout: 'select',
      },
      validation: (rule) => rule.required(),
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
})
