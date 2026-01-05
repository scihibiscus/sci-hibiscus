import React from "react";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ProjectsPage/projectplans.module.scss";

const ProjectPlans = () => {
  const { t } = useTranslation();

  const plansData = [
    {
      appartment: "A1",
      room: "03",
      area: "100",
      floor: "0",
      price: "100,000,000",
      href: "/docs/plans.pdf",
    },
    {
      appartment: "A2",
      room: "03",
      area: "100",
      floor: "0",
      price: "100,000,000",
      href: "/docs/plans.pdf",
    },
    {
      appartment: "A3",
      room: "03",
      area: "100",
      floor: "1",
      price: "100,000,000",
      href: "/docs/plans.pdf",
    },
    {
      appartment: "A4",
      room: "03",
      area: "100",
      floor: "1",
      price: "100,000,000",
      href: "/docs/plans.pdf",
    },
    {
      appartment: "A5",
      room: "05",
      area: "200",
      floor: "2",
      price: "200,000,000",
      href: "/docs/plans.pdf",
    },
  ];

  return (
    <div className={styles.pp__section}>
      <div className={`container ${styles.pp__container}`}>
        <div className={styles.ppc__top}>
          <HiglightedSpan text={t("ProjectsPage:plans")} />
          <h1 className={styles.pp__h1}>{t("ProjectsPage:plans2")}</h1>
        </div>
        <div className={styles.ppc__bottom}>
          <div className={styles.pcb__wrapper}>
            <div className={styles.table}>
              <div className={`${styles.table__row} ${styles.tr__main}`}>
                <span className={styles.table__span}>
                  {t("ProjectsPage:apartment")}
                </span>
                <span className={styles.table__span}>
                  {t("ProjectsPage:rooms")}
                </span>
                <span className={styles.table__span}>
                  {t("ProjectsPage:area")}
                </span>
                <span className={styles.table__span}>
                  {t("ProjectsPage:floor")}
                </span>
                <span className={styles.table__span}>
                  {t("ProjectsPage:price")}
                </span>
                <span className={styles.table__span}>
                  {t("ProjectsPage:floorplan")}
                </span>
              </div>
              {
                plansData.map(() => (
                  <div className={`{}`}>

                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPlans;
