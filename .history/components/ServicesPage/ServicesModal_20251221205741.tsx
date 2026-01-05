"use client";

import React, {useState} from "react";
import Accordion from "./Accordion";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/BlogPage/servicessection.module.scss";

interface ContentInterface {
  name: string;
  text: string;
  highlight: string;
  modals: {
    name: string;
    text: string;
    points: string[];
  }[];
}

const ServicesModal = ({ content }: { content: ContentInterface }) => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  
  return (
    <div className={styles.services__modal}>
      <div className={styles.sm__left}>
        <HiglightedSpan text={content.highlight} />
        <h1 className={styles.sm__h1}>{content.name}</h1>
        <p className={styles.sm__p}>{content.text}</p>
      </div>
      <div className={styles.sm__right}>
        {
          content.modals.map((data, i) => (
            <Accordion content={data} key={i}/>
          ))
        }
      </div>
    </div>
  );
};

export default ServicesModal;
