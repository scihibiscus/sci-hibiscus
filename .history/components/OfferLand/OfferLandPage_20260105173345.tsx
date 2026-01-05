"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import ContactSales from "./ContactSales";
import Navbar from "../Navigation/Navbar";
import LinkModal from "../ReUsables/LinkModal";
import ReuseHeroSection from "../ReUsables/ReuseHeroSection";
import InterestSection from "./InterestSection";
import Footer from "../Navigation/Footer";
import TranslateLoader from "../Navigation/TranslateLoader";
import { AnimatePresence } from "framer-motion";

const OfferLandPage = () => {
  //Translations
  const { t } = useTranslation();

  //Translating State
  const [localState, setLocalState] = useState("Initial State");
  const [animFinished, setAnimFinished] = useState(false);

  const [lenis, setLenis] = useState<Lenis | null>(null);
  const newsletterRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

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

  //HeroContent
  const heroContent = {
    text: "Acquisition",
    heading: t("BuylandPage:buy"),
    heading2: t("BuylandPage:buyhead"),
    text2: t("BuylandPage:buytext"),
  };


  return (
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
    <>
      <Navbar
        setLocalState={setLocalState}
        backColor="var(--black)"
        hoverColor="var(--gold)"
        textColor="white"
        thColor="white"
        linkColor="var(--black)"
        lhColor="rgba(0,0,0,0.6)"
        logoColor="var(--black)"
      />
      <LinkModal lenis={lenis} ref={newsletterRef} />
      <ReuseHeroSection content={heroContent} lenis={lenis} ref={contactRef} />
      <InterestSection />
      <ContactSales ref={contactRef}/>
      <Footer ref={newsletterRef} />
    </>
  );
};

export default OfferLandPage;