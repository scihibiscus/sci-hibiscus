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
      info: "Bonapriso, Douala",
    },
    {
      name: "Surface utile (m²) ",
      info: "60",
    },
    {
      name: "Prix (FCFA / mois)",
      info: "350,000",
    },
    {
      name: "Parking",
      info: "Oui",
    },
    {
      name: "Climatisation",
      info: "Oui",
    },
    {
      name: "Disponibilité",
      info: "Immédiale",
    }
  ]

  return (
    <div className={`section ${styles.pa__section}`}>
      <div className={`container ${styles.pa__container}`}>
        <HiglightedSpan text={t("ServicesPage:propdetail")} />
        <div className={styles.details}>
          {detailsData.map((data, i) => (
            <div className={styles.details__wrap} key={i}>
              <div className={styles.dw__left}>
                <p className={styles.dw__inner}>{data.name}</p>
              </div>
              <p className={styles.dw__right}>{data.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails