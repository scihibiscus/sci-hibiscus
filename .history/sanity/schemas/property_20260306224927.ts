import { defineType, defineField } from "sanity";
import {TagIcon} from '@sanity/icons'

export const property = defineType({
  name: "property",
  title: "Transaction",
  type: "document",
  icon: TagIcon,
  fieldsets: [
    {
      name: "name",
      title: "Property Name",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "slug",
      title: "Property Slug",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "nameen",
      title: "Property Name English",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name",
    }),
    defineField({
      name: "namefr",
      title: "Property Name French",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name",
    }),
    defineField({
      name: "slugen",
      title: "Slug English",
      type: "slug",
      options: { source: "nameen" },
      validation: (rule) => rule.required().error("Required"),
      fieldset: "slug",
    }),
    defineField({
      name: "slugfr",
      title: "Slug French",
      type: "slug",
      options: { source: "namefr" },
      validation: (rule) => rule.required().error("Required"),
      fieldset: "slug",
    }),
  ],
});
