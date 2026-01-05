import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/statistics.module.scss";

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <div className={`section ${styles.stat__section}`}>
      <div className={`container ${styles.ss__container}`}>
        <div className={styles.ss__top}>
          <HiglightedSpan text={t("HomePage:stats")} />
          <h1 className={styles.pc__h1}>{t("HomePage:statsHeader")}</h1>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
