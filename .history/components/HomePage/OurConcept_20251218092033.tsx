import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../ReUsables/Button'
import HiglightedSpan from '../ReUsables/HiglightedSpan'
import styles from "../../styles/HomePage/ourconcept.module.scss"

const OurConcept = () => {
  const { t } = useTranslation();

  return (
    <div className={`section ${styles.concept__section}`}>
      <div className={`container ${styles.concept__container}`}>
        <div className={styles.cc__left}>
          <HiglightedSpan text="Concept"/>
          <h3 className={styles.cc__h3}>{t("HomePage:concept")}</h3>
        </div>
        <div className={styles.cc__right}>
          <p>{t("HomePage:concepttext")}</p>

        </div>
      </div>
    </div>
  )
}

export default OurConcept