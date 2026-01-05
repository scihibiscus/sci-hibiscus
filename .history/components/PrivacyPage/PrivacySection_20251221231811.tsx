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
              <span className={styles.lspan}>01.</span>
              <p className={styles.lspan}>{t("PrivacyPage:tableone")}</p>
            </div>
            <div className={styles.list}>
              <span>02.</span>
              <p>{t("PrivacyPage:tabletwo")}</p>
            </div>
            <div className={styles.list}>
              <span>03.</span>
              <p>{t("PrivacyPage:tablethree")}</p>
            </div>
            <div className={styles.list}>
              <span>04.</span>
              <p>{t("PrivacyPage:tablefour")}</p>
            </div>
            <div className={styles.list}>
              <span>05.</span>
              <p>{t("PrivacyPage:tablefive")}</p>
            </div>
            <div className={styles.list}>
              <span>06.</span>
              <p>{t("PrivacyPage:tablesix")}</p>
            </div>
          </div>
        </div>
        <div className={styles.ps__right}></div>
      </div>
    </div>
  );
};

export default PrivacySection;
