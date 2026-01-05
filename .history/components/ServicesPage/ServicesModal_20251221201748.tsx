import React from "react";
import Plus from "@/utils/Icons/Plus";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/BlogPage/servicessection.module.scss";

interface ContentInterface {
  name: string;
  text: string;
  modals: {
    name: string;
    text: string;
    points: string[];
  }[];
}

const ServicesModal = ({ content }: { content: ContentInterface }) => {
  return (
    <div className={styles.services__modal}>
      <div className={styles.sm__left}>
        <HiglightedSpan text="SERVICE 1" />
        <h1 className={styles.sm__}>{content.name}</h1>
        <p className={styles.sm__}>{content.text}</p>
      </div>
      <div className={styles.sm__right}></div>
    </div>
  );
};

export default ServicesModal;
