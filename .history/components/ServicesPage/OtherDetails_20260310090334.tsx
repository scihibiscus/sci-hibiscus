import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import WhatsappButton from "./WhatsappButton";
import styles from "../../styles/RentBuyPage/propabout.module.scss";

const OtherDetails = () => {
  const { t } = useTranslation();

  const detailsData = [
    "Alimentation solaire assurant éclairage et équipements essentiels en coupure.",
    "Espace réunion prêt pour visioconférences et présentations professionnelles.",
    "Pièce dédiée pour matériel informatique et sauvegardes sécurisées.",
    "Coin pause avec évier, rangement et espace pour café.",
    "Accès par badge et vidéosurveillance pour protection des locaux.",
    "Préparation fibre et prises réseau pour télétravail fiable.",
  ];

      //Contact Details
      const property = "Bureau du Park"
      const message = t("ServicesPage:message", { property });
      const buttontext = t("ServicesPage:reserve")
  return (
    <div className={`section ${styles.pa__section}`}>
      <div className={`container ${styles.pa__container2}`}>
        <HiglightedSpan text={t("ServicesPage:other")} />
        <div className={styles.details2}>
          {detailsData.map((data, i) => (
            <li className={styles.dw__right2} key={i}>
              {data}
            </li>
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

export default OtherDetails;
