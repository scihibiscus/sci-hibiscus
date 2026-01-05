import React from 'react'
import SwiperImages from '../ReUsables/SwiperImages'
import styles from "../../styles/ProjectsPage/projectswiper.module.scss"

const ProjectSwiper = () => {
  const projectsData = [
    {
      name: "Bonapriso Kalapro Residence",
      image: IMAGE,
      
    },
    {
      name: "Bonapriso Kalapro Residence",
      image: IMAGE,
      
    },
    {
      name: "Bonapriso Kalapro Residence",
      image: IMAGE,
      
    },
    {
      name: "Bonapriso Kalapro Residence",
      image: IMAGE,
     
    },
    {
      name: "Bonapriso Kalapro Residence",
      image: IMAGE,
      href:
        currentLocale === "en"
          ? `/en/projects/current-projects/bonapriso-kalapro-residence`
          : `/fr/projets/projets-actuels/bonapriso-kalapro-residence`,
    },
  ];
  return (
    <div className={styles.ps__section}>
      <div className={`container ${styles.ps__container}`}>
        <SwiperImages />
      </div>
    </div>
  )
}

export default ProjectSwiper