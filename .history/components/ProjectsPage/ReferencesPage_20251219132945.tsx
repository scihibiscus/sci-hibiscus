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

const InPlanningPage = () => {
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
    text: t("ProjectsPage:inplanning"),
    heading: t("ProjectsPage:ipone"),
    heading2: t("ProjectsPage:iptwo"),
    text2: t("ProjectsPage:ipthree"),
  };

  //MainContent

  const mainContent = [
    {
      image: IMAGE,
      smallText: "YAOUNDE, BASTOS",
      largeText: "BASTOS COMMERCIAL RESIDENCE",
      linkName: t("HomePage:morecta"),
      subText: t("ProjectsPage:subtext2"),
      linkHref:
        currentLocale === "en"
          ? "/en/projects/in-planning/bastos-commercial-residence"
          : "/fr/projets/en-planification/bastos-commercial-residence",
    },
    {
      image: IMAGE,
      smallText: "YAOUNDE, BASTOS",
      largeText: "BASTOS COMMERCIAL RESIDENCE",
      linkName: t("HomePage:morecta"),
      subText: t("ProjectsPage:subtext2"),
      linkHref:
        currentLocale === "en"
          ? "/en/projects/in-planning/bastos-commercial-residence"
          : "/fr/projets/en-planification/bastos-commercial-residence",
    },
    {
      image: IMAGE,
      smallText: "YAOUNDE, BASTOS",
      largeText: "BASTOS COMMERCIAL RESIDENCE",
      linkName: t("HomePage:morecta"),
      subText: t("ProjectsPage:subtext2"),
      linkHref:
        currentLocale === "en"
          ? "/en/projects/in-planning/bastos-commercial-residence"
          : "/fr/projets/en-planification/bastos-commercial-residence",
    },
    {
      image: IMAGE,
      smallText: "YAOUNDE, BASTOS",
      largeText: "BASTOS COMMERCIAL RESIDENCE",
      linkName: t("HomePage:morecta"),
      subText: t("ProjectsPage:subtext2"),
      linkHref:
        currentLocale === "en"
          ? "/en/projects/in-planning/bastos-commercial-residence"
          : "/fr/projets/en-planification/bastos-commercial-residence",
    },
    {
      image: IMAGE,
      smallText: "YAOUNDE, BASTOS",
      largeText: "BASTOS COMMERCIAL RESIDENCE",
      linkName: t("HomePage:morecta"),
      subText: t("ProjectsPage:subtext2"),
      linkHref:
        currentLocale === "en"
          ? "/en/projects/in-planning/bastos-commercial-residence"
          : "/fr/projets/en-planification/bastos-commercial-residence",
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

export default References;