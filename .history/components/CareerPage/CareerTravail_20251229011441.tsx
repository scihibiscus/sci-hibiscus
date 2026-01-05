import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/CareerPage/careertravail.module.scss";

const CareerTravail = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.careertravail}>
      <div className={`container ${styles.career__container}`}>
        <div className={styles.cc__top}>
          <HiglightedSpan text={t("CareerPage:work")} />
          <h3 className={styles.cct__h3}>{t("CareerPage:worktwo")}</h3>
        </div>
        <div className={styles.cc__bottom}>
          
        </div>
      </div>
    </div>
  );
};

export default CareerTravail;
