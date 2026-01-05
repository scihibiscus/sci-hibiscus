"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import IMAGE from "../../public/images/image";
import IMAGE2 from "../../public/images/image4.jpg"
import IMAGE3 from "../../public/images/image6.jpg"
import LinkModal from "../ReUsables/LinkModal";
import ReuseProjectDisplay from "../ReUsables/ReuseProjectDisplay";
import ReuseHeroSection from "../ReUsables/ReuseHeroSection";
import Footer from "../Navigation/Footer";

const ProjectsPageWrapper = () => {
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
    text: t("ProjectsPage:allprojects"),
    heading: t("ProjectsPage:apone"),
    heading2: t("ProjectsPage:aptwo"),
    text2: t("ProjectsPage:apthree"),
  };

  //MainContent

  const mainContent = [
    {
      image: IMAGE,
      smallText: t("HomePage:current"),
      largeText: t("HomePage:devinsale"),
      linkName: t("HomePage:herocta"),
      linkHref: currentLocale==="en" ? "/en/projects/current-projects" : "/fr/projets/projets-actuels",
    },
    {
      image: IMAGE2,
      smallText: t("HomePage:reserve"),
      largeText: t("HomePage:planning"),
      linkName: t("HomePage:inplanning"),
      linkHref: currentLocale==="en" ? "/en/projects/in-planning" : "/fr/projets/en-planification",
    },
    {
      image: IMAGE3,
      smallText: t("ProjectsPage:ref"),
      largeText: t("ProjectsPage:reference"),
      linkName: t("ProjectsPage:ref"),
      linkHref: currentLocale==="en" ? "/en/projects/references" : "/fr/projets/references",
    },
  ]

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
      <ReuseProjectDisplay content={mainContent}/>
      <LinkModal lenis={lenis} ref={newsletterRef} />
      <Footer ref={newsletterRef} />
    </>
  );
};

export default ProjectsPageWrapper;
