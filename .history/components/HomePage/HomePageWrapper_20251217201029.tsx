"use client";

import React, {useState, useEffect} from 'react'
import Navbar from '../Navigation/Navbar'
import HeroSection from './HeroSection'
import LinkModal from '../ReUsables/LinkModal'

const HomePageWrapper = () => {
  //Translating State
  const [localState, setLocalState] = useState("Initial State");

  return (
    <>
      <Navbar setLocalState={setLocalState} backColor='white' hoverColor='var(--gold)' textColor='var(--black)' thColor='white' linkColor='white' lhColor='rgba(255,255,255,0.5)' logoColor='white' />
      <HeroSection />
      <LinkModal/>
    </>
  )
}

export default HomePageWrapper