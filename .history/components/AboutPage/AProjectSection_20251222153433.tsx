import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import Button from "../ReUsables/Button";
import IMAGE from "../../public/images/heroimage.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSettings } from "@/utils";
import styles from "../../styles/AboutPage/apsection.module.scss";

// Import Swiper styles
import "swiper/css";

const AProjectSection = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const projectsData = [
    {
      name: "Bonapriso Kalapro Residence",
      image: IMAGE,
      href:
        currentLocale === "en"
          ? `/en/projects/current-projects/bonapriso-kalapro-residence`
          : `/en/projets/projets-actuels/bonapriso-kalapro-residence`,
    },
    {
      name: "Bonapriso Kalapro Residence",
      image: IMAGE,
      href:
        currentLocale === "en"
          ? `/en/projects/current-projects/bonapriso-kalapro-residence`
          : `/en/projets/projets-actuels/bonapriso-kalapro-residence`,
    },
    {
      name: "Bonapriso Kalapro Residence",
      image: IMAGE,
      href:
        currentLocale === "en"
          ? `/en/projects/current-projects/bonapriso-kalapro-residence`
          : `/en/projets/projets-actuels/bonapriso-kalapro-residence`,
    },
    {
      name: "Bonapriso Kalapro Residence",
      image: IMAGE,
      href:
        currentLocale === "en"
          ? `/en/projects/current-projects/bonapriso-kalapro-residence`
          : `/en/projets/projets-actuels/bonapriso-kalapro-residence`,
    },
    {
      name: "Bonapriso Kalapro Residence",
      image: IMAGE,
      href:
        currentLocale === "en"
          ? `/en/projects/current-projects/bonapriso-kalapro-residence`
          : `/en/projets/projets-actuels/bonapriso-kalapro-residence`,
    },
  ];

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
          <Swiper
            className={styles.apc__swiper}
            {...swiperSettings}
            speed={800}
          >
            {}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AProjectSection;
