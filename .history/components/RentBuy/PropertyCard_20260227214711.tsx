import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/image10.jpg"
import styles from "../../styles/RentBuyPage/propertycard.module.scss";

const PropertyCard = () => {
  return (
    <div className={styles.property__card}>
      <div className={styles.property__top}>
        <div className={styles.p__image}>
          <Image fill quality={100} src={IMAGE} alt="Property"/>
        </div>
        div
      </div>
      <div className={styles.property__bottom}>

      </div>
    </div>
  );
};

export default PropertyCard;
