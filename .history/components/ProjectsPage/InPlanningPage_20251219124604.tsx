import React from 'react'

const InPlanningPage = () => {
  return (
    <div>InPlanningPage</div>
  )
}

export default InPlanningPage

"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import IMAGE from "../../public/images/heroimage.jpg";
import LinkModal from "../ReUsables/LinkModal";
import ReuseProjectDisplay from "../ReUsables/ReuseProjectDisplay";
import ReuseHeroSection from "../ReUsables/ReuseHeroSection";
import Footer from "../Navigation/Footer";

const CurrentProjectsPage = () => {
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
    text: t("ProjectsPage:currentprojects"),
    heading: t("ProjectsPage:cpone"),
    heading2: t("ProjectsPage:cptwo"),
    text2: t("ProjectsPage:cpthree"),
  };

  //MainContent

  const mainContent = [
    {
      image: IMAGE,
      smallText: "DOUALA, BONAPRISO",
      largeText: "BONAPRISO KALAPRO RESIDENCE",
      linkName: t("HomePage:morecta"),
      subText: t("ProjectsPage:subtext"),
      linkHref:
        currentLocale === "en"
          ? "/en/projects/current-projects/bonapriso-kalapro-residence"
          : "/fr/projets/projets-actuels/bonapriso-kalapro-residence",
    },
    {
      image: IMAGE,
      smallText: "DOUALA, BONAPRISO",
      largeText: "BONAPRISO KALAPRO RESIDENCE",
      linkName: t("HomePage:morecta"),
      subText: t("ProjectsPage:subtext"),
      linkHref:
        currentLocale === "en"
          ? "/en/projects/current-projects/bonapriso-kalapro-residence"
          : "/fr/projets/projets-actuels/bonapriso-kalapro-residence",
    },
    {
      image: IMAGE,
      smallText: "DOUALA, BONAPRISO",
      largeText: "BONAPRISO KALAPRO RESIDENCE",
      linkName: t("HomePage:morecta"),
      subText: t("ProjectsPage:subtext"),
      linkHref:
        currentLocale === "en"
          ? "/en/projects/current-projects/bonapriso-kalapro-residence"
          : "/fr/projets/projets-actuels/bonapriso-kalapro-residence",
    },
    {
      image: IMAGE,
      smallText: "DOUALA, BONAPRISO",
      largeText: "BONAPRISO KALAPRO RESIDENCE",
      linkName: t("HomePage:morecta"),
      subText: t("ProjectsPage:subtext"),
      linkHref:
        currentLocale === "en"
          ? "/en/projects/current-projects/bonapriso-kalapro-residence"
          : "/fr/projets/projets-actuels/bonapriso-kalapro-residence",
    },
    {
      image: IMAGE,
      smallText: "DOUALA, BONAPRISO",
      largeText: "BONAPRISO KALAPRO RESIDENCE",
      linkName: t("HomePage:morecta"),
      subText: t("ProjectsPage:subtext"),
      linkHref:
        currentLocale === "en"
          ? "/en/projects/current-projects/bonapriso-kalapro-residence"
          : "/fr/projets/projets-actuels/bonapriso-kalapro-residence",
    },
  ];

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
      <ReuseProjectDisplay content={mainContent} />
      <LinkModal lenis={lenis} ref={newsletterRef} />
      <Footer ref={newsletterRef} />
    </>
  );
};

export default CurrentProjectsPage;