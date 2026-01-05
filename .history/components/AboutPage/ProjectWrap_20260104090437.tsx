"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/ReUsables/swiperimages.module.scss";
import { StaticImageData } from "next/image";

const ProjectWrap = ({
  data,
}: {
  data: { name: string; image: StaticImageData; href?: string };
}) => {
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
        setTransform(-30);
      } else if (typeof window !== "undefined" && window.innerWidth < 750) {
        setTransform(-50);
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
  return data.href ? (
    <Link href={data.href} className={styles.content__box}>
      <div className={styles.cb__image} ref={container}>
        <motion.div className={styles.cbi__img} style={{ y }}>
          <Image fill quality={100} src={data.image} alt={data.name} />
        </motion.div>
      </div>
      <p className={styles.cb__p}>{data.name}</p>
    </Link>
  ) : (
    <div className={styles.content__box2}>
      <div className={styles.cb__image} ref={container}>
        <motion.div className={styles.cbi__img} style={{ y }}>
          <Image fill quality={100} src={data.image} alt={data.name} />
        </motion.div>
      </div>
      <p className={styles.cb__p}>{data.name}</p>
    </div>
  );
};

export default ProjectWrap;
