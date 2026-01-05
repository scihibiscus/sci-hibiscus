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
      content: "100-5",
    },
    {
      name: t("ProjectsPage:rooms"),
      content: "3-5",
    },
    {
      name: t("ProjectsPage:rooms"),
      content: "3-5",
    },
    {
      name: t("ProjectsPage:rooms"),
      content: "3-5",
    },
  ];
  return (
    <div className={styles.pdt__section}>
      <div className={`container ${styles.pdt__contianer}`}></div>
    </div>
  );
};

export default PropertyDetailsTwo;
