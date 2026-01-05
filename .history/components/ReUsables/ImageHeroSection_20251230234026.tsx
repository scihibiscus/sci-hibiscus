"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Arrow from "@/utils/Icons/Arrow";
import { useTranslation } from "react-i18next";
import HighlightText from "@/utils/HighlightText";
import styles from "../../styles/ReUsables/imagehero.module.scss";

const ImageHeroSection = ({
  span,
  header,
  specialText,
  button,
  image,
  setActiveQuestion
}: {
  span: string;
  header: string;
  specialText?: { text: string; words: string[] };
  button?: { text: string };
  image: StaticImageData;
  setActiveQ
}) => {
  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end start"],
  });

  //Handle Resizing Y value
  const [transform, setTransform] = useState(-120);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 540) {
        setTransform(-60);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-90);
      } else {
        setTransform(-120);
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
    <div className={styles.ih__section} ref={container}>
      <div className={styles.hero__image}>
        <motion.div className={styles.h__image} style={{ y }}>
          <Image
            fill
            quality={100}
            src={image}
            alt="Sci Hibiscus"
            placeholder="blur"
          />
        </motion.div>
        <div className={styles.hero__gradient}></div>
      </div>
      <div className={styles.hero__content}>
        <div className={`container ${styles.hs__container}`}>
          <div className={styles.hs__content}>
            <div className={styles.hsc__left}>
              <span className={styles.hsc__span}>{span}</span>
              <h3 className={styles.hsc__h3}>{header}</h3>
              {specialText && (
                <HighlightText
                  text={specialText.text}
                  words={specialText.words}
                />
              )}
            </div>
            {button && (
              <div className={styles.hsc__right}>
                <div className={styles.button}>
                  <span>{button.text}</span>
                  <div className={styles.bicon}>
                    <div className={styles.bicon__wrapper}>
                      <div className={styles.icons}>
                        <Arrow />
                      </div>
                      <div className={styles.icons}>
                        <Arrow />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHeroSection;
