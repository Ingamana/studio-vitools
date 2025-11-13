import {defineType} from 'sanity'

export const sectionLargeTestimonials = defineType({
  name: 'sectionLargeTestimonials',
  title: 'Section — Large Testimonials',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'title',
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title,
        subtitle: 'Section — Large Testimonials',
      }
    },
  },
})
