import React from "react";
import Angle from "@/utils/Icons/Angle";
import styles from "../../styles/BlogPage/accordion.module.scss";

interface ContentInt {
  name: string;
  text: string;
  points: string[];
}

const Accordion = ({ content }: { content: ContentInt }) => {
  return (
    <div className={styles.acc__wrapper}>
      <div className={styles.acc__head}>
        <p className={styles.acc__p}>{content.name}</p>
        <div className={styles.acc__left}>
          <Angle />
        </div>
      </div>
      <div className={styles.acc__body}>
        <p className={styles.acc__p2}>{content.text}</p>
        <span className={styles.key}></span>
      </div>
    </div>
  );
};

export default Accordion;
