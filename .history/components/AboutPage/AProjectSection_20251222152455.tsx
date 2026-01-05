import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import Button from "../ReUsables/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/AboutPage/apsection.module.scss";

const AProjectSection = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <div className={`section ${styles.ap__section}`}>
      <div className={`container ${styles.ap__container}`}>
        <div className={styles.apc__top}>
          <div className={styles.apt__left}>
            <HiglightedSpan text={t("AboutPage:projects")} />
            <h1 className={styles.ap__h1}>{t("AboutPage:projectdata")}</h1>
          </div>
          <div className={styles.apt__right}>
            <Button
              text={t("HomePage:morecta")}
              backColor="var(--gold)"
              hoverColor="var(--black)"
              textColor="white"
              thColor="white"
              iconColor="white"
              ihColor="white"
              link={
                currentLocale === "en"
                  ? `/${currentLocale}/projects/current-projects`
                  : `/${currentLocale}/projets/projets-actuels`
              }
            />
          </div>
        </div>
        <div className={styles.apc__bottom}>

        </div>
      </div>
    </div>
  );
};

export default AProjectSection;
