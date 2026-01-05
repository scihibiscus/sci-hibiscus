import React from 'react'
import useTrans
import HiglightedSpan from '../ReUsables/HiglightedSpan'
import styles from "../../styles/HomePage/ourconcept.module.scss"

const OurConcept = () => {
  return (
    <div className={`section ${styles.concept__section}`}>
      <div className={`container ${styles.concept__container}`}>
        <div className={styles.cc__left}>
          <HiglightedSpan text=''/>
        </div>
        <div className={styles.cc__right}>

        </div>
      </div>
    </div>
  )
}

export default OurConcept