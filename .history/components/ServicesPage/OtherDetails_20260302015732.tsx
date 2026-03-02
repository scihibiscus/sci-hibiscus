import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import WhatsappButton from "./WhatsappButton";
import styles from "../../styles/RentBuyPage/propabout.module.scss";

const OtherDetails = () => {
  const { t } = useTranslation();

  const detailsData = [
    "Alimentation solaire de secours ",
    "Salle de réunion équipée",
    "Local serveur climatisé",
    "Cuisine / coin pause fonctionnel",
    "Contrôle d’accès et sécurité",
    "Connexion haut débit",
  ];
  return (
    <div className={`section ${styles.pa__section}`}>
      <div className={`container ${styles.pa__container2}`}>
        <HiglightedSpan text={t("ServicesPage:propdetail")} />
        <div className={styles.details2}>
          {detailsData.map((data, i) => (
            <li className={styles.dw__right2} key={i}>
              {data}
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
