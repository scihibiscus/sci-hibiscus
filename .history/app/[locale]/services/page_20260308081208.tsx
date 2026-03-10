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

async function getLocations() {
  const query = `*[_type == "location"] | order(_createdAt asc){
  cityname,
    slug
}`;

  const data = await client.fetch(query);
  return data;
}

async function getPropertyType() {
  const query = `*[_type == "location"] | order(_createdAt asc){
    nameen,
    namefr,
    slug
}`;

  const data = await client.fetch(query);
  return data;
}

export default async function Home = () => {
  const transactionData = getTransactions()
  const locationsData = getLocations()
  const propertyData = getPropertyType()

  const [transaction, locations,] = await Promise.all([artistData, albumsData])

  return <ForRentPageWrapper />;
};

