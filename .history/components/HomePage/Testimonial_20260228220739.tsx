import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import Image from "next/image";
import IMAGE from "../../public/images/image12.jpg";
import IMAGE2 from "../../public/images/profile.png";
import Button from "../ReUsables/Button";
import styles from "../../styles/HomePage/testimonial.module.scss";

const Testimonial = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className={`section ${styles.testi__section}`}>
      <div className={`container ${styles.testi__container}`}>
        <div className={styles.testi__top}>
          <HiglightedSpan text={t("HomePage:testimonial")} />
          <h1 className={styles.testi__h1}>{t("HomePage:testitext")}</h1>
        </div>
        <div className={styles.testi__bottom}>
          <div className={styles.testi__card}>
            <div className={styles.tc__top}>
              <div className={styles.tci__wrapper}>
                <Image
                  fill
                  quality={100}
                  placeholder="blur"
                  src={IMAGE}
                  alt="Profile"
                />
              </div>
              <div className={styles.testi__detail}>
                <span className={styles.owner__name}>Amelia Doe</span>
                <div className={styles.project}>
                  <span>Owner of project</span>
                  <span>"Concept Bonapriso"</span>
                </div>
              </div>
            </div>
            <p className={styles.tc__p}>"{t("HomePage:testimo")}"</p>
            <div className={styles.tc__button}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
