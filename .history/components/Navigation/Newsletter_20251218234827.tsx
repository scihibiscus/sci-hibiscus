import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Navigation/newsletter.module.scss";

const Newsletter = () => {
  const { t } = useTranslation();

  return (
    <form action="">
      <div className={styles.main__input}>
        <span className={styles.email}>Email</span>
        <input className={styles.input} type="email" name="Email" required placeholder="email@domain.com"/>
        <button type="submit">{t("Navigation:")}</button>
      </div>
    </form>
  );
};

export default Newsletter;
