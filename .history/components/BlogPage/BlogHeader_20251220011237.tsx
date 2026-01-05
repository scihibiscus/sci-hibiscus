"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import IMAGE from "../../public/images/heroimage.jpg";
import styles from "../../styles/BlogPage/blogcontent.module.scss";

const BlogHeader = () => {
  //Translations
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
    <div className={styles.bh__section}>
      <div className={`container ${styles.bh__container}`}>
        <div className={styles.bh__header}>
          <HiglightedSpan text="20 November 2025" />
          <h1 className={styles.bh__h1}>{t("HomePage:blogtitle")}</h1>
        </div>
        <div className={styles.bhi__wrapper} ref={container}>
          <motion.div className={styles.bh__image} style={{ y }}>
            <Image
              fill
              quality={100}
              alt="Sci Hibiscus"
              src={IMAGE}
              placeholder="blur"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
