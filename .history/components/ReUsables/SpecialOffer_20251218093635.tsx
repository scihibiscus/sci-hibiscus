import React from "react";
import HiglightedSpan from "./HiglightedSpan";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/specialoffer.module.scss";

const SpecialOffer = () => {
  const { t } = useTranslation();

  return (
    <div className={`section ${styles.special__section}`}>
      <div className={`container ${styles.special__container}`}>
        <div className={styles.cc__left}>
          <HiglightedSpan text="Concept" />
          <h3 className={styles.cc__h3}>{t("HomePage:concept")}</h3>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
