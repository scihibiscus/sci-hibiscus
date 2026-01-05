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
  const currentlocale = i18n.language;

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
      link: "/",
    },
    {
      name: t("Navigation:about"),
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
      <header className={styles.navigation} style={barStyle}>
        <div className={`container ${styles.nav__container}`}>
          <div className={styles.wordmark}>
            <WordmarkLogo />
          </div>
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
                backColor="white"
                hoverColor="var(--gold)"
                textColor="var(--black)"
                thColor="white"
              />
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
