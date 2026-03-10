import React from 'react'
import skele
import styles from "../../styles/RentBuyPage/propertycard.module.scss"

const PropertiesLoader = () => {
  return (
    <div className={styles.properties}>
      <div
      className={styles.property__card}
    >
      <div className={styles.property__top}>
        <div className={styles.p__image}>
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