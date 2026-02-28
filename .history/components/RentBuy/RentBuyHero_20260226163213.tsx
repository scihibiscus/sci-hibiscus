import React from "react";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/ReUsables/re";

interface HeroProps {
  text: string;
  heading: string;
}

const RentBuyHero = ({ content }: { content: HeroProps }) => {
  return (
    <div className={styles.rb__hero}>
      <div className={`container ${styles.rb__container}`}>
        <div className={styles.rc__top}>
          <HiglightedSpan text={content.text} />
          <h3 className={styles.rc__h3}>{content.heading}</h3>
        </div>
      </div>
    </div>
  );
};

export default RentBuyHero;
