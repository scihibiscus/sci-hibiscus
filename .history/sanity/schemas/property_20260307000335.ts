import { defineType, defineField } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const property = defineType({
  name: "property",
  title: "Property",
  type: "document",
  icon: HomeIcon,
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
          .max(96)
          .error("Property Name should be between 3 - 96 characters."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required().error("Required"),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "available",
      title: "Available",
      type: "boolean",
      initialValue: true,
      validation: (rule) =>
        rule
          .required()
          .error("Required")
    }),
    defineField({
      name: "price",
      title: "Price (FCFA)",
      type: "number",
      validation: (rule) => rule.required().error("Required")
    }),
    defineField({
      name: "permonth",
      title: "Per Month",
      description: "If this property is on rent, is this price above a price per"
      type: "boolean",
      initialValue: true,
      validation: (rule) =>
        rule
          .required()
          .error("Required")
    }),
  ],
});
