import React, { RefObject } from "react";
import Lenis from "lenis";
import { useTranslation } from "react-i18next";
import Arrow from "@/utils/Icons/Arrow";
import HiglightedSpan from "./HiglightedSpan";
import styles from "../../styles/ReUsables/reusehero.module.scss";

interface HeroProps {
  text: string;
  heading: string;
  heading2: string;
  text2: string;
}

const ReuseHeroSection = ({
  content,
  ref,
  lenis,
}: {
  content: HeroProps;
  ref?: RefObject<HTMLDivElement | null>;
  lenis?: Lenis | null;
}) => {
  //Translations
  const { t, i18n } = useTranslation();

  const handleLenisScroll = () => {
    if (lenis && ref?.current) {
      const referenceTop =
        window.scrollY + ref?.current.getBoundingClientRect().top;
      lenis.scrollTo(referenceTop, { duration: 3 });
    }
  };

  return (
    <div className={styles.reuse__section}>
      <div className={`container ${styles.reuse__container}`}>
        <div className={styles.rc__top}>
          <HiglightedSpan text={content.text} />
          <h3 className={styles.rc__h3}>{content.heading}</h3>
        </div>
        <div className={styles.rc__bottom}>
          <div className={styles.rcb__left}>
            <p>{content.heading2}</p>
          </div>
          <div className={styles.rcb__right}>
            <p>{content.text2}</p>
            {ref && lenis && (
              <div className={styles.button} onClick={}>
                <span>{t("BuylandPage:getintouch")}</span>
                <div className={styles.bicon}>
                  <div className={styles.bicon__wrapper}>
                    <div className={styles.icons}>
                      <Arrow />
                    </div>
                    <div className={styles.icons}>
                      <Arrow />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReuseHeroSection;
