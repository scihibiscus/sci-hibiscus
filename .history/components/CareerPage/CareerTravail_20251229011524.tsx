import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/CareerPage/careertravail.module.scss";

const CareerTravail = () => {
  const { t } = useTranslation();

  const statsData = [
    {
      icon: Experience,
      name: t("HomePage:stat1"),
      text: t("HomePage:stat1text"),
      number: "01",
    },
    {
      icon: Projects,
      name: t("HomePage:stat4"),
      text: t("HomePage:stat4text"),
      number: "02",
    },
    {
      icon: Employee,
      name: t("AboutPage:20plus"),
      text: t("AboutPage:plustext"),
      number: "03",
    },
  ];

  return (
    <div className={styles.careertravail}>
      <div className={`container ${styles.career__container}`}>
        <div className={styles.cc__top}>
          <HiglightedSpan text={t("CareerPage:work")} />
          <h3 className={styles.cct__h3}>{t("CareerPage:worktwo")}</h3>
        </div>
        <div className={styles.cc__bottom}>

        </div>
      </div>
    </div>
  );
};

export default CareerTravail;
