"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import LinkModal from "../ReUsables/LinkModal";
import ReuseHeroSection from "../ReUsables/ReuseHeroSection";
import Footer from "../Navigation/Footer";
import BlogSection from "../HomePage/BlogSection";

const ContactPageWrapper = () => {
  //Translating State
  const [localState, setLocalState] = useState("Initial State");
  const { t } = useTranslation();

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
    text: "Blog",
    heading: t("BlogPage:blog"),
    heading2: t("BlogPage:blogtext"),
    text2: t("BlogPage:blogmain"),
  };

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
      <ReuseHeroSection content={heroContent} />
      <BlogSection />
      <Footer ref={newsletterRef} />
    </>
  );
};

export default ContactPageWrapper;
