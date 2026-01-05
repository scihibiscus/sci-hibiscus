import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ProjectsPage/procontact.module.scss";

const PropertyContact = () => {
  const { t } = useTranslation();
  return (
    <div className={`section ${styles.pc__section}`}>
      <div className={`container ${styles.pc__container}`}>
        <div className={styles.pc__top}>
          <h3>{t("ProjectsPage:hear")}</h3>
        </div>
        <div className={styles.pc__bottom}></div>
      </div>
    </div>
  );
};

export default PropertyContact;
