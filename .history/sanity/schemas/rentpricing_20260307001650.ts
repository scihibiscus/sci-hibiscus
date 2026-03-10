import { defineType, defineField } from "sanity";
import {CreditCardIcon} from '@sanity/icons'

export const rentpricing = defineType({
  name: "rentpricing",
  title: "Rent Pricing",
  type: "document",
  icon: CreditCardIcon,
  fields: [
    defineField({
      name: "frequency",
      title: "Frequency",
      type: "string"
    })
  ]
})