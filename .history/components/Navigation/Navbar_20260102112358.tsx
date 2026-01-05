import React from "react";
import { useTranslation } from "react-i18next";
import WordmarkLogo from "@/utils/Icons/WordmarkLogo";
import LanguageSelector from "@/utils/LanguageSelector";
import Link from "next/link";
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = ({
  backColor,
  hoverColor,
  textColor,
  thColor,
  linkColor,
  lhColor,
  logoColor,
  setLocalState,
}: {
  backColor: string;
  hoverColor: string;
  textColor: string;
  thColor: string;
  linkColor: string;
  lhColor: string;
  logoColor: string;
  setLocalState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const barStyle = {
    "--background": backColor,
    "--backhover": hoverColor,
    "--color": textColor,
    "--colorhover": thColor,
    "--linkcolor": linkColor,
    "--linkhover": lhColor,
    "--logocolor": logoColor,
  } as React.CSSProperties;

  const navLinks = [
    {
      name: t("Navigation:projects"),
      link: currentLocale==="en" ? "/en/projects" : "/fr/projets",
    },
    {
      name: t("Navigation:about"),
      link: currentLocale==="en" ? "/en/about" : "/fr/a-propos",
    },
    {
      name: t("Navigation:blog"),
      link: `/${currentLocale}/blog`,
    },
    {
      name: t("Navigation:career"),
      link:  currentLocale==="en" ? "/en/career" : "/fr/emploi"
    },
    {
      name: "Services",
      link: `/${currentLocale}/services`,
    },
  ];
  return (
    <>
      <header className={styles.navigation} style={barStyle}>
        <div className={`container ${styles.nav__container}`}>
          <Link href="/" className={styles.wordmark}>
            <WordmarkLogo />
          </Link>
          <div className={styles.navcontent}>
            <nav className={styles.navc__left}>
              {navLinks.map((data, i) => (
                <li key={i}>
                  <Link href={data.link} className={styles.nav__links}>
                    {data.name}
                  </Link>
                </li>
              ))}
            </nav>
            <div className={styles.navc__right}>
              <LanguageSelector
                setLocalState={setLocalState}
                backColor={backColor}
                hoverColor={hoverColor}
                textColor={textColor}
                thColor={thColor}
              />
              <Link href={`/${currentLocale}/contact`} className={styles.contactlink}>
                <span>Contact</span>
              </Link>
              <div className={styles.menu__open}>
                <span>Menu</span>
                <div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
