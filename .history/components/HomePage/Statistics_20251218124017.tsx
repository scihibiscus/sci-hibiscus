import React from "react";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/statistics.module.scss";

const Statistics = () => {
  return (
    <div className={`section ${styles.stat__section}`}>
      <div className={`container ${styles.ss__container}`}>
        <div className={styles.pc__top}>
          <HiglightedSpan text={t("HomePage:project")} />
          <h1 className={styles.pc__h1}>{t("HomePage:projectport")}</h1>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
