"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import Navbar from "../Navigation/Navbar";
import HeroSection from "./HeroSection";
import OurConcept from "./OurConcept";
import SpecialOffer from "../ReUsables/SpecialOffer";
import LinkModal from "../ReUsables/LinkModal";
import Projects from "./Projects";
import Statistics from "./Statistics";
import BlogSection from "./BlogSection";
import Footer from "../Navigation/Footer";
import TranslateLoader from "../Navigation/TranslateLoader";
import { AnimatePresence } from "framer-motion";

const HomePageWrapper = () => {
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

  const [animFinished, setAnimFinished] = useState(false);

  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setLocalState("InitialState");
          setAnimFinished(false);
        }}
      >
        {localState === "Translating State" && !animFinished && (
          <TranslateLoader
            localState={localState}
            animFinished={animFinished}
            setAnimFinished={setAnimFinished}
          />
        )}
      </AnimatePresence>
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
      <HeroSection />
      <OurConcept />
      <SpecialOffer />
      <Projects />
      <Statistics />
      <BlogSection />
      <Footer ref={newsletterRef} />
    </>
  );
};

export default HomePageWrapper;
