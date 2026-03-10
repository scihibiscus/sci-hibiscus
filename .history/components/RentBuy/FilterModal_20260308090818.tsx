import React from "react";
import { useTranslation } from "react-i18next";
import Plus from "@/utils/Icons/Plus";
import { FilterAnim } from "@/animation";
import { motion } from "framer-motion";
"use client";

import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/quicksearch.module.scss";
import ButtonSearch from "../ReUsables/ButtonSearch";

/** Types */
type FilterOption = {
  name: string;
  value: string;
};

type QuickCategory = {
  id: number;
  category: string;
  question: string;
  paramKey: string;
  filters: FilterOption[];
};

type Selections = Record<number, string[]>;

/** Component */
const QuickSearch: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language || "fr";
  const router = useRouter() as AppRouterInstance;

  const [activeCategory, setActiveCategory] = useState<number>(0);

  // selections: { [categoryId]: [value1, value2, ...] }
  const [selections, setSelections] = useState<Selections>({});

  const quickData: QuickCategory[] = [
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
  const toggleFilter = (categoryId: number, value: string): void => {
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

  // helper to check if a value is selected
  const isSelected = (categoryId: number, value: string): boolean =>
    Boolean(selections[categoryId]?.includes(value));

  // compute whether any selection was made
  const hasSelection = useMemo<boolean>(
    () =>
      Object.values(selections).some(
        (arr) => Array.isArray(arr) && arr.length > 0
      ),
    [selections]
  );

  // build query string and navigate to projects page
  const handleSearch = (): void => {
    if (!hasSelection) return;

    // base path includes locale
    const basePath = currentLocale === "fr" ? "/fr/services" : "/en/services";

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

    // navigate (client-side)
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
              <div className={styles.scrolling}>
                <div className={styles.qs__cat}>
                  {quickData.map((data, i) => (
                    <span
                      key={data.id}
                      className={`${styles.category} ${
                        activeCategory === i ? styles.active__cat : ""
                      }`}
                      onClick={() => setActiveCategory(i)}
                    >
                      {data.category}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.qsi__bottom}>
              <p className={styles.qs__p}>
                {quickData[activeCategory].question}
              </p>

              <div className={styles.qsb__bottom}>
                <div className={styles.filters}>
                  {quickData[activeCategory].filters.map((f, idx) => {
                    const selected = isSelected(
                      quickData[activeCategory].id,
                      f.value
                    );

                    return (
                      <span
                        key={idx}
                        className={`${styles.filter} ${
                          selected ? styles.filter__active : ""
                        }`}
                        onClick={() =>
                          toggleFilter(quickData[activeCategory].id, f.value)
                        }
                      >
                        {f.name}
                      </span>
                    );
                  })}
                </div>

                <button
                  className={`${styles.searchButton} ${
                    hasSelection ? "" : styles.disabled
                  }`}
                  disabled={!hasSelection}
                  onClick={handleSearch}
                >
                  <ButtonSearch
                    text="Search"
                    backColor="var(--gold)"
                    hoverColor="var(--black)"
                    textColor="white"
                    thColor="white"
                    iconColor="white"
                    ihColor="white"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;

import { LocationsData, TransactionData } from "@/types";
import styles from "../../styles/RentBuyPage/filtermodal.module.scss";

const FilterModal = ({
  activeModal,
  setActiveModal,
  transactions,
  locations,
  propertytypes,
}: {
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  transactions: TransactionData[];
  locations: LocationsData[];
  propertytypes: TransactionData[];
}) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  //Build Transaction filters
  const transactionFilters = transactions.map(
    (transac: TransactionData, key) => {
      return {
        id: key,
        name: currentLocale === "en" ? transac.nameen : transac.namefr,
        value: transac.slug,
      };
    }
  );

  const transacFilter = {
    name: "Transaction",
    paramKey: "transaction",
    filters: transactionFilters,
  };

  //Build propertytype filters
  const propertytypeFilters = propertytypes.map(
    (proptype: TransactionData, key) => {
      return {
        id: key,
        name: currentLocale === "en" ? proptype.nameen : proptype.namefr,
        value: proptype.slug,
      };
    }
  );

  const spaceFilter = {
    name: t("ServicesPage:typeproperty"),
    paramKey: "type",
    filters: propertytypeFilters
  };


  //Build location filters
  const locationFilters = locations.map(
    (locay: LocationsData, key) => {
      return {
        id: key,
        name: locay.cityname,
        value: locay.slug,
      };
    }
  );
  const locationFilter = {
    name: t("ServicesPage:location"),
    paramKey: "city",
    filters: locationFilters
  };

  const priceFilter = {
    name: t("ServicesPage:pricefcfa"),
    paramKey: "price",
    filters: [
      {
        id: 1,
        value: "<300k",
      },
      {
        id: 2,
        value: "300k - 500k",
      },
      {
        id: 3,
        value: "500k - 1M",
      },
      {
        id: 4,
        value: "1M - 10M",
      },
      {
        id: 5,
        value: "10M>",
      },
    ],
  };

  const surfaceFilter = {
    name: t("ServicesPage:aream2"),
    paramKey: "area",
    filters: [
      {
        id: 1,
        value: "<100",
      },
      {
        id: 2,
        value: "100 - 300",
      },
      {
        id: 3,
        value: "300 - 500",
      },
      {
        id: 4,
        value: "500 - 1000",
      },
      {
        id: 5,
        value: "1000>",
      },
    ],
  };

  return (
    <motion.div
      className={styles.filter__modal}
      variants={FilterAnim}
      animate={activeModal ? "entry" : "initial"}
      exit="exit"
    >
      <div className={styles.modal__content}>
        <div className={styles.modal__container}>
          <div className={styles.modal__top}>
            <span className={styles.m__name}>{t("ServicesPage:filter")}</span>
            <span
              className={styles.modal__cancel}
              onClick={() => setActiveModal(false)}
            >
              <Plus />
            </span>
          </div>
        </div>
        <div className={styles.modal__bottom} data-lenis-prevent>
          <div className={styles.mb__wrapper}>
            <div className={styles.modal__container}>
              <div className={styles.modal__wrapper2}>
                <span className={styles.filter__name}>
                  {transacFilter.name}
                </span>
                <div className={styles.filters}>
                  {transacFilter.filters.map((data, i) => (
                    <span key={i} className={styles.filter}>
                      {data.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.modal__container}>
              <div className={styles.modal__wrapper}>
                <span className={styles.filter__name}>{spaceFilter.name}</span>
                <div className={styles.filters}>
                  {spaceFilter.filters.map((data, i) => (
                    <span key={i} className={styles.filter}>
                      {data.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.modal__container}>
              <div className={styles.modal__wrapper}>
                <span className={styles.filter__name}>
                  {locationFilter.name}
                </span>
                <div className={styles.filters}>
                  {locationFilter.filters.map((data, i) => (
                    <span key={i} className={styles.filter}>
                      {data.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.modal__container}>
              <div className={styles.modal__wrapper}>
                <span className={styles.filter__name}>{priceFilter.name}</span>
                <div className={styles.filters}>
                  {priceFilter.filters.map((data, i) => (
                    <span key={i} className={styles.filter}>
                      {data.value}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.modal__container2}>
              <div className={styles.modal__wrapper}>
                <span className={styles.filter__name}>
                  {surfaceFilter.name}
                </span>
                <div className={styles.filters}>
                  {surfaceFilter.filters.map((data, i) => (
                    <span key={i} className={styles.filter}>
                      {data.value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.applyfilter}>
          <div className={styles.modal__container2}>
            <button
              className={styles.af__button}
              onClick={() => setActiveModal(false)}
            >
              {t("ServicesPage:apply")}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterModal;
