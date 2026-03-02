import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/image11.jpg";
import styles from "../../styles/RentBuyPage/propertyhero.module.scss";

const PropertyHero = () => {
  return (
    <div className={styles.ph__section}>
      <div className={styles.hero__image}>
        <motion.div className={styles.h__image} style={{ y }}>
          <Image
            fill
            quality={100}
            src={image}
            alt="Sci Hibiscus"
            placeholder="blur"
          />
        </motion.div>
        <div className={styles.hero__gradient}></div>
      </div>
    </div>
  );
};

export default PropertyHero;
