import React from 'react'
import Image from 'next/image'
import HEROIMAGE from "../../public/images/heroimage.jpg"
import styles from "../../styles/HomePage/herosection.module.scss"

const HeroSection = () => {
  return (
    <div className={styles.herosection}>
      <div className={styles.imagewrapper}>
        <div className={styles.hero__image}>
          <Image fill />
        </div>
        <div className={styles.hero__gradient}>

        </div>
      </div>
      <div className={`container ${styles.hero__container}`}>

      </div>
    </div>
  )
}

export default HeroSection