import React from 'react'
import Navbar from '../Navigation/Navbar'
import HeroSection from './HeroSection'
import LinkModal from '../ReUsables/LinkModal'

const HomePageWrapper = () => {
  return (
    <>
      <Navbar backColor='white' hoverColor='var(--gold)' textColor='var(--black)' thColor='white' linkColor='white' lhColor='rgba(255,255,255,0.5)' logoColor='white' />
      <HeroSection />
      <LinkModal/>
    </>
  )
}

export default HomePageWrapper