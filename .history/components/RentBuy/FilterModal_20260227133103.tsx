import React from "react";
import { useTranslation } from "react-i18next";
import Plus from "@/utils/Icons/Plus";
import styles from "../../styles/RentBuyPage/filtermodal.module.scss";

const FilterModal = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className={styles.filter__modal}>
      <div className={styles.modal__content}>
        di
        <div className={styles.modal__top}>
          <span className={styles.m__name}>{t("ServicesPage:filter")}</span>
          <span className={styles.modal__cancel}>
            <Plus />
          </span>
        </div>
        <div className={styles.modal__bottom}></div>
      </div>
    </div>
  );
};

export default FilterModal;
