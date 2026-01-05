import React from "react";
import { useTranslation } from "react-i18next";
import Angle from "@/utils/Icons/Angle";
import styles from "../../styles/BlogPage/accordion.module.scss";

interface ContentInt {
  name: string;
  text: string;
  points: string[];
}

const Accordion = ({ content }: { content: ContentInt }) => {
  //Translations
  const { t, i18n } = useTranslation();

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
        <span className={styles.key}>{t("ServicesPage:keydev")}</span>
        <ul className={styles.ul}>
          {
            content.points.map((text, i) => (
              <li>{}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
