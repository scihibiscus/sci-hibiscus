import React from "react";
import Image from "next/image";
import HighlightText from "@/utils/HighlightText";
import HEROIMAGE from "../../public/images/heroimage.jpg";
import styles from "../../styles/HomePage/herosection.module.scss";

const HeroSection = () => {
  return (
    <div className={styles.herosection}>
      <div className={styles.image__wrapper}>
        <div className={styles.hero__image}>
          <Image fill quality={100} src={HEROIMAGE} alt="SCI HIBISCUS" />
        </div>
        <div className={styles.hero__gradient}></div>
      </div>
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hc__content}>
          <h1>CHAQUE AFRICAIN SOUS UN TOIT</h1>
          <
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
