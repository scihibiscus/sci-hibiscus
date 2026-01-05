import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "../../styles/Navigation/sidebar.module.scss";

const SideBar = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const navLinks = [
    {
      name: t("Navigation:projects"),
      link: currentLocale === "en" ? "/en/projects" : "/fr/projets",
    },
    {
      name: t("Navigation:about"),
      link: currentLocale === "en" ? "/en/about" : "/fr/a-propos",
    },
    {
      name: t("Navigation:blog"),
      link: `/${currentLocale}/blog`,
    },
    {
      name: t("Navigation:career"),
      link: currentLocale === "en" ? "/en/career" : "/fr/emploi",
    },
    {
      name: "Services",
      link: `/${currentLocale}/services`,
    },
  ];
  return (
    <div className={styles.sidebar}>
      <div className={styles.line}></div>
      <div className={`container ${styles.sidebar__container}`}>
        <nav className={styles.navc__left}>
          {navLinks.map((data, i) => (
            <li key={i} className={styles.lili}>
              <Link href={data.link} className={styles.nav__links}>
                {data.name}
              </Link>
            </li>
          ))}
          <div className={styles.cc__wrap}>
            <div className={styles.cc__main}>
              <span className={styles.cc__head}>Contact</span>
              <div className={styles.cc__content}>
                <Link>+237 </Link>
              </div>
            </div>
          </div>
        </nav>
        <div className={styles.contact__button}>
          <Link href={`/${currentLocale}/contact`}>
            <span>{t("Navigation:getin")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
