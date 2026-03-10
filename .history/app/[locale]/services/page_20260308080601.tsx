import React from "react";
import { client } from "@/sanity/lib/client";
import { ForRentPageWrapper } from "@/components";

async function getTransactions() {
  const query = `*[_type == "transaction"] | order(_createdAt asc)[0...-1]{
  nameen,
    namefr,
    slug
}`;

  const data = await client.fetch(query);
  return data;
}

async function getTransactions() {
  const query = `*[_type == "transaction"] | order(_createdAt asc)[0...-1]{
  nameen,
    namefr,
    slug
}`;

  const data = await client.fetch(query);
  return data;
}


const Home = () => {
  return <ForRentPageWrapper />;
};

export default Home;
