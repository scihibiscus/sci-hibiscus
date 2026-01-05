"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import LinkModal from "../ReUsables/LinkModal";
import ReuseProjectDisplay from "../ReUsables/ReuseProjectDisplay";
import ReuseHeroSection from "../ReUsables/ReuseHeroSection";
import Footer from "../Navigation/Footer";

const ProjectsPageWrapper = () => {
  //Translations
  const { t } = useTranslation();

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

  //HeroContent
  const heroContent = {
    text: t("ProjectsPage:allprojects"),
    heading: t("ProjectsPage:apone"),
    heading2: t("ProjectsPage:aptwo"),
    text2: t("ProjectsPage:apthree"),
  };

  //

  const co

  return (
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
      <ReuseHeroSection content={heroContent} />
      <ReuseProjectDisplay />
      <LinkModal lenis={lenis} ref={newsletterRef} />
      <Footer ref={newsletterRef} />
    </>
  );
};

export default ProjectsPageWrapper;
