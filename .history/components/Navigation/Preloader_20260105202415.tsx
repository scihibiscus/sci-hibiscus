import React, { useState, useEffect, useRef } from "react";
import WordmarkLogo from "@/utils/Icons/WordmarkLogo";
import styles from "../../styles/Navigation/preloader.module.scss";

const Preloader = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const currentValueRef = useRef(currentValue);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const hasResumed = useRef(false); // Prevent multiple resumes

  const [animFinished, setAnimFinished] = useState(false);

  useEffect(() => {
    currentValueRef.current = currentValue;
  }, [currentValue]);

  useEffect(() => {
    const updateCounter = () => {
      if (currentValueRef.current < 100) {
        const increment = Math.floor(Math.random() * 10) + 1;
        const newValue = Math.min(currentValueRef.current + increment, 100);
        setCurrentValue(newValue);

        const delay = Math.floor(Math.random() * 50) + 70;
        setTimeout(updateCounter, delay);
      }
    };

    const startWhenReady = () => {
      if (document.readyState === "complete") {
        setTimeout(updateCounter, 2000);
      } else {
        window.addEventListener("load", () => {
          setTimeout(updateCounter, 2000);
        });
      }
    };

    startWhenReady();

    return () => {
      window.removeEventListener("load", startWhenReady);
    };
  }, []);

  return (
    <div className={styles.preloader__section} ref>
      <div className={styles.preloader__content}>
        <div className={styles.wmlogo}>
          <WordmarkLogo />
        </div>
        <div className={styles.loading}>
          <div className={styles.loader} style={{width: `${currentValue}%`}}></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
