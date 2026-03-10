"use client";

import React, { useState, useEffect } from "react";
import Plus from "@/utils/Icons/Plus";
import Angle from "@/utils/Icons/Angle";
import { useTranslation } from "react-i18next";
import Ascending from "@/utils/Icons/Ascending";
import Descending from "@/utils/Icons/Descending";
import FilterModal from "./FilterModal";
import { AnimatePresence } from "framer-motion";
import PropertyCard from "./PropertyCard";
import { LocationsData, TransactionData } from "@/types";
import styles from "../../styles/RentBuyPage/propertypage.module.scss";
import { client } from "@/sanity/lib/client";
import { useSearchParams, useRouter } from "next/navigation";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import SkeletonLoader from "../ReUsables/SkeletonLoader";

interface PropertyProps {
  _id: string;
  area: number;
  bath?: number | null;
  parlour?: number | null;
  room?: number | null;
  price: number;
  name: string;
  propertytype: {
    nameen: string;
    namefr: string;
    slug: {
      current: string;
    };
  };
  transaction: {
    nameen: string;
    namefr: string;
    slug: {
      current: string;
    };
  };
  quarter: string;
  city: {
    cityname: string;
    slug: {
      current: string;
    };
  };
  slug: {
    current: string;
  };
  rentpricing: string;
  mainimage: {
    alt: string;
  };
}

