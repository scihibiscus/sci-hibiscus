"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import Button from "./Button";
import { StaticImageData } from "next/image";
import styles from "../../styles/ReUsables/projectbox.module.scss";

const ProjectBox = ({
  image,
  smallText,
  largeText,
  subText,
  linkName,
  linkHref,
}: {
  image: StaticImageData;
  smallText: string;
  largeText: string;
  subText?: string;
  linkName: string;
  linkHref: string;
}) => {
  //Parallax
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  //Handle Resizing Y value
  const [transform, setTransform] = useState(-150);

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
    <div className={styles.project__box} ref={container}>
      <div className={styles.pb__image}>
        <div className={styles.pbi__wrap}>
          <motion.div className={styles.pb__img} style={{ y }}>
            <Image
              fill
              placeholder="blur"
              alt="Sci Hibiscus"
              src={image}
              quality={100}
            />
          </motion.div>
        </div>
        <div className={styles.pb__gradient}></div>
      </div>
      <div className={styles.pb__content}>
        <div className={styles.pbc__left}>
          <span className={styles.pl__span}>{smallText}</span>
          <h3 className={styles.pl__h3}>{largeText}</h3>
          {subText && <p className={styles.pl__p}>{subText}</p>}
        </div>
        <div className={styles.pbc__right}>
          <Button
            text={linkName}
            backColor="white"
            hoverColor="var(--gold)"
            textColor="var(--black)"
            thColor="white"
            iconColor="var(--black)"
            ihColor="white"
            link={linkHref}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
