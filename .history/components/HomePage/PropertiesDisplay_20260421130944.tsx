import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/HomePage/propertiesdisplay.module.scss";


const PropertiesDisplay = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className={`section ${styles.pd__section}`}>
      <div className={`container ${styles.pd__container}`}>
        <div className={styles.pd__top}>
          <HiglightedSpan text={t("HomePage:testimonial")} />
          <h1 className={styles.testi__h1}>{t("HomePage:testitext")}</h1>
        </div>
      </div>
    </div>
  );
};

export default PropertiesDisplay;
