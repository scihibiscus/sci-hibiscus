"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import HiglightedSpan from "./HiglightedSpan";
import Link from "next/link";
import Image from "next/image";
import IMAGE from "../../public/images/heroimage.jpg";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/specialoffer.module.scss";

const SpecialOffer = () => {
  const { t } = useTranslation();

  const offers = [
    {
      name: "Hibiscus Residence",
      link: "/",
    },
    {
      name: "Amos Residence",
      link: "/",
    },
    {
      name: "Pure Residence",
      link: "/",
    },
    {
      name: "Luxe Residence",
      link: "/",
    },
    {
      name: "Habi Residence",
      link: "/",
    },
  ];

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
    <div className={`section ${styles.special__section}`}>
      <div className={`container ${styles.special__container}`}>
        <div className={styles.sc__top}>
          <HiglightedSpan text="Promotion" />
          <h1 className={styles.sc__h1}>{t("HomePage:promo")}</h1>
        </div>
        <div className={styles.sc__bottom}>
          <div className={styles.sbimage__wrap} ref={container}>
            <motion.div className={styles.sb__left} style={{ y }}>
              <Image
                fill
                placeholder="blur"
                alt="Sci Hibiscus"
                src={IMAGE}
                quality={100}
              />
            </motion.div>
          </div>
          <div className={styles.sb__right}>
            <h3 className={styles.sbr__h3}>{t("HomePage:promomain")}</h3>
            <p className={styles.sbr__p}>{t("HomePage:promotext")}</p>
            <div className={styles.sbr__links}>
              {offers.map((data, i) => (
                <Link key={i} href={data.link} className={styles.sbr__link}>
                  {data.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
