"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import IMAGE from "../../public/images/image10.jpg";
import Link from "next/link";
import styles from "../../styles/CareerPage/careertwo.module.scss";

const CareerThree = () => {
  const { t } = useTranslation();

  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  //Handle Resizing Y value
  const [transform, setTransform] = useState(-100);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 540) {
        setTransform(-50);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-70);
      } else {
        setTransform(-100);
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
    <div className={`section ${styles.cth__section}`}>
      <div className={`container ${styles.cth__container}`}>
        <div className={styles.ctc__top}>
          <h3 className={styles.cth__h3}>{t("CareerPage:deposit")}</h3>
          <div className={styles.cth__left}>
            <p>{t("CareerPage:depone")}</p>
            <p>{t("CareerPage:deptwo")}</p>
            <ol className={styles.ol}>
              <li>CV</li>
              <li>{t("CareerPage:depthree")}</li>
              <li>{t("CareerPage:depfour")}</li>
            </ol>
          </div>
        </div>

        <div className={styles.ctc__bottom}>
          <div className={styles.cti__left} ref={container}>
            <motion.div className={styles.cti__image} style={{ y }}>
              <Image
                fill
                quality={100}
                alt="Sci Hibiscus"
                src={IMAGE}
                placeholder="blur"
              />
            </motion.div>
          </div>
          <div className={styles.cti__right}>
            <div className={styles.ctr__top}>
              <h3>{t("CareerPage:contact")}</h3>
              <div className={styles.ctt}>
                <h3>John Doe Kelly</h3>
                <span>{t("CareerPage:position")}</span>
                <Link href="tel:+237222222437" className={styles.p__one}>
                  Phone : +237 2 22 22 24 37
                </Link>
                <Link href="mailto:johnkelly@sci-hibiscus.com">
                  Email : johnkelly@sci-hibiscus.com
                </Link>
              </div>
            </div>
            <div className={styles.ctr__bottom}>
              Sci Hibiscus <br /> Hibiscus Center Park, Quartier Fouda
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerThree;
