import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/propertiesdisplay.module.scss";

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


const PropertiesDisplay = ({properties} : {properties: PropertyProps[]}) => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className={`section ${styles.pd__section}`}>
      <div className={`container ${styles.pd__container}`}>
        <div className={styles.pd__top}>
          <HiglightedSpan text={t("HomePage:testimonial")} />
          <h1 className={styles.pd__h1}>{t("HomePage:testitext")}</h1>
        </div>
        <div className={styles.pd__bottom}>

        </div>
      </div>
    </div>
  );
};

export default PropertiesDisplay;
