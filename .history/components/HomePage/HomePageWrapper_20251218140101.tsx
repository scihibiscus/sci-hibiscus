"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import Navbar from "../Navigation/Navbar";
import HeroSection from "./HeroSection";
import OurConcept from "./OurConcept";
import SpecialOffer from "../ReUsables/SpecialOffer";
import LinkModal from "../ReUsables/LinkModal";
import Projects from "./Projects";
import Statistics from "./Statistics";

const HomePageWrapper = () => {
  //Translating State
  const [localState, setLocalState] = useState("Initial State");

  //Smooth Scroll
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1.2,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar
        setLocalState={setLocalState}
        backColor="white"
        hoverColor="var(--gold)"
        textColor="var(--black)"
        thColor="white"
        linkColor="white"
        lhColor="rgba(255,255,255,0.5)"
        logoColor="white"
      />
      <LinkModal />
      <HeroSection />
      <OurConcept />
      <SpecialOffer />
      <Projects />
      <Statistics />
      <Blo
    </>
  );
};

export default HomePageWrapper;
