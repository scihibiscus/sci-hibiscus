"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import VideoJS from "../ReUsables/VideoJS";
import HighlightText from "@/utils/HighlightText";
import Button from "../ReUsables/Button";
import styles from "../../styles/HomePage/herosection.module.scss";

const HeroSection = () => {
  //Translations
  const { t } = useTranslation();

  const mainText = t("HomePage:herotext");
  const highlights = ["vous.", "votre avenir.", "you.", "your future."];

  //Video JS
  const videoJsOptions = {
    autoplay: true,
    muted: true,
    loop: true,
    controls: false,
    playsinline: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "/video/video.mp4",
        type: "video/mp4",
      },
    ],
  };

  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end start"],
  });

  //Handle Resizing Y value
  const [transform, setTransform] = useState(-160);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 540) {
        setTransform(-70);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-110);
      } else {
        setTransform(-160);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [transform, 0]);

  return (
    <div className={styles.herosection} ref={container}>
      <div className={styles.image__wrapper}>
        <div className={styles.hero__video}>
          <motion.div className={styles.hero__image} style={{ y }}>
            <VideoJS options={videoJsOptions} />
          </motion.div>
        </div>
        <div className={styles.hero__gradient}></div>
      </div>
      <div className={styles.hero__main}>
        <div className={`container ${styles.hero__container}`}>
          <div className={styles.hc__content}>
            <h1 className={styles.hc__h1}>{t("HomePage:slogan")}</h1>
            <HighlightText text={mainText} words={highlights} />
            <div className={styles.hc__button}>
              <Button
                text={t("HomePage:herocta")}
                backColor="white"
                hoverColor="var(--gold)"
                textColor="var(--black)"
                thColor="white"
                iconColor="var(--black)"
                ihColor="white"
                link="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
