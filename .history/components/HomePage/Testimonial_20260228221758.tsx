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

  const testimonialsData = [
    {
      image: IMAGE,
      name: "Amelia Doe",
      prject
    }
  ]

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
            <div className={styles.tc__button}>
              <Button
                text={t("HomePage:viewproject")}
                backColor="var(--black)"
                hoverColor="var(--gold)"
                textColor="white"
                thColor="white"
                iconColor="white"
                ihColor="white"
                link={
                  currentLocale === "en"
                    ? "/en/projects/references?ref=concept-bonapriso"
                    : "/fr/projets/references?ref=concept-bonapriso"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
