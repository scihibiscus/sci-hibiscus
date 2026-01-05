import React from 'react'
import HiglightedSpan from '../ReUsables/HiglightedSpan'
import styles from "../../styles/AboutPage/culture.module.scss"

const Culture = () => {
  return (
    <div className={`section ${styles.culture__section}`}>
      <div className={`container ${styles.c__container}`}>
        <div className={styles.cc__top}>
          <HiglightedSpan text=''/>
        </div>
        <div className={styles.cc__bottom}>

        </div>
      </div>
    </div>
  )
}

export default Culture