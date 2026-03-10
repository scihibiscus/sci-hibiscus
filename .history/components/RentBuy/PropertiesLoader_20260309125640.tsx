import React from "react";
import SkeletonLoader from "../ReUsables/SkeletonLoader";
import styles from "../../styles/RentBuyPage/propertycard.module.scss";

const PropertiesLoader = () => {
  const array = new Array(6);
  return (
<>

</>
      {array.map((_, i) => (
        <div className={styles.property__card} key={i}>
          <div className={styles.property__top2}>
            <div className={styles.p__image}>
              <SkeletonLoader width="100%" height="100%" animation="wave" />
            </div>
          </div>
          <div className={styles.property__bottom}>
            <span className={styles.p__name2}>
              <SkeletonLoader width="100%" height="40px" />
            </span>
            <div className={styles.price__location2}>
              <SkeletonLoader width="100%" height="25px" />
            </div>
            <div className={styles.p__stats2}>
              <SkeletonLoader width="100%" height="30px" />
            </div>
          </div>
        </div>
      ))}

  );
};

export default PropertiesLoader;
