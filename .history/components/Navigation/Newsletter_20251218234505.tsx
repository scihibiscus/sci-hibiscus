import React from "react";
import styles from "../../styles/Navigation/newsletter.module.scss";

const Newsletter = () => {
  return (
    <form action="">
      <div className={styles.main__input}>
        <span className={styles.email}>Email</span>
        <input className={styles.input} type="email" name="Email" readOnly/>
      </div>
    </form>
  );
};

export default Newsletter;
