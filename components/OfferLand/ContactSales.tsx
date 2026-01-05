"use client";

import React, { useState, useEffect, useRef, RefObject} from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import IMAGE from "../../public/images/image10.jpg";
import styles from "../../styles/ReUsables/interestsection.module.scss";

const ContactSales = ({ ref }: { ref: RefObject<HTMLDivElement | null> }) => {
  const { t } = useTranslation();

  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  //Handle Resizing Y value
  const [transform, setTransform] = useState(-90);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 540) {
        setTransform(-30);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-60);
      } else {
        setTransform(-90);
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
    <div className={styles.cs__section} ref={ref}>
      <div className={`container ${styles.cs__container}`}>
        <div className={styles.cs__wrapper}>
          <div className={styles.cs__left} ref={container}>
            <motion.div className={styles.cs__image} style={{ y }}>
              <Image
                fill
                quality={100}
                src={IMAGE}
                alt="Sci Hibiscus"
                placeholder="blur"
              />
            </motion.div>
          </div>
          <div className={styles.cs__right}>
            <div className={styles.csr__one}>
              <div className={styles.cso__top}>
                <h3 className={styles.cst__h3}>John Doe Kelly</h3>
                <span className={styles.position}>
                  {t("BuylandPage:position")}
                </span>
              </div>
              <div className={styles.cso__bottom}>
                <span>Phone : +237 2 22 22 24 37</span>
                <span>Email : johnkelly@sci-hibiscus.com</span>
              </div>
            </div>
            <p className={styles.csr__two}>{t("BuylandPage:discuss")}</p>
            <div className={styles.csr__three}>{t("BuylandPage:intsix")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSales;
