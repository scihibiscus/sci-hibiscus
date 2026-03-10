import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from "../../styles/RentBuyPage/propertyhero.module.scss"

const NotFoundProp = () => {
  const {t, i18n} = useTranslation
  return (
    <div className={styles.not__found}>
      <h3 className={styles.nf__h3}>

      </h3>
    </div>
  )
}

export default NotFoundProp