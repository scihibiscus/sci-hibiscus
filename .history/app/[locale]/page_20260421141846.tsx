import React from "react";
import { client } from "@/sanity/lib/client";
import { HomePageWrapper } from "@/components";

// Generate static params for supported locales
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
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

async function getLocations() {
  const query = `*[_type == "location"] | order(_createdAt asc){
  cityname,
    slug
}`;

  const data = await client.fetch(query);
  return data;
}

async function getPropertyType() {
  const query = `*[_type == "propertytype"] | order(_createdAt asc){
    nameen,
    namefr,
    slug
}`;

  const data = await client.fetch(query);
  return data;
}

async function getProperty() {
  const query = `*[_type == "property" | order(_createdAt asc){
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

export default async function Home({ params }: { params: { locale: string } }) {
  const transactionData = getTransactions();
  const locationsData = getLocations();
  const propertyData = getPropertyType();
  const properties = getProperty()

  const [transactions, locations, propertytypes] = await Promise.all([
    transactionData,
    locationsData,
    propertyData,
  ]);

  return (
    <HomePageWrapper
      transactions={transactions}
      locations={locations}
      propertytypes={propertytypes}
    />
  );
}
