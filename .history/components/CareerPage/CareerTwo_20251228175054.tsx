import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/CareerPage/careertwo.module.scss";

const CareerTwo = () => {
  const { t } = useTranslation();
  return (
    <div className={`section ${styles.career__section}`}>
      <div className={`container ${styles.career__container}`}>
        <h3>{}</h3>
      </div>
    </div>
  );
};

export default CareerTwo;
