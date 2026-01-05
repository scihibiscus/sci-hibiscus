import React from 'react'
import HiglightedSpan from '../ReUsables/HiglightedSpan'
import styles from "../../styles/BlogPage/servicessection.module.scss"

const ServicesSection = () => {
  const servicesContent = [
    {
      name: ""
    }
  ]
  return (
    <div className={styles.services__section}>
      <div className={`container ${styles.services__container}`}>
        <div className={styles.services__modal}>
          <div className={styles.sm__left}>

          </div>
          <div className={styles.sm__right}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSection