import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import styles from "../../styles/RentBuyPage/propertycard.module.scss";

interface PropertyProps {
  _id: string,
  area: number,
  bath?: number | null,
  parlour?: number | null,
  room?: number | null,
  price: number,
  name: string,
  propertytype: {
    nameen: string,
    namefr: string,
    slug: string
  },
  transaction: {
    nameen: string,
    namefr: string,
    slug: string
  },
  quarter: string,
  city: {
    cityname: string,
    slug: string
  }
  slug: {
    current: string
  },
  rentpricing: string;
  mainimage: {
    alt: string;
  };
}

const PropertyCard = ({ data }: { data: PropertyProps }) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const formatNumber = (num: number) => {
    // Convert to number if it's a string
    const numValue = typeof num === "string" ? parseFloat(num) : num;

    // Return as-is if not a valid number
    if (isNaN(numValue)) return num;

    // Use toLocaleString for comma formatting
    return numValue.toLocaleString();
  };


  return (
    <Link className={styles.property__card} href={`/${currentLocale}/services/bureau-du-park`}>
      <div className={styles.property__top}>
        <div className={styles.p__image}>
          <Image placeholder="blur" fill quality={100} src={urlFor(data.mainimage).width(1920).url() || urlFor(data.mainimage).url()} alt={data.mainimage.alt} />
        </div>
      </div>
      <div className={styles.property__bottom}>
        <span className={styles.p__name}>{data.name}</span>
        <div className={styles.price__location}>
          <div className={styles.price}>
            <span>{formatNumber(data.price)} FCFA</span>
            {data.transaction.slug === "rent" && data.rentpricing && (
              <span>
                {data.rentpricing === "perday"
                  ? t("ServicesPage:perday")
                  {data.}
                  : t("ServicesPage:permonth")}
              </span>
            )}
          </div>
          {"|"}
          <span className={styles.location}>{data.location}</span>
        </div>
        <div className={styles.p__stats}>
          {data.keyData.type && <span>{data.keyData.type}</span>}
          {data.keyData.rooms && (
            <span>
              {data.keyData.rooms} {t("ServicesPage:room")}
            </span>
          )}
          {data.keyData.bath && (
            <span>
              {data.keyData.bath} {t("ServicesPage:bath")}
            </span>
          )}
          {data.keyData.living && (
            <span>
              {data.keyData.living} {t("ServicesPage:living")}
            </span>
          )}
          {data.keyData.area && <span>{data.keyData.area} m²</span>}
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
