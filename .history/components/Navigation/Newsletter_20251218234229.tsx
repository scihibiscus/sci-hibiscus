import React from "react";
import styles from "../../styles/Navigation/newsletter.module.scss";

const Newsletter = () => {
  return (
    <form action="">
      <div className={styles.main__input}>
        <span className={styles.email}>Email</span>
        <input type="text" />
      </div>
    </form>
  );
};

export default Newsletter;
