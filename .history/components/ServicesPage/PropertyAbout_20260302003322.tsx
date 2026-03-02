import React from 'react'
import HiglightedSpan from '../ReUsables/HiglightedSpan'
import styles from "../../styles/RentBuyPage/propabout.module.scss"

const PropertyAbout = () => {
  return (
    <div className={`section ${styles.pa__section}`}>
      <div className={`container ${styles.pa__container}`}>
        <HiglightedSpan/>
      </div>
    </div>
  )
}

export default PropertyAbout