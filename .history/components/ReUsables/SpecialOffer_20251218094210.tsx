import React from "react";
import HiglightedSpan from "./HiglightedSpan";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/specialoffer.module.scss";

const SpecialOffer = () => {
  const { t } = useTranslation();

  return (
    <div className={`section ${styles.special__section}`}>
      <div className={`container ${styles.special__container}`}>
        <div className={styles.sc__top}>
          <HiglightedSpan text="Promotion" />
          <h3 className={styles.sc__h3}>{t("HomePage:promo")}</h3>
        </div>
        <div className={styles.sc__bottom}>
          <div className={styles.sb__left}>

          </div>
          <div className={styles.sb__left}>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
