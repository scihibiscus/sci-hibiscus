import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/quicksearch.module.scss";

const QuickSearch = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const [activeCategory, setActiveCategory] = useState(0);

  const quickData = [
    {
      id: 1,
      category: "Transaction",
      question: "Souhaitez-vous louer ou acheter un espace immobilier ?",
      filters: [
        {
          name: "Louer",
          id: 1,
        },
        {
          name: "Acheter",
          id: 2,
        },
      ],
    },
    {
      id: 2,
      category: "Type d'immobilier",
      question: "Quel bien immobilier correspond le mieux à vos besoins ?",
      filters: [
        {
          name: "Appartement",
          id: 1,
        },
        {
          name: "Villa",
          id: 2,
        },
        {
          name: "Maison",
          id: 3,
        },
        {
          name: "Magasin",
          id: 4,
        },
        {
          name: "Bureau",
          id: 5,
        },
        {
          name: "Terrain",
          id: 6,
        },
      ],
    },
    {
      id: 3,
      category: "Localisation",
      question: "Où souhaitez-vous vous installer ?",
      filters: [
        {
          name: "Yaounde",
          id: 1,
        },
        {
          name: "Douala",
          id: 2,
        },
        {
          name: "Kribi",
          id: 3,
        },
        {
          name: "Bafoussam",
          id: 4,
        },
        {
          name: "Nkongsamba",
          id: 5,
        },
        {
          name: "Ngaoundere",
          id: 6,
        },
        {
          name: "Garoua",
          id: 7,
        },
      ],
    },
    {
      id: 4,
      category: "Prix (FCFA)",
      question: "Quel budget approximatif prévoyez-vous ?",
      filters: [
        {
          name: "<300k",
          id: 1,
        },
        {
          name: "300k - 500k",
          id: 2,
        },
        {
          name: "500k - 1M",
          id: 3,
        },
        {
          name: "1M - 10M",
          id: 4,
        },
        {
          name: "10M>",
          id: 5,
        },
      ],
    },
    {
      id: 5,
      category: "Surface (m²)",
      question: "Quelle superficie approximative voulez-vous ?",
      filters: [
        {
          name: "<100",
          id: 1,
        },
        {
          name: "100 - 300",
          id: 2,
        },
        {
          name: "300 - 500",
          id: 3,
        },
        {
          name: "500 - 1000",
          id: 4,
        },
        {
          name: "1000>",
          id: 5,
        },
      ],
    },
  ];
  return (
    <div className={`section ${styles.qs__section}`}>
      <div className={`container ${styles.qs__container}`}>
        <div className={styles.qs__top}>
          <HiglightedSpan text={t("HomePage:quicksearch")} />
          <h1 className={styles.qs__h1}>{t("HomePage:findprop")}</h1>
        </div>
        <div className={styles.qs__bottom}>
          <div className={styles.qs__interior}>
            <div className={styles.qsi__top}>
              <div className={styles.qs__cat}>
                {quickData.map((data, i) => (
                  <span
                    className={`${styles.category} ${
                      activeCategory === i ? styles.active__cat : ""
                    }`}
                    key={i}
                    onClick={() => setActiveCategory(i)}
                  >
                    {data.category}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.qsi__bottom}>
              <p className={styles.qs__p}>{quickData[activeCategory].question}</p>
              <div className={styles.filters}>
                {
                  quickData[activeCategory].filters.map((data, i) => (
                    <span></span>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
