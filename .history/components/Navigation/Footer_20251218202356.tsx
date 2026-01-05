import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import LogoWordmark from "@/utils/Icons/LogoWordmark";
import styles from "../../styles/Navigation/footer.module.scss";

const Footer = () => {
  const { t } = useTranslation();
  const linksDataOne = [
    {
      name: t("Navigation:projects"),
      links: [
        {
          name: t("Navigation:sale"),
          link: "/",
        },
        {
          name: t("Navigation:planning"),
          link: "/",
        },
        {
          name: "References",
          link: "/",
        },
      ],
    },
    {
      name: t("Navigation:blog"),
      link: "/",
    },
    {
      name: t("Navigation:contact"),
      link: "/",
    },
  ];

  const linksDataTwo = [
    {
      name: t("Navigation:enterprise"),
      links: [
        {
          name: t("Navigation:about"),
          link: "/",
        },
        {
          name: "Services",
          link: "/",
        },
        {
          name: t("Navigation:buyland"),
          link: "/",
        },
      ],
    },
    {
      name: t("Navigation:career"),
      link: "/",
    },
    {
      name: t("Navigation:privacy"),
      link: "/",
    },
  ];

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
              <span className={styles.ft__location}>
                Hibiscus Center Park, Quartier Fouda
              </span>
            </div>
            <div className={styles.fml__bottom}>
              <Link
                href="mailto:sci_hibiscus@ymail.com"
                className={styles.fm__links}
              >
                sci_hibiscus@ymail.com
              </Link>
              <Link href="tel:222222437" className={styles.fm__links}>
                +237 2 22 22 24 37
              </Link>
            </div>
          </div>
          <div className={styles.fm__right}>
            <div className={styles.fmr__one}>
              {
                linksDataOne.map((data, i) => (
                  <div className={styles.fone}>
                    <span>{data.name}</span>
                    {
                      data.links.map(() => (
                        
                      ))
                    }
                  </div>
                ))
              }
            </div>
            <div className={styles.fmr__one}>

            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}></div>
      </div>
    </footer>
  );
};

export default Footer;
