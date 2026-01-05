import React from "react";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/projects.module.scss";

const Projects = () => {
  return (
    <div className={`section ${styles.project__section}`}>
      <div className={`container ${styles.project__container}`}>
        <div className={styles.pc__top>
          <HiglightedSpan text="Concept" />
          <h1 className={styles.cc__h1}>{t("HomePage:concept")}</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
