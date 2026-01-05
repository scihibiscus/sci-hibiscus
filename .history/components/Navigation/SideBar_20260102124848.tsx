import React from "react";
import styles from "../../styles/Navigation/sidebar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.line}></div>
      <div className={`container ${styles.sidebar__container}`}>
        <div className={styles.side__wrapper}></div>
      </div>
    </div>
  );
};

export default SideBar;
