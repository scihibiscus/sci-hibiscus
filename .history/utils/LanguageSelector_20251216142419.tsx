import React from 'react'
import styles from "../styles/Navigation/languageselector.module.scss"

const LanguageSelector = ({  backColor,
  hoverColor,}) => {
  return (
    <div className={styles.languageselector}>
      <span className={styles.language}>
        EN
      </span>
    </div>
  )
}

export default LanguageSelector