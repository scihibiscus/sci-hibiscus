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
      number: "01",
    },
    {
      name: t("AboutPage:two"),
      text: t("AboutPage:three"),
      number: "02",
    },
    {
      name: t("AboutPage:four"),
      text: t("AboutPage:five"),
      number: "03",
    },
    {
      name: t("AboutPage:six"),
      text: t("AboutPage:seven"),
      number: "04",
    },
    {
      name: t("AboutPage:eight"),
      text: t("AboutPage:nine"),
      number: "05",
    },
  ];

  return (
    <div className={`section ${styles.culture__section}`}>
      <div className={`container ${styles.c__container}`}>
        <div className={styles.cc__top}>
          <HiglightedSpan text={t("AboutPage:culture")} />
          <h1 className={styles.cc__h1}>{t("AboutPage:cultureinfo")}</h1>
        </div>
        <div className={styles.cc__bottom}>
          {
            cultureData.map((data, i) => (
              <div className={styles.ccb__box} key={i}>
                <span>{data.number}</span>
                <div className={styles.box__wrap}>
                  <div className={styles.box__content}>
                    <span>{data.}</span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Culture;
