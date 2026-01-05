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
      title: t("CareerPage:gdtitle"),
      pdf: "/docs/plan.pdf",
      task: [
        t("CareerPage:gd1"),
        t("CareerPage:gd2"),
        t("CareerPage:gd3"),
        t("CareerPage:gd4"),
        t("CareerPage:gd5"),
        t("CareerPage:gd6"),
        t("CareerPage:gd7"),
        t("CareerPage:gd8"),
      ],
      foundation: [
        t("CareerPage:gf1"),
        t("CareerPage:gf2"),
        t("CareerPage:gf3"),
        t("CareerPage:gf4"),
        t("CareerPage:gf5"),
        t("CareerPage:gf6"),
        t("CareerPage:gf7"),
        t("CareerPage:gf8"),
      ],
      offer: [
        t("CareerPage:go1"),
        t("CareerPage:go2"),
        t("CareerPage:go3"),
        t("CareerPage:go4"),
        t("CareerPage:go5"),
        t("CareerPage:go6"),
      ],
    },
    {
      title: t("CareerPage:gdtitle"),
      pdf: "/docs/plan.pdf",
      task: [
        t("CareerPage:hr1"),
        t("CareerPage:hr2"),
        t("CareerPage:hr3"),
        t("CareerPage:hr4"),
        t("CareerPage:hr5"),
        t("CareerPage:hr6"),
        t("CareerPage:hr7"),
        t("CareerPage:hr8"),
      ],
      foundation: [
        t("CareerPage:hrf1"),
        t("CareerPage:hrf2"),
        t("CareerPage:hrf3"),
        t("CareerPage:hrf4"),
        t("CareerPage:hrf5"),
        t("CareerPage:hrf6"),
        t("CareerPage:hrf7"),
        t("CareerPage:hrf8"),
      ],
      offer: [
        t("CareerPage:go1"),
        t("CareerPage:go2"),
        t("CareerPage:go3"),
        t("CareerPage:go4"),
        t("CareerPage:go5"),
        t("CareerPage:go6"),
      ],
    }
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
