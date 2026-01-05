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
        
      </div>
      <div className={styles.acc__body}></div>
    </div>
  );
};

export default Accordion;