const PropertyDisplay = ({
  transactions,
  locations,
  propertytypes,
}: {
  transactions: TransactionData[];
  locations: LocationsData[];
  propertytypes: TransactionData[];
}) => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const [activeSort, setActiveSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState(-1);
  const [activeModal, setActiveModal] = useState(false);
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);

  // App Router search params
  const searchParams = useSearchParams();
  const router = useRouter() as AppRouterInstance;

  /* -----------------------
     Helpers: parse search params
  ------------------------*/
  const parseCommaParam = (raw: string | null) => {
    if (!raw) return [];
    return raw.split(",").map((s) => decodeURIComponent(s));
  };

  // parse price/area token into numeric ranges
  type Range = { min?: number; max?: number };
  const parseRangeToken = (token: string): Range => {
    if (!token) return {};
    const t = token.trim();
    if (t.includes("+")) {
      const v = Number(t.replace("+", "").replace(/\D/g, ""));
      return { min: Number.isFinite(v) ? v : undefined };
    }
    if (t.includes("-")) {
      const parts = t.split("-").map((p) => Number(p.replace(/\D/g, "")));
      return { min: parts[0] || undefined, max: parts[1] || undefined };
    }
    return {};
  };

  /* -----------------------
     Build filters object from searchParams
  ------------------------*/
  const buildFiltersFromParams = () => {
    const f: {
      transactions?: string[];
      types?: string[];
      cities?: string[];
      priceRanges?: Range[];
      areaRanges?: Range[];
    } = {};

    if (!searchParams) return f;

    const transRaw = searchParams.get("transaction");
    const typesRaw = searchParams.get("type");
    const cityRaw = searchParams.get("city");
    const priceRaw = searchParams.get("price");
    const areaRaw = searchParams.get("area");

    const trans = parseCommaParam(transRaw);
    if (trans.length) f.transactions = trans;

    const types = parseCommaParam(typesRaw);
    if (types.length) f.types = types;

    const cities = parseCommaParam(cityRaw);
    if (cities.length) f.cities = cities;

    const priceTokens = parseCommaParam(priceRaw);
    if (priceTokens.length) {
      f.priceRanges = priceTokens.map((tok) => parseRangeToken(tok));
    }

    const areaTokens = parseCommaParam(areaRaw);
    if (areaTokens.length) {
      f.areaRanges = areaTokens.map((tok) => parseRangeToken(tok));
    }

    return f;
  };

  /* -----------------------
     Build GROQ query dynamically & params
     (parameterized to avoid injection)
  ------------------------*/
  const buildGROQ = (filters: ReturnType<typeof buildFiltersFromParams>) => {
    const conditions: string[] = ["available == true"]; // base condition
    const params: Record<string, any> = {};

    if (filters.transactions?.length) {
      params.transactionSlugs = filters.transactions;
      conditions.push("transaction->slug.current in $transactionSlugs");
    }

    if (filters.types?.length) {
      params.typeSlugs = filters.types;
      conditions.push("propertytype->slug.current in $typeSlugs");
    }

    if (filters.cities?.length) {
      params.citySlugs = filters.cities;
      conditions.push("city->slug.current in $citySlugs");
    }

    // price ranges -> OR clauses
    if (filters.priceRanges?.length) {
      const priceClauses: string[] = [];
      filters.priceRanges.forEach((r, idx) => {
        if (r.min != null && r.max != null) {
          params[`pmin${idx}`] = r.min;
          params[`pmax${idx}`] = r.max;
          priceClauses.push(`(price >= $pmin${idx} && price <= $pmax${idx})`);
        } else if (r.min != null) {
          params[`pmin${idx}`] = r.min;
          priceClauses.push(`(price >= $pmin${idx})`);
        } else if (r.max != null) {
          params[`pmax${idx}`] = r.max;
          priceClauses.push(`(price <= $pmax${idx})`);
        }
      });
      if (priceClauses.length)
        conditions.push("(" + priceClauses.join(" || ") + ")");
    }

    // area ranges
    if (filters.areaRanges?.length) {
      const areaClauses: string[] = [];
      filters.areaRanges.forEach((r, idx) => {
        if (r.min != null && r.max != null) {
          params[`amin${idx}`] = r.min;
          params[`amax${idx}`] = r.max;
          areaClauses.push(`(area >= $amin${idx} && area <= $amax${idx})`);
        } else if (r.min != null) {
          params[`amin${idx}`] = r.min;
          areaClauses.push(`(area >= $amin${idx})`);
        } else if (r.max != null) {
          params[`amax${idx}`] = r.max;
          areaClauses.push(`(area <= $amax${idx})`);
        }
      });
      if (areaClauses.length)
        conditions.push("(" + areaClauses.join(" || ") + ")");
    }

    // combine conditions
    const whereClause = conditions.length
      ? "&& " + conditions.join(" && ")
      : "";

    // sorting
    let order = " | order(publishedAt desc)"; // default
    if (selectedSort === 0) order = " | order(price asc)";
    if (selectedSort === 1) order = " | order(price desc)";
    if (selectedSort === 2) order = " | order(area asc)";
    if (selectedSort === 3) order = " | order(area desc)";

    const query = `*[_type == "property" ${whereClause}]${order}{
      _id,
name,
    slug,
    price,
    quarter,
    transaction-> {
      nameen,
      namefr,
      slug
    },
    city->{
      cityname,
      slug
    },
    area,
    mainimage,
    propertytype-> {
      nameen,
      namefr,
      slug
    },
    rentpricing,
    bath,
    parlour,
    room
    }`;

    return { query, params };
  };

  /* -----------------------
     Effect: build filters -> query -> fetch
  ------------------------*/
  useEffect(() => {
    const fetchFiltered = async () => {
      setLoading(true);

      try {
        const filters = buildFiltersFromParams();
        const { query: groqQuery, params } = buildGROQ(filters);

        const res = await client.fetch(groqQuery, params);

        setProperties(res || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
        setHasFetched(true);
      }
    };

    fetchFiltered();
    // react on searchParams string and selectedSort
  }, [searchParams?.toString(), selectedSort]);

  //Clear Filters
  const activeFiltersCount = React.useMemo(() => {
    if (!searchParams) return 0;

    let count = 0;

    searchParams.forEach((value) => {
      if (value) {
        count += value.split(",").length;
      }
    });

    return count;
  }, [searchParams]);

  const clearAllFilters = () => {
    const basePath = currentLocale === "fr" ? "/fr/services" : "/en/services";

    router.replace(basePath);
  };

  /* -----------------------
     Render
  ------------------------*/
  return (
    <>
      <div className={styles.rb__section}>
        <div className={`container ${styles.rb__container}`}>
          <div className={styles.filter__sort}>
            {/* Filter Button */}
            <div
              className={styles.filter__button}
              onClick={() => setActiveModal(!activeModal)}
            >
              <span className={styles.f__name}>{t("ServicesPage:filter")}</span>
              <span className={styles.f__icon}>
                <Plus />
              </span>
            </div>

            {/* Sort UI */}
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

            {activeFiltersCount > 0 && (
              <div className={styles.cancel__filter} onClick={clearAllFilters}>
                <span>
                  {t("ServicesPage:filter")} ({activeFiltersCount})
                </span>
                <span className={styles.icon}>
                  <Plus />
                </span>
              </div>
            )}
          </div>

          {/* Properties list */}
          <div className={styles.properties}>
            {loading ? (
              // <p>Loading...</p>
              <SkeletonLoader />
            ) : hasFetched && properties.length === 0 ? (
              <p>{t("ServicesPage:noresults")}</p>
            ) : (
              properties.map((p: any) => <PropertyCard data={p} key={p._id} />)
            )}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeModal && (
          <FilterModal
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            transactions={transactions}
            locations={locations}
            propertytypes={propertytypes}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PropertyDisplay;
