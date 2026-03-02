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
  return (
    <div className={`section ${styles.pa__section}`}>
      <div className={`container ${styles.pa__container2}`}>
        <HiglightedSpan text={t("ServicesPage:other")} />
        <div className={styles.details2}>
          {detailsData.map((data, i) => (
            <li className={styles.dw__right2} key={i}>
              <p>

              {data}
              </p>
            </li>
          ))}
        </div>
        <div className={styles.whatsapp}>
          <WhatsappButton
            property="Bureau du Park"
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
