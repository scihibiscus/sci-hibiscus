import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Arrow from "@/utils/Icons/Arrow";
import styles from "../../styles/ProjectsPage/procontact.module.scss";

const PropertyContact = () => {
  const { t } = useTranslation();
  const contentHead
  return (
    <div className={`section ${styles.pc__section}`}>
      <div className={`container ${styles.pc__container}`}>
        <div className={styles.pc__top}>
          <h3 className={styles.pct__h3}>{t("ProjectsPage:hear")}</h3>
          <div className={styles.pct__left}>
            <p className={styles.pct__p}>{t("ProjectsPage:heartext")}</p>
            <div className={styles.button}>
              <span>{t("BuylandPage:getintouch")}</span>
              <div className={styles.bicon}>
                <div className={styles.bicon__wrapper}>
                  <div className={styles.icons}>
                    <Arrow />
                  </div>
                  <div className={styles.icons}>
                    <Arrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pc__bottom}>

        </div>
      </div>
    </div>
  );
};

export default PropertyContact;
