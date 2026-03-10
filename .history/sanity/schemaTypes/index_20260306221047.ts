import { type SchemaTypeDefinition } from 'sanity'
import { location } from '../schemas/location'
import {transaction} from "../s"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [location],
}
