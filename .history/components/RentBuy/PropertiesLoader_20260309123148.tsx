import React from 'react'
import SkeletonLoader from '../ReUsables/SkeletonLoader'
import styles from "../../styles/RentBuyPage/propertycard.module.scss"

const PropertiesLoader = () => {
  return (
    <div className={styles.properties}>
      <div
      className={styles.property__card}
    >
      <div className={styles.property__top}>
        <div className={styles.p__image}>
          <SkeletonLoader width=""/>
        </div>
      </div>
      <div className={styles.property__bottom}>
        <span className={styles.p__name}></span>
        <div className={styles.price__location}>
        </div>
        <div className={styles.p__stats}>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PropertiesLoader