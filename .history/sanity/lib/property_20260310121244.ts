import { client } from "@/sanity/lib/client";

export async function getBlog(property: string) {
  const query = `*[_type == "property" && slug.current == "${property}"][0] {
_id,
name,
    slug,
    price,
    quarter,
    transaction-> {
      nameen,
      namefr,
      slug
    },
    city->{
      cityname,
      slug
    },
    area,
    mainimage,
    propertytype-> {
      nameen,
      namefr,
      slug
    },
    rentpricing,
    bath,
    parlour,
    room
}`;

  const data = await client.fetch(query);
  return data;
}