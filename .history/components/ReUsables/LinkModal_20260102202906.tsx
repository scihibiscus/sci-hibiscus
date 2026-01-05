"use client";

import React, { useState, RefObject } from "react";
import { useTranslation } from "react-i18next";
import Lenis from "lenis";
import Plus from "@/utils/Icons/Plus";
import Contact from "@/utils/Icons/Contact";
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

  const handleLenisScroll = () => {
    if (lenis && ref?.current) {
      const referenceTop =
        window.scrollY + ref?.current.getBoundingClientRect().top;
      lenis.scrollTo(referenceTop, { duration: 1.5 });
    }
  };

  const [activeStyle, setActiveModal] = useState

  return (
    <div className={styles.linkmodal}>
      <div className={`container ${styles.lm__container}`}>
        <div className={styles.lm__wrapper}>
          <div className={styles.lm__modal}>
            <h3 className={styles.lm__h3}>{t("HomePage:modalquick")}</h3>
            <div className={styles.lmm__content}>
              <Link href={`/${currentLocale}/contact`} className={styles.lmm}>
                <div>
                  <Contact />
                </div>
                <span>{t("HomePage:modalcontact")}</span>
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
              <div className={styles.lmm} onClick={handleLenisScroll}>
                <div>
                  <NewsLetter />
                </div>
                <span>{t("HomePage:modalsub")}</span>
              </div>
            </div>
          </div>
          <div className={styles.lm__button}>
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
