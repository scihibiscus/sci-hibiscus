import React from 'react'
import HiglightedSpan from './HiglightedSpan'
import styles from "../../styles/ReUsables/reusehero.module.scss"

const ReuseHeroSection = () => {
  return (
    <div className={styles.reuse__section}>
      <div className={`container ${styles.reuse__container}`}>
        <div className={styles.rc__top}>
          <HiglightedSpan text='Projets actuels'/>
          <h3 className=>Biens immobiliers en vente</h3>
        </div>
        <div className={styles.rc__bottom}>

        </div>
      </div>
    </div>
  )
}

export default ReuseHeroSection