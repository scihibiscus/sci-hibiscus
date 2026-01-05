import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/CareerPage/careertwo.module.scss";

const CareerThree = () => {
  const { t } = useTranslation();
  return (
    <div className={`section ${styles.cth__section}`}>
      <div className={`container ${styles.cth__container}`}>
        <h3 className={styles.cth__h3}>{t("CareerPage:atsci")}</h3>
        <div className={styles.th__left}>
          <p>{t("CareerPage:atsone")}</p>
          <p>{t("CareerPage:atstwo")}</p>
        </div>
      </div>
    </div>
  );
};

export default CareerThree;
