import React from "react";
import styles from "../../styles/HomePage/quicksearch.module.scss";

const QuickSearch = () => {
  return (
    <div className={`section ${styles.qs__section}`}>
      <div className={`container ${styles.qs__container}`}>
        <div className={styles.cc__left}>
          <HiglightedSpan text="Concept" />
          <h1 className={styles.cc__h1}>{t("HomePage:concept")}</h1>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
