"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import LinkModal from "../ReUsables/LinkModal";
import Footer from "../Navigation/Footer";
import { AnimatePresence } from "framer-motion";
import PropertyHero from "./PropertyHero";
import PropertyAbout from "./PropertyAbout";
import TranslateLoader from "../Navigation/TranslateLoader";
import PropertyDetails from "./PropertyDetails";
import OtherDetails from "./OtherDetails";

const PropertyDetailPage = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  //Translating State
  const [localState, setLocalState] = useState("Initial State");
  const [animFinished, setAnimFinished] = useState(false);

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
      <PropertyHero />
      <PropertyAbout />
      <PropertyDetails/>
      <OtherDetails/>
      <PropertyGallery/>
      <Footer ref={newsletterRef} />
    </>
  );
};

export default PropertyDetailPage;
