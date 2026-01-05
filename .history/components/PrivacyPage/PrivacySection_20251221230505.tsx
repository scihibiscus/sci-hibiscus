import React from "react";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/privacysection.module.scss";

const PrivacySection = () => {
  //Translations
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.ps__section}>
      <div className={`container ${styles.ps__container}`}>
        <div className={styles.ps__left}>
          <h3 className={styles.ps__h3}>{t("PrivacyPage:table")}</h3>
          <div className={styles.psl__list}>
            <div className={styles.list}>
              <span>01.</span>
              <p>{t("PrivacyPage:tableone")}</p>
            </div>
          </div>
        </div>
        <div className={styles.ps__right}></div>
      </div>
    </div>
  );
};

export default PrivacySection;
