import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ProjectsPage/prodetailtwo.module.scss";

const PropertyDetailsTwo = () => {
  const { t } = useTranslation();

  const detailsContent = [
    {
      name: t("ProjectsPage:rooms"),
      content: "3-5",
    },
    {
      name: t("ProjectsPage:area"),
      content: "100-210",
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
    }
  ];
  return (
    <div className={styles.pdt__section}>
      <div className={`container ${styles.pdt__contianer}`}>
        {
          detailsContent.map(() => (
            <div className={styles.}>

            </div>
          ))
        }
      </div>
    </div>
  );
};

export default PropertyDetailsTwo;
