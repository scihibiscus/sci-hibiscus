import React from 'react'
import Navbar from '../Navigation/Navbar'
import HeroSection from './HeroSection'

const HomePageWrapper = () => {
  return (
    <>
      <Navbar backColor='white' hoverColor='var()' />
      <HeroSection />
    </>
  )
}

export default HomePageWrapper