import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "../../styles/ProjectsPage/procontact.module.scss"

const OtherContact = () => {
  const {t} = useTranslation();

  return (
    <div className={styles.oc__section}>
      <div className={`container ${styles.oc__container}`}>
        <h3>{}</h3>
      </div>
    </div>
  )
}

export default OtherContact