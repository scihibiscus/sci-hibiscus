import React from 'react'
import IMAGE from "../../public/images/heroimage.jpg"
import Image from 'next/image'
import Button from './Button'
import styles from "../../styles/ReUsables/projectbox.module.scss"

const ProjectBox = () => {
  return (
    <div className={styles.project__box}>
      <div className={styles.pb__image}>
        <div className={styles.pv}>

        </div>
      </div>
    </div>
  )
}

export default ProjectBox