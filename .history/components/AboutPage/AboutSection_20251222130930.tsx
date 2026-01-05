import React from "react";
import { useTranslation } from "react-i18next";
import StatBox from "../ReUsables/StatBox";
import Experience from "@/utils/Icons/Experience";
import Projects from "@/utils/Icons/Projects";
import Employee from "@/utils/Icons/Employee";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/AboutPage/aboutsection.module.scss";

const AboutSection = () => {
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
      number: "04",
    },
    {
      icon: Emp,
      name: t("HomePage:stat5"),
      text: t("HomePage:stat5text"),
      number: "05",
    },
  ];

  return (
    <div className={`section ${styles.about__section}`}>
      <div className={`container ${styles.about__container}`}>
        <div className={styles.as__top}>
          <div className={styles.ast__top}>
            <HiglightedSpan text={t("AboutPage:partner")} />
            <h3 className={styles.asb__h3}>{t("AboutPage:abouthead")}</h3>
          </div>
          <div className={styles.ast__bottom}>
            <p className={styles.asb__p}>{t("AboutPage:ahone")}</p>
            <p className={styles.asb__p}>{t("AboutPage:ahtwo")}</p>
            <p className={styles.asb__p}>{t("AboutPage:ahthree")}</p>
          </div>
        </div>
        <div className={styles.as__bottom}></div>
      </div>
    </div>
  );
};

export default AboutSection;
