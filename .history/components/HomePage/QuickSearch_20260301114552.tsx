import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/quicksearch.module.scss";

const QuickSearch = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  return (
    <div className={`section ${styles.qs__section}`}>
      <div className={`container ${styles.qs__container}`}>
        <div className={styles.qs__top}>
          <HiglightedSpan text={t("")} />
          <h1 className={styles.cc__h1}>{t("HomePage:concept")}</h1>
        </div>
        <div className={styles.qs__bottom}>

        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
