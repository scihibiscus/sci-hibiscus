import React from 'react'
import SwiperImages from '../ReUsables/SwiperImages'
import styles from "../../styles/ProjectsPage/projectswiper.module.scss"

const ProjectSwiper = () => {
  return (
    <div className={styles.ps__section}>
      <div className={`container ${styles.ps__container}`}>
        <SwiperImages
      </div>
    </div>
  )
}

export default ProjectSwiper