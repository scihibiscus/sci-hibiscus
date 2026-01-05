import React from "react";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ProjectsPage/projectplans.module.scss";

const ProjectPlans = () => {
  const { t } = useTranslation();

  const plansData = [
    {
      appartment: "A1",
      room: "03",
      area: "100",
      floor: "0",
      price: 
    }
  ]
  return (
    <div className={styles.pp__section}>
      <div className={`container ${styles.pp__container}`}>
        <div className={styles.ppc__top}>
          <HiglightedSpan text={t("ProjectsPage:plans")}/>
          <h1 className={styles.pp__h1}>{t("ProjectsPage:plans2")}</h1>
        </div>
        <div className={styles.ppc__bottom}>

        </div>
      </div>
    </div>
  );
};

export default ProjectPlans;
