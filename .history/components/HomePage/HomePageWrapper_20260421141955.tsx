"use client";

import React, { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import Navbar from "../Navigation/Navbar";
import HeroSection from "./HeroSection";
import OurConcept from "./OurConcept";
import LinkModal from "../ReUsables/LinkModal";
import Projects from "./Projects";
import Statistics from "./Statistics";
import BlogSection from "./BlogSection";
import Footer from "../Navigation/Footer";
import TranslateLoader from "../Navigation/TranslateLoader";
import Preloader from "../Navigation/Preloader";
import QuickSearch from "./QuickSearch";
import Testimonial from "./Testimonial";
import { AnimatePresence } from "framer-motion";
import { LocationsData, TransactionData } from "@/types";
import VenueBanner from "../ReUsables/VenueBanner";
import PropertiesDisplay from "./PropertiesDisplay";

interface PropertyProps {
  _id: string;
  area: number;
  bath?: number | null;
  parlour?: number | null;
  room?: number | null;
  price: number;
  name: string;
  propertytype: {
    nameen: string;
    namefr: string;
    slug: {
      current: string;
    };
  };
  transaction: {
    nameen: string;
    namefr: string;
    slug: {
      current: string;
    };
  };
  quarter: string;
  city: {
    cityname: string;
    slug: {
      current: string;
    };
  };
  slug: {
    current: string;
  };
  rentpricing: string;
  mainimage: {
    alt: string;
  };
}

const HomePageWrapper = ({
  transactions,
  locations,
  propertytypes,
  properties
}: {
  transactions: TransactionData[];
  locations: LocationsData[];
  propertytypes: TransactionData[];
  properties: Proper
}) => {
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

  return (
    <>
      <Preloader />
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
        backColor="white"
        hoverColor="var(--gold)"
        textColor="var(--black)"
        thColor="white"
        linkColor="white"
        lhColor="rgba(255,255,255,0.5)"
        logoColor="white"
      />
      <LinkModal lenis={lenis} ref={newsletterRef} />
      <HeroSection />
      <VenueBanner/>
      <PropertiesDisplay/>
      <QuickSearch transactions={transactions} locations={locations} propertytypes={propertytypes}/>
      <OurConcept />
      {/* <SpecialOffer /> */}
      <Projects />
      <Statistics />
      <Testimonial />
      <BlogSection />
      <Footer ref={newsletterRef} />
    </>
  );
};

export default HomePageWrapper;
