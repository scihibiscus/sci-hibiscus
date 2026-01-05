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
        t("CareerPage:cs2"),
        t("CareerPage:cs3"),
        t("CareerPage:cs4"),
        t("CareerPage:cs5"),
        t("CareerPage:cs6"),
        t("CareerPage:cs7"),
        t("CareerPage:cs8"),
      ],
      foundation: [
        t("CareerPage:cf1"),
        t("CareerPage:cf2"),
        t("CareerPage:cf3"),
        t("CareerPage:cf4"),
        t("CareerPage:cf5"),
        t("CareerPage:cf6"),
        t("CareerPage:cf7"),
        t("CareerPage:cf8"),
      ],
      offer: [
        t("CareerPage:co1"),
        t("CareerPage:co2"),
        t("CareerPage:co3"),
        t("CareerPage:co4"),
        t("CareerPage:co5"),
        t("CareerPage:co6"),
        t("CareerPage:co7"),
        t("CareerPage:co8"),
      ],
    },
    {
      title: t("CareerPage:title"),
      pdf: "/docs/plan.pdf",
      task: [
        t("CareerPage:cs1"),
        t("CareerPage:cs2"),
        t("CareerPage:cs3"),
        t("CareerPage:cs4"),
        t("CareerPage:cs5"),
        t("CareerPage:cs6"),
        t("CareerPage:cs7"),
        t("CareerPage:cs8"),
      ],
      foundation: [
        t("CareerPage:cf1"),
        t("CareerPage:cf2"),
        t("CareerPage:cf3"),
        t("CareerPage:cf4"),
        t("CareerPage:cf5"),
        t("CareerPage:cf6"),
        t("CareerPage:cf7"),
        t("CareerPage:cf8"),
      ],
      offer: [
        t("CareerPage:co1"),
        t("CareerPage:co2"),
        t("CareerPage:co3"),
        t("CareerPage:co4"),
        t("CareerPage:co5"),
        t("CareerPage:co6"),
        t("CareerPage:co7"),
        t("CareerPage:co8"),
      ],
    },
  ];
  return (
    <div className={styles.cs__section}>
      <div className={`container ${styles.cs__container}`}>
        <div className={styles.cs__top}>
          <HiglightedSpan text={t("CareerPage:offers")} />
          <h3 className={styles.cs__h3}>{t("CareerPage:oftwo")}</h3>
        </div>
        <div className={styles.cs__bottom}></div>
      </div>
    </div>
  );
};

export default CareerSection;
