"use client";

import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/quicksearch.module.scss";
import ButtonSearch from "../ReUsables/ButtonSearch";


type FilterOption = {
  id: number;
  name: string;
};

type QuickCategory = {
  id: number;
  category: string;
  question: string;
  filters: FilterOption[];
};

type SelectedFilters = {
  [categoryId: number]: number[];
};

const QuickSearch = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState(0);

  // selections: { [categoryId]: [value1, value2, ...] }
  const [selections, setSelections] = useState({});

  const quickData = [
    {
      id: 1,
      category: "Transaction",
      question: "Souhaitez-vous louer ou acheter un bien immobilier ?",
      paramKey: "transaction",
      filters: [
        { name: "Louer", value: "rent" },
        { name: "Acheter", value: "sale" },
      ],
    },
    {
      id: 2,
      category: "Type d'immobilier",
      question: "Quel bien immobilier correspond le mieux à vos besoins ?",
      paramKey: "type",
      filters: [
        { name: "Appartement", value: "apartment" },
        { name: "Villa", value: "villa" },
        { name: "Maison", value: "house" },
        { name: "Magasin", value: "shop" },
        { name: "Bureau", value: "office" },
        { name: "Terrain", value: "land" },
      ],
    },
    {
      id: 3,
      category: "Localisation",
      question: "Où souhaitez-vous vous installer ?",
      paramKey: "city",
      filters: [
        { name: "Yaounde", value: "yaounde" },
        { name: "Douala", value: "douala" },
        { name: "Kribi", value: "kribi" },
        { name: "Bafoussam", value: "bafoussam" },
        { name: "Nkongsamba", value: "nkongsamba" },
        { name: "Ngaoundere", value: "ngaoundere" },
        { name: "Garoua", value: "garoua" },
      ],
    },
    {
      id: 4,
      category: "Prix (FCFA)",
      question: "Quel budget approximatif prévoyez-vous (FCFA) ?",
      paramKey: "price",
      filters: [
        { name: "<300k", value: "0-300000" },
        { name: "300k - 500k", value: "300000-500000" },
        { name: "500k - 1M", value: "500000-1000000" },
        { name: "1M - 10M", value: "1000000-10000000" },
        { name: "10M>", value: "10000000+" },
      ],
    },
    {
      id: 5,
      category: "Surface (m²)",
      question: "Quelle superficie approximative voulez-vous (m²) ?",
      paramKey: "area",
      filters: [
        { name: "<100", value: "0-100" },
        { name: "100 - 300", value: "100-300" },
        { name: "300 - 500", value: "300-500" },
        { name: "500 - 1000", value: "500-1000" },
        { name: "1000>", value: "1000+" },
      ],
    },
  ];

    // toggle a filter value for a given category id
    const toggleFilter = (categoryId, value) => {
      setSelections((prev) => {
        const arr = prev[categoryId] ? [...prev[categoryId]] : [];
        const idx = arr.indexOf(value);
        if (idx === -1) {
          // add
          return { ...prev, [categoryId]: [...arr, value] };
        } else {
          // remove
          const next = arr.filter((v) => v !== value);
          // if empty, remove key
          if (next.length === 0) {
            const { [categoryId]: _, ...rest } = prev;
            return rest;
          }
          return { ...prev, [categoryId]: next };
        }
      });
    };
  
    // compute whether any selection was made
    const hasSelection = useMemo(
      () => Object.values(selections).some((arr) => Array.isArray(arr) && arr.length > 0),
      [selections]
    );
  
    // build query string and navigate to projects page
    const handleSearch = () => {
      if (!hasSelection) return;
  
      // base path includes locale
      const basePath = currentLocale === "fr" ? "/fr/projets" : "/en/projets";
  
      const params = new URLSearchParams();
  
      quickData.forEach((category) => {
        const sel = selections[category.id];
        if (sel && sel.length > 0) {
          // join multiple values with comma
          params.set(category.paramKey, sel.join(","));
        }
      });
  
      const queryString = params.toString();
      const destination = queryString ? `${basePath}?${queryString}` : basePath;
  
      // navigate
      router.push(destination);
    };

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
              <p className={styles.qs__p}>
                {quickData[activeCategory].question}
              </p>
              <div className={styles.qsb__bottom}>
                <div className={styles.filters}>
                  {quickData[activeCategory].filters.map((data, i) => (
                    <span key={i} className={styles.filter}>
                      {data.name}
                    </span>
                  ))}
                </div>
                <div className={styles.submit}>
                  <ButtonSearch
                    text="Search"
                    backColor="var(--gold)"
                    hoverColor="var(--black)"
                    textColor="white"
                    thColor="white"
                    iconColor="white"
                    ihColor="white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
