"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import LinkModal from "../ReUsables/LinkModal";
import ReuseHeroSection from "../ReUsables/ReuseHeroSection";
// import ServicesSection from "./ServicesSection";
import ReuseProjectDisplay from "../ReUsables/ReuseProjectDisplay";
import Footer from "../Navigation/Footer";
import TranslateLoader from "../Navigation/TranslateLoader";
import { AnimatePresence } from "framer-motion";

const ServicesPageWrapper = () => {
  //Translations
  const { t } = useTranslation();

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

  // //HeroContent
  // const heroContent = {
  //   text: "Services",
  //   heading: t("ServicesPage:services"),
  //   heading2: t("ServicesPage:servhead"),
  //   text2: t("ServicesPage:servtext"),
  // };

  //HeroContent
  const heroContent = {
    text: "Services",
    heading: t("ServicesPage:catser"),
    heading2: t("ServicesPage:catser2"),
    text2: t("ServicesPage:catser3"),
  };

  const mainContent = [
    {
      image: IMAGE,
      smallText: t("HomePage:current"),
      largeText: t("HomePage:devinsale"),
      linkName: t("HomePage:herocta"),
      linkHref:
        currentLocale === "en"
          ? "/en/projects/current-projects"
          : "/fr/projets/projets-actuels",
    },
    {
      image: IMAGE2,
      smallText: t("HomePage:reserve"),
      largeText: t("HomePage:planning"),
      linkName: t("HomePage:inplanning"),
      linkHref:
        currentLocale === "en"
          ? "/en/projects/in-planning"
          : "/fr/projets/en-planification",
    },
    {
      image: IMAGE3,
      smallText: t("ProjectsPage:ref"),
      largeText: t("ProjectsPage:reference"),
      linkName: t("ProjectsPage:ref"),
      linkHref:
        currentLocale === "en"
          ? "/en/projects/references"
          : "/fr/projets/references",
    },
  ];

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
        backColor="var(--black)"
        hoverColor="var(--gold)"
        textColor="white"
        thColor="white"
        linkColor="var(--black)"
        lhColor="rgba(0,0,0,0.6)"
        logoColor="var(--black)"
      />
      <LinkModal lenis={lenis} ref={newsletterRef} />
      <ReuseHeroSection content={heroContent} />
      {/* <ServicesSection lenis={lenis} /> */}
      <ReuseProjectDisplay />
      <Footer ref={newsletterRef} />
    </>
  );
};

export default ServicesPageWrapper;
