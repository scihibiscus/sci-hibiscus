import { defineType, defineField } from "sanity";
import {TagIcon} from '@sanity/icons'

export const property = defineType({
  name: "transaction",
  title: "Transaction",
  type: "document",
  icon: Tag,
  fieldsets: [
    {
      name: "name",
      title: "Transaction Name",
      options: { collapsible: true, collapsed: false },
    },
    {
      name: "slug",
      title: "Transaction Slug",
      options: { collapsible: true, collapsed: false },
    },
  ],

  fields: [
    defineField({
      name: "nameen",
      title: "Transaction Name English",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
      fieldset: "name",
    }),
    defineField({
      name: "namefr",
      title: "Transaction Name French",
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
