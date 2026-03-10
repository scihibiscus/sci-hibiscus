import React from 'react'
import { client } from "@/sanity/lib/client";
import { ForRentPageWrapper } from '@/components'

async function getCategories() {
  const query = `*[_type == "transaction"] | order(_createdAt asc){
  nameen,
    namefr,
    slug
}`;

  const data = await client.fetch(query);
  return data;
}

const Home = () => {
  return (
    <ForRentPageWrapper />
  )
}

export default Home