import { type SchemaTypeDefinition } from "sanity";
import { location } from "../schemas/location";
import { transaction } from "../schemas/transaction";
import pro

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [location, transaction],
};
