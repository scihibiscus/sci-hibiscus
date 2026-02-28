import React from "react";
import Plus from "@/utils/Icons/Plus";
import Angle from "@/utils/Icons/Angle";
import { useTranslation } from "react-i18next";
import styles from "../../styles/RentBuyPage/propertypage.module.scss";

const PropertyDisplay = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className={styles.rb__section}>
      <div className={`container ${styles.rb__container}`}>
        <div className={styles.filter__sort}>
          <div className={styles.filter__button}>
            <span className="">{t("ServicesPage:filter")}</span>
            <span>
              <Plus />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDisplay;
