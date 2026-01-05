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
        <HiglightedSpan te/>
      </div>
      <div className={styles.sm__right}></div>
    </div>
  );
};

export default ServicesModal;
