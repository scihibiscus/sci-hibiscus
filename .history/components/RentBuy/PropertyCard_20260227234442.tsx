import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { StaticImageData } from "next/image";
import styles from "../../styles/RentBuyPage/propertycard.module.scss";

interface PropertyProps {
  image: StaticImageData;
  status: string;
  rentStatus?: string;
  name: string;
  location: string;
  price: number;
  keyData: {
    type: string;
    rooms?: number;
    bath?: number;
    living?: number;
    area?: number;
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
    <Link className={styles.property__card} href="/">
      <div className={styles.property__top}>
        <div className={styles.p__image}>
          <Image fill quality={100} src={data.image} alt={data.name} />
        </div>
      </div>
      <div className={styles.property__bottom}>
        <span className={styles.p__name}>{data.name}</span>
        <div className={styles.price__location}>
          <div className={styles.price}>
            <span>{formatNumber(data.price)} FCFA</span>
            {data.status === "Rent" && data.rentStatus && (
              <span>
                {data.rentStatus === "perDay"
                  ? t("ServicesPage:perday")
                  : t("ServicesPage:permonth")}
              </span>
            )}
          </div>
          {"|"}
          <span className={styles.location}>{data.location}</span>
        </div>
        <div className={styles.p__stats}>
          {data.keyData.type && <span>{data.keyData.type}</span>}
          {data.keyData.type && <span>{data.keyData.type}</span>}
          {data.keyData.type && <span>{data.keyData.type}</span>}
          {data.keyData.type && <span>{data.keyData.type}</span>}
          <span>3 Room</span>
          <span>2 Bath</span>
          <span>60 m²</span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
