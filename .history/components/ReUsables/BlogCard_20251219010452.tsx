"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/ReUsables/blogcard.module.scss";

interface BlogInterface {
  image: StaticImageData;
  tag: string;
  date: string;
  title: string;
  cta: string;
  link: string;
}

const BlogCard = ({ data }: { data: BlogInterface }) => {
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
    <div className={styles.blogcard}>
      <div className={styles.bc__image}>
        <div className={styles.bci__wrap}>
          <div className={styles.bc__img}>
            <Image
              fill
              placeholder="blur"
              alt="Sci Hibiscus"
              src={data.image}
              quality={100}
            />
          </div>
        </div>
        <div className={styles.bc__gradient}></div>
        <div className={styles.bc__gradient2}></div>
      </div>
      <div className={styles.bc__content}>
        <div className={styles.bcc__top}>
          <span className={styles.bc__tag}>{data.tag}</span>
          <span className={styles.bc__date}>{data.date}</span>
        </div>
        <div className={styles.bcc__bottom}>
          <h3 className={styles.bcc__h3}>{data.title}</h3>
          <Link href={data.link} className={styles.bcc__link}>
            {data.cta}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
