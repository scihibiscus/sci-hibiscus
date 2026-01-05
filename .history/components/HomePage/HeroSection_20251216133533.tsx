import React from "react";
import Image from "next/image";
import HighlightText from "@/utils/HighlightText";
import HEROIMAGE from "../../public/images/heroimage.jpg";
import Button from "../ReUsables/Button";
import styles from "../../styles/HomePage/herosection.module.scss";


const HeroSection = () => {
  const mainText = "Pour vous. Pour votre avenir.";
  const highlights = ["vous.", "votre avenir."];

  return (
    <div className={styles.herosection}>
      <div className={styles.image__wrapper}>
        <div className={styles.hero__image}>
          <Image fill quality={100} src={HEROIMAGE} alt="SCI HIBISCUS" />
        </div>
        <div className={styles.hero__gradient}></div>
      </div>
      <div className={styles.hero__main}>
        <div className={`container ${styles.hero__container}`}>
          <div className={styles.hc__content}>
            <h1 className={styles.hc__h1}>CHAQUE AFRICAIN SOUS UN TOIT</h1>
            <HighlightText text={mainText} words={highlights} />
            <div className={styles.hc__button}>
              <Button text="Actuellement en vente" backColor="white" hoverColor="var(--gold)" textColor="var(--black)" thColor="white" iconColor="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
