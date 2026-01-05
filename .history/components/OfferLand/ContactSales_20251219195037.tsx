import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/heroimage.jpg"
import styles from "../../styles/ReUsables/interestsection.module.scss"

const ContactSales = () => {
  return (
    <div className={styles.cs__section}>
      <div className={`container ${styles.cs__container}`}>
        <div className={styles.cs__wrapper}>
          <div className={styles.cs__left}>
            <div className={styles.cs__image}>
              <Image fill quality={100} src={IMAGE} alt='Sci Hibiscus'/>
            </div>
          </div>
          <div className={styles.cs__right}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSales