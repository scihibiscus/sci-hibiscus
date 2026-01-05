"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import styles from "../../styles/ProjectsPage/refsection.module.scss";

const RefImage = ({alt, image}) => {
    //Parallax
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
  
      offset: ["start end", "end start"],
    });
  
    //Handle Resizing Y value
    const [transform, setTransform] = useState(-120);
  
    useEffect(() => {
      const handleResize = () => {
        if (typeof window !== "undefined" && window.innerWidth < 540) {
          setTransform(-60);
        } else if (typeof window !== "undefined" && window.innerWidth < 750) {
          setTransform(-80);
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
    <div className={styles.rb__right} ref={container}>
      <motion.div className={styles.rbr__image} style={{ y }}>
        <Image
          fill
          quality={100}
          alt={data.name}
          src={data.image}
          placeholder="blur"
        />
      </motion.div>
    </div>
  );
};

export default RefImage;
