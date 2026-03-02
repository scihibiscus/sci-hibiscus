import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/RentBuyPage/propabout.module.scss";

const PropertyDetails = () => {
  const { t } = useTranslation();

  const detailsData = [
    {
      name: "Type",
      info: "Bureau",
    },
    {
      name: "Localisation",
      info: "Bureau",
    },
    {
      name: "Surface utile (m²) ",
      info: "Bureau",
    },
    {
      name: "Type",
      info: "Bureau",
    },
    {
      name: "Type",
      info: "Bureau",
    },
    {
      name: "Type",
      info: "Bureau",
    },
    {
      name: "Type",
      info: "Bureau",
    },
    {
      name: "Type",
      info: "Bureau",
    },
    {
      name: "Type",
      info: "Bureau",
    }
  ]

  return (
    <div className={`section ${styles.pa__section}`}>
      <div className={`container ${styles.pa__container}`}>
        <HiglightedSpan text={t("ServicesPage:propdetail")} />
        <div className={styles.details}>
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