import React from "react";
import styles from "../../styles/BlogPage/accordion.module.scss"

interface ContentInt {
  name: string;
  text: string;
  points: string[];
}

const Accordion = ({ content }: { content: ContentInt }) => {
  return <div className={styles.acc__wrapper}>
    <div>
      
    </div>
  </div>;
};

export default Accordion;
