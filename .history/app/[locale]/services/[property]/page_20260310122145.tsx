import React from 'react'
import { getProperty, getAllPropertySlugs } from '@/sanity/lib/property'
import { PropertyDetailPage} from '@/components'

type Props = {
  params: Promise<{ locale: string; property: string }>;
};

// Generate static params for all blog posts
export async function generateStaticParams() {
  const propertySlugs = await getAllBlogSlugs(); // You need to create this function

  // Generate params for both locales
  const params = [];

  for (const slug of blogSlugs) {
    params.push({ locale: "en", blog: slug }, { locale: "fr", blog: slug });
  }

  return params;
}

const Home = () => {
  return (
    <PropertyDetailPage />
  )
}

export default Home