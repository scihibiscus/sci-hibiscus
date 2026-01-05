import React from 'react'
import { useTranslation } from "react-i18next";
import Image from 'next/image'
import IMAGE from "../../public/images/heroimage.jpg"
import styles from "../../styles/ReUsables/interestsection.module.scss"

const ContactSales = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.cs__section}>
      <div className={`container ${styles.cs__container}`}>
        <div className={styles.cs__wrapper}>
          <div className={styles.cs__left}>
            <div className={styles.cs__image}>
              <Image fill quality={100} src={IMAGE} alt='Sci Hibiscus' placeholder='blur'/>
            </div>
          </div>
          <div className={styles.cs__right}>
            <div className={styles.csr__one}>
              <div className={styles.cso__top}>
                <h3>{}</h3>
              </div>
              <div className={styles.cso__bottom}>

              </div>
            </div>
            <div className={styles.csr__two}>

            </div>
            <div className={styles.csr__three}>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSales