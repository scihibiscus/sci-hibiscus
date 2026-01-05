import React from "react";
import { useTranslation } from "react-i18next";
import SwiperImages from "../ReUsables/SwiperImages";
import styles from "../../styles/ProjectsPage/prodetailtwo.module.scss";

const PropertyDetailsTwo = () => {
  const { t } = useTranslation();

  const detailsContent = [
    {
      name: t("ProjectsPage:rooms"),
      content: "3 - 5",
    },
    {
      name: t("ProjectsPage:area"),
      content: "100 - 210",
    },
    {
      name: t("ProjectsPage:price"),
      content: "150,000,000",
    },
    {
      name: t("ProjectsPage:ready"),
      content: t("ProjectsPage:now"),
    },
    {
      name: t("ProjectsPage:address"),
      content: "Douala, Bonapriso",
    },
  ];
  return (
    <div className={styles.pdt__section}>
      <div className={`container ${styles.pdt__container}`}>
        {detailsContent.map((data, i) => (
          <div className={styles.pdc__content} key={i}>
            <span className={styles.pdc__span}>{data.name}</span>
            <span className={styles.pdc__span2}>{data.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetailsTwo;
