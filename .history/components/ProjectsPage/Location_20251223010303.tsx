import React from "react";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ProjectsPage/location.module.scss";

const Location = () => {
  const { t } = useTranslation();
  return (
    <div className={`section ${styles.loc__section}`}>
      <div className={`container ${styles.loc__container}`}>
        <div className={styles.loc__top}>
          <div className={styles.lt__top}></div>
          <div className={styles.lt__bottom}></div>
        </div>
        <div className={styles.loc__bottom}></div>
      </div>
    </div>
  );
};

export default Location;
