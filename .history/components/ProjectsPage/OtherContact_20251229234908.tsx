import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "../../styles/ProjectsPage/procontact.module.scss"

const OtherContact = () => {
  const {t} = useTranslation();

  return (
    <div className={styles.oc__section}>
      <div className={`container ${styles.oc__container}`}>
        <h3>{t("ProjectsPage:contact")}</h3>
        <div className={styles.contact__bottom}>
          
        </div>
      </div>
    </div>
  )
}

export default OtherContact