import React from "react";
import SkeletonLoader from "../ReUsables/SkeletonLoader";
import styles from "../../styles/RentBuyPage/propertycard.module.scss";

const PropertiesLoader = () => {
  return (
    <div className={styles.properties}>
      <div className={styles.property__card}>
        <div className={styles.property__top2}>
          <div className={styles.p__image}>
            <SkeletonLoader width="100%" height="100%" animation="wave"/>
          </div>
        </div>
        <div className={styles.property__bottom}>
          <span className={styles.p__name2}>
            <SkeletonLoader width="100%" height="100%" />
          </span>
          <div className={styles.price__location}>
            <SkeletonLoader width="100%" height="100%" />
          </div>
          <div className={styles.p__stats}>
            <SkeletonLoader width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesLoader;
