import React from "react";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/testimonial.module.scss";

const Testimonial = () => {
  return (
    <div className={`section ${styles.testi__section}`}>
      <div className={`container ${styles.testi__container}`}>
        <div className={styles.testi__top}>
          <HiglightedSpan text={t("HomePage:blog")} />
          <h1 className={styles.bs__h1}>{t("HomePage:blogtext")}</h1>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
