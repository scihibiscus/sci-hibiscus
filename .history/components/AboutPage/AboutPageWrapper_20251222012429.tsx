"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import Navbar from "../Navigation/Navbar";
import LinkModal from "../ReUsables/LinkModal";
import IMAGE from "../../public/images/heroimage.jpg"
import ImageHeroSection from "../ReUsables/ImageHeroSection";
import Footer from "../Navigation/Footer";


const AboutPageWrapper = () => {
  //Translating State
  const [localState, setLocalState] = useState("Initial State");

  const [lenis, setLenis] = useState<Lenis | null>(null);
  const newsletterRef = useRef<HTMLDivElement | null>(null);

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
    // Store the lenis instance in state
    setLenis(lenisInstance);
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
      <LinkModal lenis={lenis} ref={newsletterRef} />
      <ImageHeroSection span={t()} />
      <Footer ref={newsletterRef} />
    </>
  );
};

export default AboutPageWrapper;