import React from "react";
import { useTranslation } from "react-i18next";
import ServicesModal from "./ServicesModal";
import styles from "../../styles/BlogPage/servicessection.module.scss";

const ServicesSection = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const servicesContent = [
    {
      name: t("ServicesPage:servone"),
      text: t("ServicesPage:sotext"),
      highlight: ""
      modals: [
        {
          name: t("ServicesPage:soone"),
          text: t("ServicesPage:sotwo"),
          points: [
            t("ServicesPage:sothree"),
            t("ServicesPage:sofour"),
            t("ServicesPage:sofive"),
            t("ServicesPage:sosix"),
          ],
        },
        {
          name: t("ServicesPage:soseven"),
          text: t("ServicesPage:soeight"),
          points: [
            t("ServicesPage:sonine"),
            t("ServicesPage:soten"),
            t("ServicesPage:soeleven"),
          ],
        },
      ],
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
          ],
        },
        {
          name: t("ServicesPage:steight"),
          text: t("ServicesPage:stnine"),
          points: [
            t("ServicesPage:stten"),
            t("ServicesPage:steleven"),
            t("ServicesPage:sttwelve"),
            t("ServicesPage:stthirteen"),
            t("ServicesPage:stfourteen"),
          ],
        },
        {
          name: t("ServicesPage:stfifteen"),
          text: t("ServicesPage:stsixteen"),
          points: [
            t("ServicesPage:stseventeen"),
            t("ServicesPage:steighteen"),
            t("ServicesPage:stnineteen"),
            t("ServicesPage:sttwenty"),
          ],
        },
      ],
    },
    {
      name: t("ServicesPage:servthree"),
      text: t("ServicesPage:sthtext"),
      modals: [
        {
          name: t("ServicesPage:sthone"),
          text: t("ServicesPage:sthtwo"),
          points: [
            t("ServicesPage:sththree"),
            t("ServicesPage:sthfour"),
            t("ServicesPage:sthfive"),
          ],
        },
        {
          name: t("ServicesPage:sthsix"),
          text: t("ServicesPage:sthseven"),
          points: [
            t("ServicesPage:stheight"),
            t("ServicesPage:sthnine"),
            t("ServicesPage:sthten"),
            t("ServicesPage:stheleven"),
          ],
        },
      ],
    },
    {
      name: t("ServicesPage:servfour"),
      text: t("ServicesPage:sftext"),
      modals: [
        {
          name: t("ServicesPage:sfone"),
          text: t("ServicesPage:sftwo"),
          points: [
            t("ServicesPage:sfthree"),
            t("ServicesPage:sffour"),
            t("ServicesPage:sffive"),
            t("ServicesPage:sfsix"),
            t("ServicesPage:sfseven"),
          ],
        },
        {
          name: t("ServicesPage:sfeight"),
          text: t("ServicesPage:sfnine"),
          points: [
            t("ServicesPage:sften"),
            t("ServicesPage:sfeleven"),
            t("ServicesPage:sftwelve"),
            t("ServicesPage:sfthirteen"),
            t("ServicesPage:sffourteen"),
          ],
        },
      ],
    },
  ];

  return (
    <div className={styles.services__section}>
      <div className={`container ${styles.services__container}`}>
        {servicesContent.map((data, i) => (
          <ServicesModal content={data} key={i}/>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
