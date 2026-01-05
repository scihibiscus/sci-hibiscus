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

  return (
    <div className={styles.herosection}>
      <div className={styles.image__wrapper}>
        <div className={styles.hero__video}>
          <VideoJS options={videoJsOptions} />
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
                link=currentLocale==="en" ? "/en/projects/current-projects" : "/fr/projets/projets-actuels"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
