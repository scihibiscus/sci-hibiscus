import React from "react";
import { useTranslation } from "react-i18next";
import LogoWordmark from "@/utils/Icons/LogoWordmark";
import styles from "../../styles/Navigation/footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer__section}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__top}>
          <h3>{t("HomePage:slogan")}</h3>
          <div className={styles.footer__logo}>
            <LogoWordmark />
          </div>
        </div>
        <div className={styles.footer__mid}></div>
        <div className={styles.footer__bottom}></div>
      </div>
    </footer>
  );
};

export default Footer;
