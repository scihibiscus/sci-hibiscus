import React from "react";
import Button from "../ReUsables/Button";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/blogsection.module.scss";

const BlogSection = () => {
  return (
    <div className={`section ${styles.bs__section}`}>
      <div className={`container ${styles.bs__container}`}>
        <div className={styles.bs__top}>
          <div className={styles.pc__top}>
            <HiglightedSpan text={t("HomePage:project")} />
            <h1 className={styles.pc__h1}>{t("HomePage:projectport")}</h1>
          </div>
        </div>
        <div className={styles.bs__bottom}></div>
      </div>
    </div>
  );
};

export default BlogSection;
