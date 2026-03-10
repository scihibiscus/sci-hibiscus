import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import WhatsappButton from "./WhatsappButton";
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
    caption: string;
    type: string;
  }[];
}

const PropertyDetails = ({ property }: { property: PropertyProps }) => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const detailsData = [
    {
      name: "Type",
      info: "Bureau",
    },
    {
      name: "Localisation",
      info: "Bonapriso, Douala",
    },
    {
      name: "Surface utile (m²) ",
      info: "60",
    },
    {
      name: "Prix (FCFA / mois)",
      info: "350,000",
    },
    {
      name: "Parking",
      info: "Oui",
    },
    {
      name: "Climatisation",
      info: "Oui",
    },
    {
      name: "Disponibilité",
      info: "Immédiale",
    },
  ];

  //Contact Details
  const properter = property.name;
  const message = t("ServicesPage:message", { properter });
  const buttontext = t("ServicesPage:reserve");

  function getTransactionType() {
    let transaction = "";
    if (property.transaction.slug.current === "rent") {
      currentLocale === "en"
        ? (transaction = "For Rent")
        : (transaction = "À Louer");
    } else {
      currentLocale === "en"
        ? (transaction = "For Sale")
        : (transaction = "À Vendre");
    }
    return transaction;
  }

  return (
    <div className={`section ${styles.pa__section}`}>
      <div className={`container ${styles.pa__container2}`}>
        <HiglightedSpan text={t("ServicesPage:propdetail")} />
        <div className={styles.details}>
          <div className={styles.details__wrap}>
            <p className={styles.dw__left}>
              <span className={styles.dw__inner}>Transaction</span>
            </p>
            <p className={styles.dw__right}>{getTransactionType()}</p>
          </div>
          {property.maindetails.map((data, i) => (
            <div className={styles.details__wrap} key={i}>
              <p className={styles.dw__left}>
                <span className={styles.dw__inner}>
                  {currentLocale === "en" ? data.keyEn : data.keyFr}
                </span>
              </p>
              <p className={styles.dw__right}>
                {currentLocale === "en" ? data.valueEn : data.valueEn}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.whatsapp}>
          <WhatsappButton
            buttontext={buttontext}
            textmessage={message}
            backColor="white"
            textColor="var(--black)"
            border="1px solid rgba(0,0,0,0.15)"
            dropshadow="drop-shadow(0px 0px 5px rgba(0,0,0,0.15))"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
