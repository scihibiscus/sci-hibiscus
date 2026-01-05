import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import WordmarkLogo from "@/utils/Icons/WordmarkLogo";
import LanguageSelector from "@/utils/LanguageSelector";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import SideBar from "./SideBar";
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

  const [activeSideBar, setActiveSideBar] = useState(false);

  const activeSideColors = {
    backColor: "white",
    hoverColor: "var(--gold)",
    textColor: "var(--black)",
    thColor: "white",
    linkColor: "white",
    lhColor: "rgba(255,255,255,0.5)",
    logoColor: "white",
  };

  const barStyle = {
    "--background": activeSideBar ? activeSideColors.backColor : backColor,
    "--backhover": activeSideBar ? activeSideColors.hoverColor : hoverColor,
    "--color": activeSideBar ? activeSideColors.textColor : textColor,
    "--colorhover": activeSideBar ? activeSideColors.thColor : thColor,
    "--linkcolor": activeSideBar ? activeSideColors.linkColor : linkColor,
    "--linkhover": activeSideBar ? activeSideColors.lhColor : lhColor,
    "--logocolor": activeSideBar ? activeSideColors.logoColor : logoColor,
  } as React.CSSProperties;

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

  const Navbar = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navigation = Navbar.current;
    if (navigation) {
      // Initially set navigation to visible with a transparent background.
      gsap.set(navigation, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 102%, 0% 102%)",
        background: "transparent",
      });

      let lastScroll = 0;

      ScrollTrigger.create({
        start: "top+=600 top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          // If scrolled less than 700, force nav to be visible and transparent.
          if (self.scroll() < 600) {
            gsap.to(navigation, {
              clipPath: "polygon(0% 0%, 100% 0%, 100% 102%, 0% 100%)",
              background: "transparent",
              duration: 0.5,
            });
          } else {
            // Once past 700, always force the gradient background immediately.
            gsap.set(navigation, {
              background:
                "linear-gradient(180deg, rgba(15, 15, 15, 0.9) 0%, rgba(15, 15, 15, 0) 100%)",
            });
            // Then animate the translateY based on scroll direction.
            if (self.direction === 1 && self.scroll() > lastScroll) {
              // Scrolling down: hide nav.
              gsap.to(navigation, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                duration: 0.5,
              });
            } else if (self.direction === -1 && self.scroll() < lastScroll) {
              // Scrolling up: show nav.
              gsap.to(navigation, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 102%, 0% 100%)",
                duration: 0.5,
              });
            }
          }
          lastScroll = self.scroll();
        },
      });
    }
  }, []);
  return (
    <>
      <header className={styles.navigation} style={barStyle} ref={Navbar}>
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
                backColor={
                  activeSideBar ? activeSideColors.backColor : backColor
                }
                hoverColor={
                  activeSideBar ? activeSideColors.hoverColor : hoverColor
                }
                textColor={
                  activeSideBar ? activeSideColors.textColor : textColor
                }
                thColor={activeSideBar ? activeSideColors.thColor : thColor}
              />
              <Link
                href={`/${currentLocale}/contact`}
                className={styles.contactlink}
              >
                <span>Contact</span>
              </Link>
              <div
                className={styles.menu__open}
                onClick={() => setActiveSideBar(!activeSideBar)}
              >
                <span className={styles.men}>
                  {activeSideBar ? t("Navigation:close") : "Menu"}
                </span>
                <div
                  className={`${styles.menu__lines} ${
                    activeSideBar ? styles.active__side : ""
                  }`}
                >
                  <span className={styles.left}></span>
                  <span className={styles.right}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence mode="wait">
        {activeSideBar && (
          <SideBar
            activeSideBar={activeSideBar}
            setActiveSide={setActiveSideBar}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
