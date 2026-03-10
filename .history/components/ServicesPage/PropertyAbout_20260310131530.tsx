import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/RentBuyPage/propabout.module.scss";

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
  overview: {
    en: string;
    fr: string;
    _key: string;
  }[];
  otherdetails: {
    en: string;
    fr: string;
    _key: string;
  }[];
  maindetails: {
    keyEn: string;
    keyFr: string;
    valueEn: string;
    valueFr: string;
    _key: string;
  }[];
  gallery: {
    caption: string,
    type: string
  }[]
}


const PropertyAbout = ({ property }: { property: PropertyProps }) => {
  const { t, i18n } = useTranslation();
  const currentLocale = 

  const overviewData = [t("ServicesPage:text1"), t("ServicesPage:text2")];

  return (
    <div className={`section ${styles.pa__section}`}>
      <div className={`container ${styles.pa__container}`}>
        <HiglightedSpan text={t("ServicesPage:overview")} />
        <div className={styles.overview}>
          {property.otherdetails.map((data, i) => (
            <p className={styles.op} key={i}>
              {data}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyAbout;
