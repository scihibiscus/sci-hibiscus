import React from "react";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ProjectsPage/location.module.scss";

const Location = () => {
  const { t } = useTranslation();
  return (
    <div className={`section ${styles.loc__section}`}>
      <div className={`container ${styles.loc__container}`}>
        <div className={styles.loc__top}>
          <div className={styles.lt__top}>
            <HiglightedSpan text={t("ProjectsPage:location")} />
            <h1 className={styles.lt__h1}>{t("ProjectsPage:location2")}</h1>
          </div>
          <div className={styles.lt__bottom}>
            <h3>{("ProjectsPage:subtext9")}</h3>
            <p>{("ProjectsPage:subtext10")}</p>
          </div>
        </div>
        <div className={styles.loc__bottom}></div>
      </div>
    </div>
  );
};

export default Location;
