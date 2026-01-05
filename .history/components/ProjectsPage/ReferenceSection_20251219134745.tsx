import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/heroimage.jpg"
import styles from "../../styles/ProjectsPage/refsection.module.scss"

const ReferenceSection = () => {
  return (
    <div className={styles.ref__section}>
      <div className={`container ${styles.ref__container}`}>
        <div className={styles.ref__box}>
          <div className={styles.rb__left}>
          
          </div>
          <div className={styles.rb__right}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferenceSection