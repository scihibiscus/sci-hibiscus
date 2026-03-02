"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import IMAGE from "../../public/images/image2.jpg";
import styles from "../../styles/RentBuyPage/propertyhero.module.scss";

const PropertyHero = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

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

  const keyData = {
    transac: t("ServicesPage:forrent"),
    type: t("ServicesPage:office"),
    rooms: 3,
    bath: 2,
    living: 1,
    area: 60,
  };

  return (
    <div className={styles.ph__section} ref={container}>
      <div className={styles.hero__image}>
        <motion.div className={styles.h__image} style={{ y }}>
          <Image
            fill
            quality={100}
            src={IMAGE}
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
              <h3 className={styles.hsc__h3}>Bureau du Park</h3>
              <div className={styles.prop__charac}>
                {keyData.transac && (
                  <span className={styles.type}>{keyData.transac}</span>
                )}
                {keyData.type && (
                  <span>{keyData.type}</span>
                )}
                {keyData.rooms && (
                  <span>
                    {keyData.rooms} {t("ServicesPage:room")}
                  </span>
                )}
                {keyData.bath && (
                  <span>
                    {keyData.bath} {t("ServicesPage:bath")}
                  </span>
                )}
                {keyData.living && (
                  <span>
                    {keyData.living} {t("ServicesPage:living")}
                  </span>
                )}
                {keyData.area && <span>{keyData.area} m²</span>}
              </div>
            </div>
            <div className={styles.hsc__right}>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyHero;
