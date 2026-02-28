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
import IMAGE from "../../public/images/image4.jpg";
import IMAGE2 from "../../public/images/image8.jpg";

const ServicesPageWrapper = () => {
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
      smallText: t("ServicesPage:rent"),
      largeText: t("ServicesPage:find"),
      linkName: t("ServicesPage:rentcta"),
      linkHref:
        currentLocale === "en"
          ? "/en/services/current-projects"
          : "/fr/services/projets-actuels",
    },
    {
      image: IMAGE2,
      smallText: t("ServicesPage:buy"),
      largeText: t("ServicesPage:availablebuy"),
      linkName: t("ServicesPage:buycta"),
      linkHref:
        currentLocale === "en"
          ? "/en/services/in-planning"
          : "/fr/services/en-planification",
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
      <ReuseProjectDisplay content={mainContent} />
      <Footer ref={newsletterRef} />
    </>
  );
};

export default ServicesPageWrapper;
