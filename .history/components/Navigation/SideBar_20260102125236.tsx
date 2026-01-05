import React from "react";
import styles from "../../styles/Navigation/sidebar.module.scss";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.line}></div>
      <div className={`container ${styles.sidebar__container}`}>
        <nav className={styles.side__wrapper}>

        </nav>
      </div>
    </div>
  );
};

export default SideBar;
