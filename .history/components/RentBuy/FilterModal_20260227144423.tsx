import React from "react";
import { useTranslation } from "react-i18next";
import Plus from "@/utils/Icons/Plus";
import styles from "../../styles/RentBuyPage/filtermodal.module.scss";

const FilterModal = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const spaceFilter = {
    name: t("ServicesPage:typeproperty"),
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
    <div className={styles.filter__modal}>
      <div className={styles.modal__content}>
        <div className={styles.modal__container}>
          <div className={styles.modal__top}>
            <span className={styles.m__name}>{t("ServicesPage:filter")}</span>
            <span className={styles.modal__cancel}>
              <Plus />
            </span>
          </div>
        </div>
        <div className={styles.modal__bottom}>
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
              <span className={styles.filter__name}>{locationFilter.name}</span>
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

          <div className={styles.modal__container}>
            <div className={styles.modal__wrapper}>
              <span className={styles.filter__name}>{surfaceFilter.name}</span>
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
        <div className={styles.applyfilter}>
          <div className={styles.modal__container}>
            <button className={styles.af__button}>{t("")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
