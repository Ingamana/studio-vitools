import {defineType} from 'sanity'

export const generalTypes = defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  documentId: 'general',
  fields: [
    {
      name: 'menuLeftLinks',
      title: 'Menu Left Links',
      type: 'array',
      of: [{type: 'button'}],
      validation: (rule) => rule.required(),
      fieldset: 'menu',
    },
    {
      name: 'menuRightLinks',
      title: 'Menu Right Links',
      type: 'array',
      of: [{type: 'button'}],
      validation: (rule) => rule.required(),
      fieldset: 'menu',
    },
    {
      name: 'megaMenuTitle',
      title: 'Mega Menu Title',
      type: 'title',
      validation: (rule) => rule.required(),
      fieldset: 'megaMenu',
    },
    {
      name: 'megaMenuLinks',
      title: 'Mega Menu & Footer Links',
      type: 'array',
      of: [
        defineType({
          name: 'megaMenuLinkGroup',
          type: 'object',
          fields: [
            {
              name: 'mainLink',
              title: 'Main link',
              type: 'button',
            },
            {
              name: 'subLinks',
              title: 'Sub links',
              type: 'array',
              of: [{type: 'button'}],
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              mainLinkLabel: 'mainLink.label',
              subLinks: 'subLinks',
            },
            prepare({mainLinkLabel, subLinks}) {
              return {
                // title: portableTextToPlainText(title),
                title: mainLinkLabel,
                subtitle: `${subLinks.length} sub links`,
              }
            },
          },
        }),
      ],
      validation: (rule) => rule.required(),
      fieldset: 'megaMenu',
    },

    {
      name: 'generalShopProductsPerks',
      title: 'All products shop perks',
      description:
        'Displayed on all products shop pages (accordion) in addition to product-specific perks.',
      type: 'accordionList',
      validation: (rule) => rule.required(),
      fieldset: 'shop',
    },

    {
      name: 'meta',
      title: 'Default SEO',
      type: 'meta',
      fieldset: 'metas',
      description: 'Used as default values for pages with undefined metas.',
      validation: (rule) => rule.required(),
    },
  ],

  fieldsets: [
    {
      name: 'menu',
      title: 'Menu',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'megaMenu',
      title: 'Mega Menu & Footer',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'shop',
      title: 'Shop settings',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'siteLinks',
      title: 'Site links',
      options: {collapsible: true, collapsed: true},
    },
    {
      name: 'metas',
      title: 'Default SEO',
      options: {collapsible: true, collapsed: true},
    },
  ],

  preview: {
    prepare() {
      return {
        title: 'General Settings',
      }
    },
  },
})
