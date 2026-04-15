import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";

interface Property {
  slug: { current: string };
}

async function getProperties(): Promise<Property[]> {
  const query = `*[_type == "property"] 
    | order(publishedAt desc){
      slug
    }`;
  // on précise le type attendu par fetch
  const data = await client.fetch<Property[]>(query);
  return data;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const properties = await getProperties();

  const propertyEntries: MetadataRoute.Sitemap = properties.map(({ slug }) => ({
    url: `https://hibiscus.cm/services/${slug.current}`,
    priority: 0.9
  }));

  return [
    { url: "https://hibiscus.cm", priority: 1 },
    ...propertyEntries,
    { url: "https://hibiscus.cm/about", priority: 0.8 },
    { url: "https://hibiscus.cm/contact", priority: 0.8 },
    { url: "https://hibiscus.cm/career", priority: 0.8 },
    { url: "https://hibiscus.cm/projects", priority: 0.7 },
    { url: "https://hibiscus.cm/projects/current-projects", priority: 0.7 },
    { url: "https://hibiscus.cm/projects/in-planning", priority: 0.7 },
    { url: "https://hibiscus.cm/projects/references", priority: 0.7 },
    { url: "https://hibiscus.cm/projects/references", priority: 0.7 },

  ];
}