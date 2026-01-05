"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import IMAGE from "../../public/images/heroimage.jpg";
import Apostrophe from "@/utils/Icons/Apostrophe";
import styles from "../../styles/AboutPage/directorword.module.scss";

const DirectorWord = () => {
  const { t } = useTranslation();

    //Parallax
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
  
      offset: ["start end", "end start"],
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
    <div className={styles.director__word}>
      <div className={styles.dw__wrapper} >
        <div className={styles.dw__image} ref>
          <div className={styles.dwimg}>
            <Image
              fill
              quality={100}
              placeholder="blur"
              alt="Sci Hibiscus"
              src={IMAGE}
            />
          </div>
          <div className={styles.dw__gradient}></div>
        </div>
        <div className={styles.dw__content}>
          <div className={`container ${styles.dw__container}`}>
            <div className={styles.dwc__content}>
              <div className={styles.apost}>
                <Apostrophe />
              </div>
              <div className={styles.wordings}>
                <p className={styles.word__p}>{t("AboutPage:founderone")}</p>
                <p className={styles.pp}>{t("AboutPage:foundertwo")}</p>
                <div className={styles.position}>
                  <span className={styles.name}>John Doe Kelly</span>
                  <span>{t("AboutPage:position")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorWord;
