import React from "react";
import { useTranslation } from "react-i18next";
import Plus from "@/utils/Icons/Plus";
import { FilterAnim } from "@/animation";
import { motion } from "framer-motion";
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
  const tranasctionFilters = transactions.map((transac: TransactionData, key) => {

    return {
      id: key,
      name: currentLocale==="en" ? transac.nameen : tra
    }
  }) 

  const transacFilter = {
    name: "Transaction",
    paramKey: "transaction",
    filters: [
      {
        id: 1,
        name: t("ServicesPage:rentid"),
        value: "rent"
      },
      {
        id: 2,
        name: t("ServicesPage:buyid"),
        value: "buy"
      },
    ],
  };

  const spaceFilter = {
    name: t("ServicesPage:typeproperty"),
    paramKey: "type",
    filters: [
      {
        id: 1,
        value: t("ServicesPage:appartment"),
      },
      {
        id: 2,
        value: t("ServicesPage:house"),
      },
      {
        id: 3,
        value: t("ServicesPage:villa"),
      },
      {
        id: 4,
        value: t("ServicesPage:office"),
      },
      {
        id: 5,
        value: t("ServicesPage:magasin"),
      },
      {
        id: 6,
        value: t("ServicesPage:land"),
      },
    ],
  };

  const locationFilter = {
    name: t("ServicesPage:location"),
    paramKey: "city",
    filters: [
      {
        id: 1,
        value: "Yaounde",
      },
      {
        id: 2,
        value: "Douala",
      },
      {
        id: 3,
        value: "Kribi",
      },
      {
        id: 4,
        value: "Bafoussam",
      },
      {
        id: 5,
        value: "Nkongsamba",
      },
      {
        id: 6,
        value: "Ngaoundere",
      },
      {
        id: 7,
        value: "Garoua",
      },
    ],
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
                      {data.value}
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
                      {data.value}
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
