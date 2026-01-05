import React from "react";
import WordmarkLogo from "@/utils/Icons/WordmarkLogo";
import styles from "../../styles/Navigation/preloader.module.scss";

const Preloader = () => {
  return (
    <div className={styles.preloader__section}>
      <div className={styles.preloader__content}>
        <div className={styles.wmlogo}>
          <WordmarkLogo />
        </div>
        <div className={styles.loading}>
          <div className={styles.loader}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
