import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import Button from "../ReUsables/Button";
import styles from "../../styles/AboutPage/apsection.module.scss";

const AProjectSection = () => {
  const { t } = useTranslation();
  return (
    <div className={`section ${styles.ap__section}`}>
      <div className={`container ${styles.ap__container}`}>
        <div className={styles.apc__top}>
          <div className={styles.apt__left}>
            <HiglightedSpan text={t("AboutPage:projects")} />
            <h3>{}</h3>
          </div>
          <div className={styles.apt__right}></div>
        </div>
        <div className={styles.apc__bottom}></div>
      </div>
    </div>
  );
};

export default AProjectSection;
