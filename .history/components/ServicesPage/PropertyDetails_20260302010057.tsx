import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";

const PropertyDetails = () => {
  const { t } = useTranslation();

  return (
    <div className={`section ${styles.pa__section}`}>
      <div className={`container ${styles.pa__container}`}>
        <HiglightedSpan text={t("ServicesPage:overview")} />
        <div className={styles.overview}>
          {overviewData.map((data, i) => (
            <p className={styles.op} key={i}>
              {data}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails