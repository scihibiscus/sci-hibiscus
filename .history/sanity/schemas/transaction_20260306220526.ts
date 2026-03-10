import { defineType, defineField } from "sanity";
import {TransferIcon} from '@sanity/icons'

export const transaction = defineType({
  name: "transaction",
  title: "Transaction",
  type: "document",
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
      title: "Transaction Name English"
      
    })
  ]
})