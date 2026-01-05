import React from "react";
import WordmarkLogo from "@/utils/Icons/WordmarkLogo";
import LanguageSelector from "@/utils/LanguageSelector";
import Link from "next/link";
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = ({  backColor,
  hoverColor,
  textColor,
  thColor,
  iconColor,
  ihColor} : {backColor: string;
    hoverColor: string;
    textColor: string;
    thColor: string;
    iconColor: string;
    ihColor: string;}) => {
  const navLinks = [
    {
      name: "Projets",
      link: "/",
    },
    {
      name: "À Propos",
      link: "/",
    },
    {
      name: "Actualités",
      link: "/",
    },
    {
      name: "Emploi",
      link: "/",
    },
    {
      name: "Services",
      link: "/",
    },
  ];
  return (
    <>
      <header className={styles.navigation}>
        <div className={`container ${styles.nav__container}`}>
          <div className={styles.wordmark}>
            <WordmarkLogo />
          </div>
          <div className={styles.navcontent}>
            <nav className={styles.navc__left}>
              {navLinks.map((data, i) => (
                <li key={i}>
                  <Link href={data.link}>{data.name}</Link>
                </li>
              ))}
            </nav>
            <div className={styles.navc__right}>
              <LanguageSelector/>
              <Link href="/" className={styles.contactlink}>
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
