import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/BlogPage/servicessection.module.scss";

const ServicesSection = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const servicesContent = [
    {
      name: t("ServicesPage:servone"),
      text: t("ServicesPage:sotext"),
      modals: [
        {
          name: t("ServicesPage:soone"),
          text: t("ServicesPage:sotwo"),
          points: [
            t("ServicesPage:sothree"),
            t("ServicesPage:sofour"),
            t("ServicesPage:sofive"),
            t("ServicesPage:sosix"),
          ]
        },
        {
          name: t("ServicesPage:soseven"),
          text: t("ServicesPage:soeight"),
          points: [
            t("ServicesPage:sonine"),
            t("ServicesPage:soten"),
            t("ServicesPage:soeleven"),
          ]
        }
      ]
    },
    {
      name: t("ServicesPage:servtwo"),
      text: t("ServicesPage:sttext"),
      modals: [
        {
          name: t("ServicesPage:stone"),
          text: t("ServicesPage:sttwo"),
          points: [
            t("ServicesPage:stthree"),
            t("ServicesPage:stfour"),
            t("ServicesPage:stfive"),
            t("ServicesPage:stsix"),
            t("ServicesPage:stseven"),
          ]
        },
        {
          name: t("ServicesPage:steight"),
          text: t("ServicesPage:stnine"),
          points: [
            t("ServicesPage:stten"),
            t("ServicesPage:steleven"),
            t("ServicesPage:sttwelve"),
            t("ServicesPage:sttwelve"),
            t("ServicesPage:sttwelve"),
          ]
        }
      ]
    },
  ];

  return (
    <div className={styles.services__section}>
      <div className={`container ${styles.services__container}`}>
        <div className={styles.services__modal}>
          <div className={styles.sm__left}></div>
          <div className={styles.sm__right}></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
