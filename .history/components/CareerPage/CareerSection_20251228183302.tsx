import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/CareerPage/careertwo.module.scss";

const CareerSection = () => {
  const { t } = useTranslation();

  const careerContent = [
    {
      title: t("CareerPage:cstitle"),
      pdf: "/docs/plan.pdf",
      task: [
        t("CareerPage:cs1"),
        t("CareerPage:cs1"),
        t("CareerPage:cs1"),
        t("CareerPage:cs1"),
        t("CareerPage:cs1"),
        t("CareerPage:cs1"),
        t("CareerPage:cs1"),
        t("CareerPage:cs1"),
      ]
    }
  ]
  return (
    <div className={styles.cs__section}>
      <div className={`container ${styles.cs__container}`}>
        <div className={styles.cs__top}>
          <HiglightedSpan text={t("CareerPage:offers")}/>
          <h3 className={styles.cs__h3}>{t("CareerPage:oftwo")}</h3>
        </div>
        <div className={styles.cs__bottom}></div>
      </div>
    </div>
  );
};

export default CareerSection;
