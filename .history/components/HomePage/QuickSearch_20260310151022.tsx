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
      question: t("ServicesPage:transacquest"),
      paramKey: "transaction",
      filters: [
        { name: t("ServicesPage:rentid"), value: "rent" },
        { name: t("ServicesPage:buyid"), value: "buy" },
      ],
    },
    {
      id: 2,
      category: t("ServicesPage:typeprop"),
      question: t("ServicesPage:typequest"),
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
      category: t("ServicesPage:location"),
      question: t("ServicesPage:locaquest"),
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
      category: t("ServicesPage:pricefcfa"),
      question: t("ServicesPage:pricequest"),
      paramKey: "price",
      filters: [
        { name: "<500k", value: "0-500000" },
        { name: "500k - 500k", value: "300000-500000" },
        { name: "500k - 1M", value: "500000-1000000" },
        { name: "1M - 10M", value: "1000000-10000000" },
        { name: "10M>", value: "10000000+" },
      ],
    },
    {
      id: 5,
      category: t("ServicesPage:aream2"),
      question: t("ServicesPage:areaquest"),
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
