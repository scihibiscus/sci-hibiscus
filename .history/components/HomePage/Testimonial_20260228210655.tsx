import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/testimonial.module.scss";

const Testimonial = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className={`section ${styles.testi__section}`}>
      <div className={`container ${styles.testi__container}`}>
        <div className={styles.testi__top}>
          <HiglightedSpan text={t("HomePage:testimonial")} />
          <h1 className={styles.testi__h1}>{t("HomePage:testitext")}</h1>
        </div>
        <div className={styles.testi__bottom}>
          <div className={styles.testi__card}>
            <div className={styles.tc__top}>

            </div>
            <p className={styles.tc__p}></p>
            <div className={styles.tc__}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
