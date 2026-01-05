import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/heroimage.jpg"
import styles from "../../styles/ReUsables/imagehero.module.scss"

const ImageHeroSection = () => {
  return (
    <div className={styles.ih__section}>
      <div className={styles.hero__image}>
        <div className={styles.h__image}>
          <Image fill quality={100} src={IMAGE} alt='Sci Hibiscus' placeholder='blur'/>
        </div>
        <div className={styles.hero__}>

        </div>
      </div>
    </div>
  )
}

export default ImageHeroSection