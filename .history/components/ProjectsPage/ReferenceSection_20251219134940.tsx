import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/heroimage.jpg"
import styles from "../../styles/ProjectsPage/refsection.module.scss"

const ReferenceSection = () => {
  const refContent = [
    {
      image: IMAGE,
      name: "Concept Bonapriso",
      content: [
        
      ]
    }
  ]
  return (
    <div className={styles.ref__section}>
      <div className={`container ${styles.ref__container}`}>
        <div className={styles.ref__box}>
          <div className={styles.rb__left}>
          <h3 className={styles.rbl__name}>Concept Bonapriso</h3>
          <div className={styles.rbl__info}>
            {

            }
          </div>
          </div>
          <div className={styles.rb__right}>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferenceSection