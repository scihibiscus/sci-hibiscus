import React from 'react'
import { getProperty } from '@/sanity/lib/property'
import { PropertyDetailPage} from '@/components'

type Props = {
  params: Promise<{ locale: string; blog: string }>;
};


const Home = () => {
  return (
    <PropertyDetailPage />
  )
}

export default Home