import React from "react";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/heroimage.jpg";
import SwiperImages from "../ReUsables/SwiperImages";
import styles from "../../styles/ProjectsPage/projectswiper.module.scss";

const ProjectSwiper = () => {
  const { t } = useTranslation();
  
  const projectsData = [
    {
      name: "Living room",
      image: IMAGE,
    },
    {
      name: "Living room",
      image: IMAGE,
    },
    {
      name: "Living room",
      image: IMAGE,
    },
    {
      name: "Living room",
      image: IMAGE,
    },
    {
      name: "Living room",
      image: IMAGE,
    },
  ];
  return (
    <div className={styles.ps__section}>
      <div className={`container ${styles.ps__container}`}>
        <SwiperImages projectsData={projectsData} />
      </div>
    </div>
  );
};

export default ProjectSwiper;
