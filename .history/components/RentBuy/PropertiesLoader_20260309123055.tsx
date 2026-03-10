import React from 'react'
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
          {data.propertytype && (
            <span>
              {currentLocale === "en"
                ? data.propertytype.nameen
                : data.propertytype.namefr}
            </span>
          )}
          {data.room && (
            <span>
              {data.room} {t("ServicesPage:room")}
            </span>
          )}
          {data.bath && (
            <span>
              {data.bath} {t("ServicesPage:bath")}
            </span>
          )}
          {data.parlour && (
            <span>
              {data.parlour} {t("ServicesPage:living")}
            </span>
          )}
          {data.area && <span>{data.area} m²</span>}
        </div>
      </div>
    </div>
    </div>
  )
}

export default PropertiesLoader