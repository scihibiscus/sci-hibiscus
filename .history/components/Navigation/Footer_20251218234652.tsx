"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BetterMarque from "./BetterMarque";
import Link from "next/link";
import LogoWordmark from "@/utils/Icons/LogoWordmark";
import NewsLetter from "@/utils/Icons/NewsLetter";
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
      name: "Contact",
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

  const footerData = [
    {
      textHead: "Sci Hibiscus",
      text: t("Navigation:allrights"),
    },
    {
      textHead: t("Navigation:since"),
      text: t("Navigation:date"),
    },
  ];

  //BetterMarque
  const [activeBetter, setActiveBetter] = useState(false);
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
                Hibiscus Center Park, <br /> Quartier Fouda
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
              {linksDataOne.map((data, i) =>
                data.links ? (
                  <div className={styles.fone} key={i}>
                    <span className={styles.text__large}>{data.name}</span>
                    <div className={styles.tl__bottom}>
                      {data.links.map((link, i) => (
                        <Link key={i} href={link.link}>
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={data.link}
                    key={i}
                    className={`${styles.text__large} ${styles.textl__link}`}
                  >
                    {data.name}
                  </Link>
                )
              )}
            </div>
            <div className={styles.fmr__one}>
              {linksDataTwo.map((data, i) =>
                data.links ? (
                  <div className={styles.fone} key={i}>
                    <span className={styles.text__large}>{data.name}</span>
                    <div className={styles.tl__bottom}>
                      {data.links.map((link, i) => (
                        <Link key={i} href={link.link}>
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={data.link}
                    key={i}
                    className={`${styles.text__large} ${styles.textl__link}`}
                  >
                    {data.name}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <div className={styles.newsletter}>
            <span className={styles.news__span}>Newsletter</span>
            <p>{t("Navigation:newsletter")}</p>
            <div className={styles.newsletter__form}>
              
            </div>
          </div>
          <div className={styles.fb__right}>
            <div className={styles.fbl__left}>
              {footerData.map((data, i) => (
                <div className={styles.fll__content} key={i}>
                  <span className={styles.fb__span}>{data.textHead}</span>
                  <p>{data.text}</p>
                </div>
              ))}
            </div>
            <div className={styles.fbl__right}>
              <span className={styles.fb__span}>
                {t("Navigation:websiteby")}
              </span>
              <span
                className={styles.bettermarque}
                onClick={() => setActiveBetter(!activeBetter)}
              >
                Better Marque
              </span>
            </div>
            <BetterMarque
              activeBetter={activeBetter}
              setActiveBetter={setActiveBetter}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
