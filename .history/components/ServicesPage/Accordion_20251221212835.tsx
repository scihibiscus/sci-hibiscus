import React from "react";
import { useTranslation } from "react-i18next";
import Angle from "@/utils/Icons/Angle";
import Lenis from "lenis";
import styles from "../../styles/BlogPage/accordion.module.scss";

interface ContentInt {
  name: string;
  text: string;
  points: string[];
}

const Accordion = ({
  lenis
  content,
  index,
  activeAccordion,
  setActiveAccordion,
}: {
  lenis: Lenis | null;
  content: ContentInt;
  activeAccordion: number;
  setActiveAccordion: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}) => {
  //Translations
  const { t } = useTranslation();

  //Accordion Scroll
  const accordionRef = useRef<HTMLDivElement>(null);

  const handleLenisScroll = () => {
    setActiveAccordion(index);

    if (lenis && accordionRef.current) {
      setTimeout(() => {
        const referenceTop = accordionRef.current
          ? window.scrollY +
            accordionRef.current.getBoundingClientRect().top -
            100
          : 0;
        lenis.scrollTo(referenceTop);
      }, 800); // Delay of 1 second
    }
  };

  return (
    <div
      className={styles.acc__wrapper}
      onClick={() => setActiveAccordion(index)}
    >
      <div className={styles.acc__head}>
        <p className={styles.acc__p}>{content.name}</p>
        <div className={`${styles.acc__left} ${
          activeAccordion === index ? styles.active__icon : ""
        }`}>
          <Angle />
        </div>
      </div>
      <div
        className={`${styles.acc__body} ${
          activeAccordion === index ? styles.active__acc : ""
        }`}
      >
        <p className={styles.acc__p2}>{content.text}</p>
        <span className={styles.key}>{t("ServicesPage:keydev")}</span>
        <ul className={styles.ul}>
          {content.points.map((text, i) => (
            <li key={i}>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
