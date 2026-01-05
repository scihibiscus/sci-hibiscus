import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import VideoJS from "../ReUsables/VideoJS";
import HighlightText from "@/utils/HighlightText";
import HEROIMAGE from "../../public/images/heroimage.jpg";
import Button from "../ReUsables/Button";
import styles from "../../styles/HomePage/herosection.module.scss";

const HeroSection = () => {
  //Translations
  const { t } = useTranslation();

  const mainText = t("HomePage:herotext");
  const highlights = ["vous.", "votre avenir.", "you.", "your future."];

  return (
    <div className={styles.herosection}>
      <div className={styles.image__wrapper}>
        <div className={styles.hero__video}>
          <div className={styles.hero__image}>
            <Image
              fill
              quality={100}
              src={HEROIMAGE}
              alt="Sci Hibiscus"
              placeholder="blur"
            />
          </div>
        </div>
        <div className={styles.hero__gradient}></div>
      </div>
      <div className={styles.hero__main}>
        <div className={`container ${styles.hero__container}`}>
          <div className={styles.hc__content}>
            <h1 className={styles.hc__h1}>{t("HomePage:slogan")}</h1>
            <HighlightText text={mainText} words={highlights} />
            <div className={styles.hc__button}>
              <Button
                text={t("HomePage:herocta")}
                backColor="white"
                hoverColor="var(--gold)"
                textColor="var(--black)"
                thColor="white"
                iconColor="var(--black)"
                ihColor="white"
                link="/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
