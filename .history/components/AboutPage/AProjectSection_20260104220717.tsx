import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import Button from "../ReUsables/Button";
import IMAGE from "../../public/images/heroimage.jpg";
import IMAGE2 from "../../public/images/image.jpg";
import IMAGE3 from "../../public/images/image5.jpg";
import IMAGE4 from "../../public/images/image8.jpg";
import IMAGE5 from "../../public/images/image10.jpg";
import styles from "../../styles/AboutPage/apsection.module.scss";

// Import Swiper styles
import "swiper/css";
import SwiperImages from "../ReUsables/SwiperImages";

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
          : `/fr/projets/projets-actuels/bonapriso-kalapro-residence`,
    },
    {
      name: "Bonapriso Kalapro Residence",
      image: IMAGE2,
      href:
        currentLocale === "en"
          ? `/en/projects/current-projects/bonapriso-kalapro-residence`
          : `/fr/projets/projets-actuels/bonapriso-kalapro-residence`,
    },
    {
      name: "Bonapriso Kalapro Residence",
      image: IMAGE3,
      href:
        currentLocale === "en"
          ? `/en/projects/current-projects/bonapriso-kalapro-residence`
          : `/fr/projets/projets-actuels/bonapriso-kalapro-residence`,
    },
    {
      name: "Bonapriso Kalapro Residence",
      image: IMAGE,
      href:
        currentLocale === "en"
          ? `/en/projects/current-projects/bonapriso-kalapro-residence`
          : `/fr/projets/projets-actuels/bonapriso-kalapro-residence`,
    },
    {
      name: "Bonapriso Kalapro Residence",
      image: IMAGE,
      href:
        currentLocale === "en"
          ? `/en/projects/current-projects/bonapriso-kalapro-residence`
          : `/fr/projets/projets-actuels/bonapriso-kalapro-residence`,
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
          <SwiperImages projectsData={projectsData} />
        </div>
        <div className={styles.apt__but}>
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
    </div>
  );
};

export default AProjectSection;
