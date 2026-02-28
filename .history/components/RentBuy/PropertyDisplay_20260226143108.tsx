"use client";

import React, { useState } from "react";
import Plus from "@/utils/Icons/Plus";
import Angle from "@/utils/Icons/Angle";
import { useTranslation } from "react-i18next";
import Ascending from "@/utils/Icons/Ascending";
import Descending from "@/utils/Icons/Descending";
import styles from "../../styles/RentBuyPage/propertypage.module.scss";

const PropertyDisplay = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const [activeSort, setActiveSort] = useState(false);

  return (
    <div className={styles.rb__section}>
      <div className={`container ${styles.rb__container}`}>
        <div className={styles.filter__sort}>
          <div className={styles.filter__button}>
            <span className={styles.f__name}>{t("ServicesPage:filter")}</span>
            <span className={styles.f__icon}>
              <Plus />
            </span>
          </div>
          <div className={styles.sort__wrapper}>
            <div
              className={`${styles.sort__button} ${activeSort ? styles.active__sort : ""}`}
              onClick={() => setActiveSort(!activeSort)}
            >
              <span className={styles.f__name}>{t("ServicesPage:sort")}</span>
              <span className={styles.f__icon}>
                <Angle />
              </span>
            </div>
            <div className={`styles.sorting__box`}>
              <div className={styles.sorter} id="price__asc">
                <span className={styles.f__icon}>
                  <Ascending />
                </span>
                <span className={styles.f__name}>
                  {t("ServicesPage:price")}
                </span>
              </div>
              <div className={styles.sorter} id="price__des">
                <span className={styles.f__icon}>
                  <Descending />
                </span>
                <span className={styles.f__name}>
                  {t("ServicesPage:price")}
                </span>
              </div>
              <div className={styles.sorter} id="area__asc">
                <span className={styles.f__icon}>
                  <Ascending />
                </span>
                <span className={styles.f__name}>
                  {t("ServicesPage:surface")}
                </span>
              </div>
              <div className={styles.sorter} id="area__des">
                <span className={styles.f__icon}>
                  <Descending />
                </span>
                <span className={styles.f__name}>
                  {t("ServicesPage:surface")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDisplay;
