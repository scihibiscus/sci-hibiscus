import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/image2.jpg";
import styles from "../../styles/RentBuyPage/propertycard.module.scss";

const PropertyCard = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className={styles.property__card}>
      <div className={styles.property__top}>
        <div className={styles.p__image}>
          <Image fill quality={100} src={IMAGE} alt="Property" />
        </div>
        <span className={styles.status}>{t("ServicesPage:rent")}</span>
      </div>
      <div className={styles.property__bottom}>
        <span className={styles.p__name}>Maison du Parc</span>
        <div className={styles.price__location}>
          <div className={styles.price}>

          </div>
          {""}
          <div className={}>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
