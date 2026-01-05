import React from "react";
import { useTranslation } from "react-i18next";
import StatBox from "../ReUsables/StatBox";
import Love from "@/utils/Icons/Love";
import Adaptable from "@/utils/Icons/Adaptable";
import Together from "@/utils/Icons/Together";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/CareerPage/careertravail.module.scss";

const CareerTravail = () => {
  const { t } = useTranslation();

  const statsData = [
    {
      icon: Love,
      name: t("HomePage:stat1"),
      text: t("HomePage:stat1text"),
      number: "01",
    },
    {
      icon: Adaptable,
      name: t("HomePage:stat4"),
      text: t("HomePage:stat4text"),
      number: "02",
    },
    {
      icon: Together,
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
          {statsData.map((data, i) => (
            <StatBox data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerTravail;
