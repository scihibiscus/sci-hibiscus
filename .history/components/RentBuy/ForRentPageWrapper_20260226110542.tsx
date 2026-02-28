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

const ForRentPageWrapper = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  //Translating State
  const [localState, setLocalState] = useState("Initial State");

  return <div>Wrapper</div>;
};

export default ForRentPageWrapper;
