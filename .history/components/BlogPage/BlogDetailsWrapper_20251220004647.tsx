"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import BlogHeader from "./BlogHeader";
import LinkModal from "../ReUsables/LinkModal";
import Footer from "../Navigation/Footer";

const BlogDetailsWrapper = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

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
    text: "Blog",
    heading: t("BlogPage:blog"),
    heading2: t("BlogPage:blogtext"),
    text2: t("BlogPage:blogmain"),
  };

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
      <LinkModal lenis={lenis} ref={newsletterRef} />
      <BlogHeader />
      <
      <Footer ref={newsletterRef} />
    </>
  );
};

export default BlogDetailsWrapper;