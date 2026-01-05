import React from "react";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ProjectsPage/prodetailone.module.scss";

const PropertyDetailsOne = () => {
  const { t } = useTranslation();

  return (
    <div className={`section ${styles.pdo__section}`}>
      <div className={`container ${styles.pdo__container}`}>
        <div className={styles.pd__top}>
          <div className={styles.pt__left}>
            <HiglightedSpan text={t("ProjectsPage:status")}/>
          </div>
          <div className={styles.pt__right}>

          </div>
        </div>
        <div className={styles.pd__bottom}></div>
      </div>
    </div>
  );
};

export default PropertyDetailsOne;
