"use client";

import React, { useState, useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/heroimage.jpg";
import Image, { StaticImageData } from "next/image";
import styles from "../../styles/ReUsables/interestsection.module.scss";
import { div } from "framer-motion/client";

const InterestSection = () => {
  const { t } = useTranslation();

  const interestContent = [
    {
      name: t("BuylandPage:interest"),
      points: [
        t("BuylandPage:intone"),
        t("BuylandPage:inttwo"),
        t("BuylandPage:intthree"),
        t("BuylandPage:intfour"),
        t("BuylandPage:intfive"),
        t("BuylandPage:intsix"),
      ],
      image: IMAGE,
    },
    {
      name: t("BuylandPage:confidence"),
      points: [
        t("BuylandPage:conone"),
        t("BuylandPage:contwo"),
        t("BuylandPage:conthree"),
        t("BuylandPage:confour"),
        t("BuylandPage:confive"),
      ],
      image: IMAGE,
    },
  ];

  return (
    <div className={styles.interest__section}>
      <div className={`container ${styles.interest__container}`}>
        {interestContent.map((content, i) => (
          <div className={styles.int__box} key={i}>
            <div className={styles.image__wrapper}>
              <ImageWrapper name={content.name} src={content.image} />
            </div>
            <div className={styles.int__content}>
              <h3 className={styles.ic__h3}>{content.name}</h3>
              <ol className={styles.list}>
                {content.points.map((data, i) => (
                  <li key={i} className={styles.list__item}>
                    {data}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestSection;

const ImageWrapper = ({
  name,
  src,
}: {
  name: string;
  src: StaticImageData;
}) => {
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
    div
    <div className={styles.image}>
      <Image fill quality={100} alt={name} placeholder="blur" src={src} />
    </div>
  );
};
