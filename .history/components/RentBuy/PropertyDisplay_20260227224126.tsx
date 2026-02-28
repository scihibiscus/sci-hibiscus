"use client";

import React, { useState } from "react";
import Plus from "@/utils/Icons/Plus";
import Angle from "@/utils/Icons/Angle";
import { useTranslation } from "react-i18next";
import Ascending from "@/utils/Icons/Ascending";
import Descending from "@/utils/Icons/Descending";
import FilterModal from "./FilterModal";
import { AnimatePresence } from "framer-motion";
import IMAGE from "../../public/images/image2.jpg"
import PropertyCard from "./PropertyCard";
import styles from "../../styles/RentBuyPage/propertypage.module.scss";

const PropertyDisplay = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const [activeSort, setActiveSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState(-1);
  const [activeModal, setActiveModal] = useState(false);

  const propertyData = [
    {
      // type : t("ServicesPage:office"),
      image: IMAGE,
      status: "Rent",
      rentStatus : "perDay",
      name: "Bureau du park",
      location: "Bastos, Yaounde",
      price : 50000,
      keyData : [
        {
          type: t("ServicesPage:office")
        },
        {
          rooms: 3
        },
        {
          bath: 2
        },
        {
          : 2
        },
      ]
    }
  ]

  return (
    <>
      <div className={styles.rb__section}>
        <div className={`container ${styles.rb__container}`}>
          <div className={styles.filter__sort}>
            {/**Filter Button */}
            <div
              className={styles.filter__button}
              onClick={() => setActiveModal(!activeModal)}
            >
              <span className={styles.f__name}>{t("ServicesPage:filter")}</span>
              <span className={styles.f__icon}>
                <Plus />
              </span>
            </div>
            <div className={styles.sort__wrapper}>
              <div
                className={`${styles.sort__button} ${
                  activeSort ? styles.active__sort : ""
                }`}
                onClick={() => setActiveSort(!activeSort)}
              >
                <span className={styles.f__name}>{t("ServicesPage:sort")}</span>
                <span className={styles.f__icon}>
                  <Angle />
                </span>
              </div>
              <div
                className={`${styles.sorting__box} ${
                  activeSort ? styles.active__box : ""
                }`}
              >
                <div
                  className={`${styles.sorter} ${
                    selectedSort === 0 ? styles.active__sorter : ""
                  }`}
                  id="price__asc"
                  onClick={() => {
                    setActiveSort(false);
                    setSelectedSort(0);
                  }}
                >
                  <span className={styles.f__icon}>
                    <Ascending />
                  </span>
                  <span className={styles.f__name}>
                    {t("ServicesPage:price")}
                  </span>
                </div>
                <div
                  className={`${styles.sorter} ${
                    selectedSort === 1 ? styles.active__sorter : ""
                  }`}
                  id="price__des"
                  onClick={() => {
                    setActiveSort(false);
                    setSelectedSort(1);
                  }}
                >
                  <span className={styles.f__icon}>
                    <Descending />
                  </span>
                  <span className={styles.f__name}>
                    {t("ServicesPage:price")}
                  </span>
                </div>
                <div
                  className={`${styles.sorter} ${
                    selectedSort === 2 ? styles.active__sorter : ""
                  }`}
                  id="area__asc"
                  onClick={() => {
                    setActiveSort(false);
                    setSelectedSort(2);
                  }}
                >
                  <span className={styles.f__icon}>
                    <Ascending />
                  </span>
                  <span className={styles.f__name}>
                    {t("ServicesPage:surface")}
                  </span>
                </div>
                <div
                  className={`${styles.sorter} ${
                    selectedSort === 3 ? styles.active__sorter : ""
                  }`}
                  id="area__des"
                  onClick={() => {
                    setActiveSort(false);
                    setSelectedSort(3);
                  }}
                >
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
          <div className={styles.properties}>
            <PropertyCard />
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {activeModal && (
          <FilterModal
            activeModal={activeModal}
            setActiveModal={setActiveModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PropertyDisplay;
