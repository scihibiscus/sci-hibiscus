import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

interface Property {
  slug: { current: string };
}

async function getP(): Promise<Property[]> {
  const query = `*[_type == "property"] 
    | order(publishedAt desc){
      slug
    }`;
  // on précise le type attendu par fetch
  const data = await client.fetch<Property[]>(query);
  return data;
}