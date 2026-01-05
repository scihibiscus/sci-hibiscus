import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../ReUsables/Button";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/ourconcept.module.scss";

const OurConcept = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className={`section ${styles.concept__section}`}>
      <div className={`container ${styles.concept__container}`}>
        <div className={styles.cc__left}>
          <HiglightedSpan text="Concept" />
          <h1 className={styles.cc__h1}>{t("HomePage:concept")}</h1>
        </div>
        <div className={styles.cc__right}>
          <p className={styles.cc__p}>{t("HomePage:concepttext")}</p>
          <Button
            text={t("HomePage:morecta")}
            backColor="var(--gold)"
            hoverColor="var(--black)"
            textColor="white"
            thColor="white"
            iconColor="white"
            ihColor="white"
            link={currentLocale==="en" ? `${}`}
          />
        </div>
      </div>
    </div>
  );
};

export default OurConcept;
