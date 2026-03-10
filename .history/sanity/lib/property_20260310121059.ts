import { client } from "@/sanity/lib/client";

export async function getBlog(property: string) {
  const query = `*[_type == "property" && slug.current == "${property}"][0] {

}`;

  const data = await client.fetch(query);
  return data;
}