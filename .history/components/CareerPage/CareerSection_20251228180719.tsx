import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/CareerPage/careertwo.module.scss";

const CareerSection = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.cs__section}>
      <div className={`container ${styles.cs__container}`}>
        <div className={styles.cs__top}>
          <HiglightedSpan text={t("")}/>
        </div>
        <div className={styles.cs__bottom}></div>
      </div>
    </div>
  );
};

export default CareerSection;
