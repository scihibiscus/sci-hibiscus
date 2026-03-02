import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/RentBuyPage/propabout.module.scss";

const PropertyAbout = () => {
  const { t } = useTranslation();

  const overviewData = [
    t("ServicesPage:text1"),
    t("ServicesPage:text2")
  ]

  return (
    <div className={`section ${styles.pa__section}`}>
      <div className={`container ${styles.pa__container}`}>
        <HiglightedSpan text={t("ServicesPage:overview")} />
        <div className={styles.overview}>
          {
            overviewData.map(() => (
              
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default PropertyAbout;
