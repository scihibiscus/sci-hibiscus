import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import LogoWordmark from "@/utils/Icons/LogoWordmark";
import styles from "../../styles/Navigation/footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer__section}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__top}>
          <h3 className={styles.footer__slogan}>{t("HomePage:slogan")}</h3>
          <div className={styles.footer__logo}>
            <LogoWordmark />
          </div>
        </div>
        <div className={styles.footer__mid}>
          <div className={styles.fm__left}>
            <div className={styles.fml__top}>
              <span className={styles.ft__name}>SCI HIBISCUS</span>
              <span className={styles.ft__location}>Hibiscus Center Park, Quartier Fouda</span>
            </div>
            <div className={styles.fml__bottom}>
              <Link href="mailto:sci_hibiscus@ymail.com">sci_hibiscus@ymail.com</Link>
              <Link href="tel:222222437">+237 2 22 22 24 37</Link>
            </div>
          </div>
          <div className={styles.fm__right}>

          </div>
        </div>
        <div className={styles.footer__bottom}>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
