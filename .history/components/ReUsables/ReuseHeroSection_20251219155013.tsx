import React, { RefObject } from "react";
import Lenis from "lenis";
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
          <p className={styles.rcb__right}>{content.text2}</p>
        </div>
      </div>
    </div>
  );
};

export default ReuseHeroSection;
