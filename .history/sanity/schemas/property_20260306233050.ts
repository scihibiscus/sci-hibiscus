import { defineType, defineField } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const property = defineType({
  name: "property",
  title: "Property",
  type: "document",
  fieldsets: [
    {
      name: "keydetails",
      title: "Key Details",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Property Name",
      type: "string",
      validation: (rule) =>
        rule
          .required()
          .min(3)
          .max(94)
          .error("Property Name should be between 3 - 94 characters."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {}
    })
  ],
});
