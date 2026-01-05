import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/AboutPage/culture.module.scss";

const Culture = () => {
  const { t } = useTranslation();

  const cultureData = [
    {
      name: "Innovation",
      text: t("AboutPage:one"),
    },
  ];

  return (
    <div className={`section ${styles.culture__section}`}>
      <div className={`container ${styles.c__container}`}>
        <div className={styles.cc__top}>
          <HiglightedSpan text={t("AboutPage:culture")} />
          <h1>{t("AboutPage:cultureinfo")}</h1>
        </div>
        <div className={styles.cc__bottom}></div>
      </div>
    </div>
  );
};

export default Culture;
