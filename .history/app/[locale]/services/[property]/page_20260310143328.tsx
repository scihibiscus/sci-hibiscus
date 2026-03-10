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

//MetaData
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { locale, property } = await params;
  const propertyPost = await getProperty(property);

  return {
    title: `${locale === "en" ? propertyPost.titleen : blogpost.titlefr} - SCI Hibiscus`,
    description: locale === "en" ? blogpost.excerpten : blogpost.excerptfr,
    openGraph: {
      images: [
        {
          url: urlFor(blogpost.image).width(1200).height(630).url(),
        },
      ],
    },
  };
}


export default async function Home({
  params,
}: {
  params: Promise<{ property: string }>;
}) {
  const { property } = await params;
  const propertyDetail = await getProperty(property);

  return (
    <PropertyDetailPage property={propertyDetail} />
  )
}

