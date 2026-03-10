import { defineType, defineField } from "sanity";
import {HomeIcon} from '@sanity/icons'


export const property = defineType({
  name: "property",
  title: "Property",
  type: "document",
  fieldsets: [
    {
      name: "keydetails",
      title: "Key Details",
      options: { collapsible: true, collapsed: false },
    }
  ],
  fields: [
    defineField({
      name: "name",
      title: "Property Name",
      type: "string",
      
    })
  ]
})