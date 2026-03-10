"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import TranslateLoader from "../Navigation/TranslateLoader";
import { AnimatePresence } from "framer-motion";
import IMAGE from "../../public/images/image2.jpg";
import PropertyDisplay from "./PropertyDisplay";
import LinkModal from "../ReUsables/LinkModal";
import RentBuyHero from "./RentBuyHero";
import { LocationsData, TransactionData } from "@/types";

const ForRentPageWrapper = ({transactions, locations, propertytpe}: {transactions: TransactionData, locations: LocationsData, }) => {
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

  //HeroContent
  const heroContent = {
    text: t("ServicesPage:rent"),
    heading: t("ServicesPage:find"),
    // heading2: t("ServicesPage:filtertext")
  };

  const propertyData = [
    {
      image: IMAGE,
      status: "Rent",
      rentStatus: "perDay",
      name: "Bureau du park",
      location: "Bastos, Yaounde",
      price: 50000,
      keyData: {
        type: t("ServicesPage:office"),
        rooms: 3,
        bath: 2,
        living: 1,
        area: 60,
      },
    },
    {
      image: IMAGE,
      status: "Rent",
      rentStatus: "perDay",
      name: "Bureau du park",
      location: "Bastos, Yaounde",
      price: 50000,
      keyData: {
        type: t("ServicesPage:office"),
        rooms: 3,
        bath: 2,
        living: 1,
        area: 60,
      },
    },
    {
      image: IMAGE,
      status: "Rent",
      rentStatus: "perDay",
      name: "Bureau du park",
      location: "Bastos, Yaounde",
      price: 50000,
      keyData: {
        type: t("ServicesPage:office"),
        rooms: 3,
        bath: 2,
        living: 1,
        area: 60,
      },
    },
    {
      image: IMAGE,
      status: "Rent",
      rentStatus: "perDay",
      name: "Bureau du park",
      location: "Bastos, Yaounde",
      price: 50000,
      keyData: {
        type: t("ServicesPage:office"),
        rooms: 3,
        bath: 2,
        living: 1,
        area: 60,
      },
    },
    {
      image: IMAGE,
      status: "Rent",
      rentStatus: "perDay",
      name: "Bureau du park",
      location: "Bastos, Yaounde",
      price: 50000,
      keyData: {
        type: t("ServicesPage:office"),
        rooms: 3,
        bath: 2,
        living: 1,
        area: 60,
      },
    },
    {
      image: IMAGE,
      status: "Rent",
      rentStatus: "perDay",
      name: "Bureau du park",
      location: "Bastos, Yaounde",
      price: 50000,
      keyData: {
        type: t("ServicesPage:office"),
        rooms: 3,
        bath: 2,
        living: 1,
        area: 60,
      },
    },
    {
      image: IMAGE,
      status: "Rent",
      rentStatus: "perDay",
      name: "Bureau du park",
      location: "Bastos, Yaounde",
      price: 50000,
      keyData: {
        type: t("ServicesPage:office"),
        rooms: 3,
        bath: 2,
        living: 1,
        area: 60,
      },
    },
    {
      image: IMAGE,
      status: "Rent",
      rentStatus: "perDay",
      name: "Bureau du park",
      location: "Bastos, Yaounde",
      price: 50000,
      keyData: {
        type: t("ServicesPage:office"),
        rooms: 3,
        bath: 2,
        living: 1,
        area: 60,
      },
    },
    {
      image: IMAGE,
      status: "Rent",
      rentStatus: "perDay",
      name: "Bureau du park",
      location: "Bastos, Yaounde",
      price: 50000,
      keyData: {
        type: t("ServicesPage:office"),
        rooms: 3,
        bath: 2,
        living: 1,
        area: 60,
      },
    },
    {
      image: IMAGE,
      status: "Rent",
      rentStatus: "perDay",
      name: "Bureau du park",
      location: "Bastos, Yaounde",
      price: 50000,
      keyData: {
        type: t("ServicesPage:office"),
        rooms: 3,
        bath: 2,
        living: 1,
        area: 60,
      },
    },
    {
      image: IMAGE,
      status: "Rent",
      rentStatus: "perDay",
      name: "Bureau du park",
      location: "Bastos, Yaounde",
      price: 50000,
      keyData: {
        type: t("ServicesPage:office"),
        rooms: 3,
        bath: 2,
        living: 1,
        area: 60,
      },
    }
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
      <RentBuyHero content={heroContent}/>
      <LinkModal lenis={lenis} ref={newsletterRef} />
      <PropertyDisplay propertyData={propertyData} />
      <Footer ref={newsletterRef} />
    </>
  );
};

export default ForRentPageWrapper;
