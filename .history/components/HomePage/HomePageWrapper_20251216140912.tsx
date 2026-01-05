import React from 'react'
import Navbar from '../Navigation/Navbar'
import HeroSection from './HeroSection'

const HomePageWrapper = () => {
  return (
    <>
      <Navbar backColor='white' hoverColor='var(--gold)' textColor='var(--black)' thColor='white' linkColor='var(--black)'  />
      <HeroSection />
    </>
  )
}

export default HomePageWrapper