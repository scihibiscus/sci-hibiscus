import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import WhatsappButton from "./WhatsappButton";
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
    },
  ];

  //Contact Details
  const property = "Bureau du Park";
  const message = t("ServicesPage:message", { property });
  const buttontext = t("ServicesPage:reserve");

  return (
    <div className={`section ${styles.pa__section}`}>
      <div className={`container ${styles.pa__container2}`}>
        <HiglightedSpan text={t("ServicesPage:propdetail")} />
        <div className={styles.details}>
          {detailsData.map((data, i) => (
            <div className={styles.details__wrap} key={i}>
              <p className={styles.dw__left}>
                <span className={styles.dw__inner}>{data.name}</span>
              </p>
              <p className={styles.dw__right}>{data.info}</p>
            </div>
          ))}
        </div>
        <div className={styles.whatsapp}>
          <WhatsappButton
            buttontext={buttontext}
            textmessage={message}
            backColor="white"
            textColor="var(--black)"
            border="1px solid rgba(0,0,0,0.15)"
            dropshadow="drop-shadow(0px 0px 5px rgba(0,0,0,0.15))"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
