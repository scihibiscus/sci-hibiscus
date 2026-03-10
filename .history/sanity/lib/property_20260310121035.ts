import { client } from "@/sanity/lib/client";

export async function getBlog(property: string) {
  const query = `*[_type == "blogpost" && slug.current == "${blog}"][0] {
      titleen,
  titlefr,
  categories[]->,
  image,
    slug,
    publishedAt,
    excerpten,
    excerptfr,
    bodyen,
    bodyfr,
    _id
}`;

  const data = await client.fetch(query);
  return data;
}