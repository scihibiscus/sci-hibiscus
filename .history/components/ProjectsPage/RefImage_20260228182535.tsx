"use client";

import React, { useState, useEffect, useRef } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import type { ReadonlyURLSearchParams, AppRouterInstance } from "next/navigation";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import Plus from "@/utils/Icons/Plus";
import styles from "../../styles/ProjectsPage/refsection.module.scss";

const RefImage = ({
  alt,
  src,
  ref,
  router,
  searchParams
}: {
  alt: string;
  src: StaticImageData;
  ref: string;
  searchParams: ReadonlyURLSearchParams;
  router: AppRouterInstance
}) => {

  const handleClick = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("ref", slug); // set or update the param
    router.push(`?${params.toString()}`, { scroll: false }); // navigate with new query string
  };

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
    <div
      className={styles.rb__right}
      ref={container}
      onClick={() => handleClick(ref)}
    >
      <motion.div className={styles.rbr__image} style={{ y }}>
        <Image fill quality={100} alt={alt} src={src} placeholder="blur" />
      </motion.div>
      <div className={styles.details}>
        <Plus />
      </div>
    </div>
  );
};

export default RefImage;
