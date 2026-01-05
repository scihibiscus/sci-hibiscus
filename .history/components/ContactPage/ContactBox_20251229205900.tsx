import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "../../styles/ContactPage/contactsection.module.scss"

const ContactBox = () => {
  const {t} = useTranslation();

  return (
    <div className={styles.contactbox}>
      <div className={styles.cb__content}>
        <div className={styles.cb__top}>
          <h3>{t("ContactPage:message")}</h3>
          <h3>{t("ContactPage:message")}</h3>
        </div>
        <div className={styles.cb__bottom}>

        </div>
      </div>
    </div>
  )
}

export default ContactBox