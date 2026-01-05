import React from "react";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/heroimage.jpg";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import ProjectBox from "../ReUsables/ProjectBox";
import styles from "../../styles/HomePage/projects.module.scss";

const Projects = () => {
  const { t } = useTranslation();

  const projectsContent = [
    {
      image: IMAGE,
      smallText: t("HomePage:current"),
      smallText: t("HomePage:current")
    }
  ]
  return (
    <div className={`section ${styles.project__section}`}>
      <div className={`container ${styles.project__container}`}>
        <div className={styles.pc__top}>
          <HiglightedSpan text={t("HomePage:project")}/>
          <h1 className={styles.pc__h1}>{t("HomePage:projectport")}</h1>
        </div>
        <div className={styles.pc__bottom}>
          <ProjectBox image={IMAGE} smallText=""/>
        </div>
      </div>
    </div>
  );
};

export default Projects;
