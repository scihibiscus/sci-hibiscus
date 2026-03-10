import React from 'react'
import styles from "../../styles/RentBuyPage/propertycard.module.scss"

const PropertiesLoader = () => {
  return (
    <div className={styles.properties}>
      <Link
      className={styles.property__card}
      href={`/${currentLocale}/services/${data.slug.current}`}
    >
      <div className={styles.property__top}>
        <div className={styles.p__image}>
          <Image
            unoptimized
            fill
            quality={100}
            src={
              urlFor(data.mainimage).width(1920).url() ||
              urlFor(data.mainimage).url()
            }
            alt={data.mainimage.alt}
          />
        </div>
      </div>
      <div className={styles.property__bottom}>
        <span className={styles.p__name}>{data.name}</span>
        <div className={styles.price__location}>
          <div className={styles.price}>
            <span>{formatNumber(data.price)} FCFA</span>
            {data.transaction.slug.current === "rent" && data.rentpricing && (
              <span>
                {data.rentpricing === "perday"
                  ? t("ServicesPage:perday")
                  : data.rentpricing === "permonth"
                    ? t("ServicesPage:permonth")
                    : t("ServicesPage:peryear")}
              </span>
            )}
          </div>
          {"|"}
          <span className={styles.location}>
            {data.quarter}, {data.city.cityname}
          </span>
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
    </Link>
    </div>
  )
}

export default PropertiesLoader