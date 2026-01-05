"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import LinkModal from "../ReUsables/LinkModal";
import IMAGE from "../../public/images/image3.jpg";
import ImageHeroSection from "../ReUsables/ImageHeroSection";
import CareerSection from "./CareerSection";
import Footer from "../Navigation/Footer";
import CareerTwo from "./CareerTwo";
import CareerTravail from "./CareerTravail";
import CareerThree from "./CareerThree";

const AboutPageWrapper = () => {
  //Translating State
  const [localState, setLocalState] = useState("Initial State");
  const { t } = useTranslation();

  const [lenis, setLenis] = useState<Lenis | null>(null);
  const newsletterRef = useRef<HTMLDivElement | null>(null);

  const specialText = {
    text: t("CareerPage:team"),
    words: ["a team.", "determination.", "équipe.", "détermination."],
  };

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
      <ImageHeroSection
        span={t("CareerPage:career")}
        header={t("CareerPage:construct")}
        specialText={specialText}
        image={IMAGE}
      />
      <CareerTwo />
      <CareerSection />
      <CareerTravail />
      <CareerThree />
      <Footer ref={newsletterRef} />
    </>
  );
};

export default AboutPageWrapper;
