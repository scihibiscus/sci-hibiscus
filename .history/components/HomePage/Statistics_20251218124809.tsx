import React from "react";
import { useTranslation } from "react-i18next";
import Capital from "@/utils/Icons/Capital";

import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/statistics.module.scss";

const Statistics = () => {
  const { t } = useTranslation();

  const statsData = [
    
  ]
  return (
    <div className={`section ${styles.stat__section}`}>
      <div className={`container ${styles.ss__container}`}>
        <div className={styles.ss__top}>
          <HiglightedSpan text={t("HomePage:stats")} />
          <h1 className={styles.ss__h1}>{t("HomePage:statsHeader")}</h1>
        </div>
        <div className={styles.ss__bottom}>

        </div>
      </div>
    </div>
  );
};

export default Statistics;
