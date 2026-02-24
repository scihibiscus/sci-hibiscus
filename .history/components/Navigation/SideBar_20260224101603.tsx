import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { SideBarAnim } from "@/animation";
import { motion } from "framer-motion";
import Angle from "@/utils/Icons/Angle";
import styles from "../../styles/Navigation/sidebar.module.scss";

const SideBar = ({
  activeSideBar,
  setActiveSide,
}: {
  activeSideBar: boolean;
  setActiveSide: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const [activeService, setActiveService] = useState(false);

  const navLinks = [
    {
      name: t("Navigation:home"),
      link: currentLocale === "en" ? "/en" : "/fr",
    },
    {
      name: t("Navigation:about"),
      link: currentLocale === "en" ? "/en/about" : "/fr/a-propos",
    },
    {
      name: "Services",
      link: `/${currentLocale}/services`,
      moreData: [
        {
          name: t("Navigation:spaces"),
          link: currentLocale === "en" ? "/en/services/" : "/fr/services",
        },
        {
          name: t("Navigation:officerent"),
          link: currentLocale === "en" ? "/en/services/" : "/fr/services",
        },
        {
          name: t("Navigation:sellbuilding"),
          link: currentLocale === "en" ? "/en/services/" : "/fr/services",
        },
        {
          name: t("Navigation:sellland"),
          link: currentLocale === "en" ? "/en/services/" : "/fr/services",
        },
      ],
    },
    {
      name: t("Navigation:projects"),
      link: currentLocale === "en" ? "/en/projects" : "/fr/projets",
    },
    {
      name: t("Navigation:blog"),
      link: `/${currentLocale}/blog`,
    },
    {
      name: t("Navigation:career"),
      link: currentLocale === "en" ? "/en/career" : "/fr/emploi",
    },
  ];

  return (
    <motion.div
      className={styles.sidebar}
      variants={SideBarAnim}
      animate={activeSideBar ? "entry" : "initial"}
      exit="exit"
    >
      <div className={styles.line}></div>
      <div className={styles.sc__top}>
        <div className={styles.sct__wrapper}>
          <div className={`container ${styles.sidebar__container}`}>
            <nav className={styles.navc__left}>
              {navLinks.map((data, i) => (
                <li key={i} className={styles.lili}>
                  {data.moreData ? (
                    <div className={styles.ser__wrap}>
                      <div
                        className={styles.sw__top}
                        onClick={() => setActiveService(!activeService)}
                      >
                        <span className={styles.s__name}>{data.name}</span>
                        <span className={`${styles.s__icon} ${activeService ? styles.activeicon : ""}`}>
                          <Angle />
                        </span>
                      </div>
                      <div
                        className={`${styles.sw__bottom} ${
                          activeService ? styles.activeser : ""
                        }`}
                      >
                        <div className={styles.swb__inner}>
                          {data.moreData.map((service, i) => (
                            <div onClick={() => setActiveSide(false)} key={i}>
                              <Link
                                href={service.link}
                                className={styles.ser__links}
                              >
                                {service.name}
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div onClick={() => setActiveSide(false)}>
                      <Link href={data.link} className={styles.nav__links}>
                        {data.name}
                      </Link>
                    </div>
                  )}
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.sc__bottom}>
        <div className={`container ${styles.scb__container}`}>
          <div className={styles.cc__wrap}>
            <div className={styles.cc__main}>
              <span className={styles.cc__head}>Contact</span>
              <div className={styles.cc__content}>
                <Link
                  href="mailto:contact@hibiscus.cm"
                  className={styles.cc__links}
                >
                  contact@hibiscus.cm
                </Link>
                <Link href="tel:222222437" className={styles.cc__links}>
                  +237 2 22 22 24 37
                </Link>
              </div>
            </div>
            <div className={styles.cc__main}>
              <span className={styles.cc__head}>{t("Navigation:office")}</span>
              <div className={styles.cc__content}>
                <span className={styles.cc__linker}>
                  Hibiscus Center Park, Quartier Fouda
                </span>
              </div>
            </div>
          </div>
          <div className={styles.contact__button}>
            <Link href={`/${currentLocale}/contact`}>
              <span>{t("Navigation:getin")}</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SideBar;
