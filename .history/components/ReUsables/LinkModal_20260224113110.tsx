"use client";

import React, { useState, RefObject, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Lenis from "lenis";
import Plus from "@/utils/Icons/Plus";
import Grid from "@/utils/Icons/Contact";
import Briefcase from "@/utils/Icons/Briefcase";
import Map from "@/utils/Icons/Map";
import Link from "next/link";
import NewsLetter from "@/utils/Icons/NewsLetter";
import SellHome from "@/utils/Icons/SellHome";
import styles from "../../styles/ReUsables/linkmodal.module.scss";

const LinkModal = ({
  ref,
  lenis,
}: {
  ref: RefObject<HTMLDivElement | null>;
  lenis: Lenis | null;
}) => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const targetRef = useRef<HTMLDivElement>(null);

  const handleLenisScroll = () => {
    if (lenis && ref?.current) {
      const referenceTop =
        window.scrollY + ref?.current.getBoundingClientRect().top;
      lenis.scrollTo(referenceTop, { duration: 1.5 });
    }
    setActiveModal(false);
  };

  const [activeModal, setActiveModal] = useState(false);

  // Fermer le modal quand on clique en dehors
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!activeModal) return;
      const el = targetRef?.current;
      if (el && !el.contains(e.target as Node)) {
        setActiveModal(false);
      }
    };
    document.addEventListener("pointerdown", handleOutsideClick);
    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [activeModal, targetRef]);

  return (
    <div className={styles.linkmodal} ref={targetRef}>
      <div className={`container ${styles.lm__container}`}>
        <div className={styles.lm__wrapper}>
          <div className={styles.lm__modal}>
            <h3 className={styles.lm__h3}>{t("HomePage:modalquick")}</h3>
            <div className={styles.lmm__content}>
              {/* <Link href={`/${currentLocale}/contact`} className={styles.lmm}>
                <div>
                  <Contact />
                </div>
                <span>{t("HomePage:modalcontact")}</span>
              </Link> */}
              <Link
                href={currentLocale === "en" ? "/en/services" : "/fr/services"}
                className={styles.lmm}
              >
                <div>
                  <SellHome />
                </div>
                <span>{t("Navigation:spaces")}</span>
              </Link>
              <Link
                href={currentLocale === "en" ? "/en/services" : "/fr/services"}
                className={styles.lmm}
              >
                <div>
                  <SellHome />
                </div>
                <span>{t("Navigation:officerent")}</span>
              </Link>
              <Link
                href={currentLocale === "en" ? "/en/services" : "/fr/services"}
                className={styles.lmm}
              >
                <div>
                  <SellHome />
                </div>
                <span>{t("Navigation:sellbuilding")}</span>
              </Link>
              <Link
                href={currentLocale === "en" ? "/en/services" : "/fr/services"}
                className={styles.lmm}
              >
                <div>
                  <SellHome />
                </div>
                <span>{t("Navigation:sellland")}</span>
              </Link>
              <Link
                href={
                  currentLocale === "en"
                    ? "/en/offer-land"
                    : "/fr/offrir-terrain"
                }
                className={styles.lmm}
              >
                <div>
                  <SellHome />
                </div>
                <span>{t("HomePage:modaloffer")}</span>
              </Link>
              {/* <div className={styles.lmm} onClick={handleLenisScroll}>
                <div>
                  <NewsLetter />
                </div>
                <span>{t("HomePage:modalsub")}</span>
              </div> */}
            </div>
          </div>
          <div className={styles.lm__button}>
            <span className={styles.lm__icon}>
              <Plus />
            </span>
          </div>
        </div>
        <div
          className={`${styles.lm__wrappermobile} ${
            activeModal ? styles.activemodal : ""
          }`}
        >
          <div className={styles.lm__modal}>
            <h3 className={styles.lm__h3}>{t("HomePage:modalquick")}</h3>
            <div className={styles.lmm__content}>
              {/* <Link
                onClick={() => setActiveModal(false)}
                href={`/${currentLocale}/contact`}
                className={styles.lmm}
              >
                <div>
                  <Contact />
                </div>
                <span>{t("HomePage:modalcontact")}</span>
              </Link> */}
              <Link
                href={currentLocale === "en" ? "/en/services" : "/fr/services"}
                className={styles.lmm}
              >
                <div>
                  <SellHome />
                </div>
                <span>{t("Navigation:spaces")}</span>
              </Link>
              <Link
                href={currentLocale === "en" ? "/en/services" : "/fr/services"}
                className={styles.lmm}
              >
                <div>
                  <SellHome />
                </div>
                <span>{t("Navigation:officerent")}</span>
              </Link>
              <Link
                href={currentLocale === "en" ? "/en/services" : "/fr/services"}
                className={styles.lmm}
              >
                <div>
                  <SellHome />
                </div>
                <span>{t("Navigation:sellbuilding")}</span>
              </Link>
              <Link
                href={currentLocale === "en" ? "/en/services" : "/fr/services"}
                className={styles.lmm}
              >
                <div>
                  <SellHome />
                </div>
                <span>{t("Navigation:sellland")}</span>
              </Link>
              <Link
                onClick={() => setActiveModal(false)}
                href={
                  currentLocale === "en"
                    ? "/en/offer-land"
                    : "/fr/offrir-terrain"
                }
                className={styles.lmm}
              >
                <div>
                  <SellHome />
                </div>
                <span>{t("HomePage:modaloffer")}</span>
              </Link>
              {/* <div className={styles.lmm} onClick={handleLenisScroll}>
                <div>
                  <NewsLetter />
                </div>
                <span>{t("HomePage:modalsub")}</span>
              </div> */}
            </div>
          </div>
          <div
            className={styles.lm__button}
            onClick={() => setActiveModal(!activeModal)}
          >
            <span className={styles.lm__icon}>
              <Plus />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkModal;
