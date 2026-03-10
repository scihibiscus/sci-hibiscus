import React from 'react'
import { getProperty, getAllPropertySlugs } from '@/sanity/lib/property'
import { PropertyDetailPage} from '@/components'

type Props = {
  params: Promise<{ locale: string; property: string }>;
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  const propertySlugs = await getAllPropertySlugs(); // You need to create this function

  // Generate params for both locales
  const params = [];

  for (const slug of propertySlugs) {
    params.push({ locale: "en", property: slug }, { locale: "fr", property: slug });
  }

  return params;
}

export default async function Home({
  params,
}: {
  params: Promise<{ property: string }>;
}) {
  const { property } = await params;
  const [propertyDetail]
  return (
    <PropertyDetailPage />
  )
}

