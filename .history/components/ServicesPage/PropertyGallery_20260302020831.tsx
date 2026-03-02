import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/image2.jpg"

const PropertyGallery = () => {
  return (
    <div className={`section ${styles.pa__section}`}>
      <div className={`container ${styles.pa__container2}`}>
        <HiglightedSpan text={t("ServicesPage:other")} />
        <div className={styles.details2}>
          {detailsData.map((data, i) => (
            <li className={styles.dw__right2} key={i}>
              {data}
            </li>
          ))}
        </div>
        <div className={styles.whatsapp}>
          <WhatsappButton
            property="Bureau du Park"
            backColor="white"
            textColor="var(--black)"
            border="1px solid rgba(0,0,0,0.15)"
            dropshadow="drop-shadow(0px 0px 5px rgba(0,0,0,0.15))"
          />
        </div>
      </div>
    </div>
  )
}

export default PropertyGallery