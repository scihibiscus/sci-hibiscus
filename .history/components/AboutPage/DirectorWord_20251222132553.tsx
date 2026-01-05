import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/"
import styles from "../../styles/AboutPage/directorword.module.scss"

const DirectorWord = () => {
  return (
    <div className={styles.director__word}>
      <div className={styles.dw__wrapper}>
        <div className={styles.dw__image}>
          <div className={styles.dwimg}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DirectorWord