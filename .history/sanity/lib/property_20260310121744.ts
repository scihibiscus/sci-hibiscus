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
    room,
    "overview": overview[]{
    "en": overviewen,
    "fr": overviewfr,
    "_key": _key
  },
  "otherdetails": otherdetails[]{
    "en": otheren,
    "fr": otherfr,
    "_key": _key
  },
  "maindetails": maindetails[]{
    "_key": _key,
    "keyEn": key.keyen,
    "keyFr": key.keyfr,
    "valueEn": value.valueen,
    "valueFr": value.valuefr
  },
  "gallery" : gallery[]{
    "type": _type,
    "asset": asset
  }
}`;

  const data = await client.fetch(query);
  return data;
}
