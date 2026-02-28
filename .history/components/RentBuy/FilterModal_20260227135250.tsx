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

          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
