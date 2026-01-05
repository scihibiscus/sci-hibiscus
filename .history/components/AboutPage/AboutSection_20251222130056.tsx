import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/AboutPage/aboutsection.module.scss";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className={`section ${styles.about__section}`}>
      <div className={`container ${styles.about__container}`}>
        <div className={styles.as__top}>
          <div className={styles.ast__top}>
            <HiglightedSpan text={t("AboutPage:partner")}/>
            <h3>{t("AboutPage:ahone")}</h3>
          </div>
          <div className={styles.ast__bottom}>
            <p className={styles.asb__p}>{t("AboutPage:ahone")}</p>
            <p className={styles.asb__p}></p>
            <p className={styles.asb__p}></p>
          </div>
        </div>
        <div className={styles.as__bottom}></div>
      </div>
    </div>
  );
};

export default AboutSection;
