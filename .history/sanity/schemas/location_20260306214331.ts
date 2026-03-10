import { defineType, defineField } from "sanity";

export const location = defineType({
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    defineField({
      name: "cityname",
      title: "City Name",
      type: "string",
      validation: (rule) => rule.required().error("Required"),
    }),
  ]
})