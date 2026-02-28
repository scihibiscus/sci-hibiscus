import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/RentBuyPage/filtermodal.module.scss";

const FilterModal = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  return (
    <div className={styles.filter__modal}>
      <div className={styles.modal__content}>
        <div className={styles.modal__container}>
          <div className={styles.modal__top}></div>
          <div className={styles.modal__bottom}></div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
