import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import IMAGE from "../../public/images/image2.jpg";
import styles from "../../styles/RentBuyPage/propertycard.module.scss";

interface Property

const PropertyCard = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <Link className={styles.property__card} href="/">
      <div className={styles.property__top}>
        <div className={styles.p__image}>
          <Image fill quality={100} src={IMAGE} alt="Property" />
        </div>
      </div>
      <div className={styles.property__bottom}>
        <span className={styles.p__name}>Bureau du Parc</span>
        <div className={styles.price__location}>
          <div className={styles.price}>
            <span>50,000 FCFA</span>
            <span>/ jour</span>
          </div>
          {"|"}
          <span className={styles.location}>Bastos, Yaounde</span>
        </div>
        <div className={styles.p__stats}>
          <span>Office</span>
          <span>3 Room</span>
          <span>2 Bath</span>
          <span>60 m²</span>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
