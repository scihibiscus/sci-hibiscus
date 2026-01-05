import React from "react";
import { useTranslation } from "react-i18next";
import Capital from "@/utils/Icons/Capital";
import Experience from "@/utils/Icons/Experience";
import Projects from "@/utils/Icons/Projects";
import Success from "@/utils/Icons/Success";
import Location from "@/utils/Icons/Location";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import StatBox from "../ReUsables/StatBox";
import styles from "../../styles/HomePage/statistics.module.scss";

const Statistics = () => {
  const { t } = useTranslation();

  const statsData = [
    {
      icon: Experience,
      name: t("HomePage:stat1"),
      text: t("HomePage:stat1text"),
      number: "01"
    },
    {
      icon: Success,
      name: t("HomePage:stat2"),
      text: t("HomePage:stat2text"),
      number: "02"
    },
    {
      icon: Capital,
      name: t("HomePage:stat3"),
      text: t("HomePage:stat3text"),
      number: "03"
    },
    {
      icon: Projects,
      name: t("HomePage:stat4"),
      text: t("HomePage:stat4text"),
      number: "01"
    },
    {
      icon: Location,
      name: t("HomePage:stat5"),
      text: t("HomePage:stat5text"),
      number: "01"
    }
  ]
  return (
    <div className={`section ${styles.stat__section}`}>
      <div className={`container ${styles.ss__container}`}>
        <div className={styles.ss__top}>
          <HiglightedSpan text={t("HomePage:stats")} />
          <h1 className={styles.ss__h1}>{t("HomePage:statsHeader")}</h1>
        </div>
        <div className={styles.ss__bottom}>
          <StatBox />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
