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
          <HiglightedSpan text={t("HomePage:blog")} />
          <h1 className={styles.testi__h1}>{t("HomePage:blogtext")}</h1>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
