import React from "react";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/heroimage.jpg";
import Image from "next/image";
import Button from "./Button";
import styles from "../../styles/ReUsables/projectbox.module.scss";

const ProjectBox = ({image, smallText, largeText, subText}: {}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.project__box}>
      <div className={styles.pb__image}>
        <div className={styles.pb__img}>
          <Image
            fill
            placeholder="blur"
            alt="Sci Hibiscus"
            src={IMAGE}
            quality={100}
          />
        </div>
        <div className={styles.pb__gradient}></div>
      </div>
      <div className={styles.pb__content}>
        <div className={styles.pbc__left}>
          <span className={styles.pl__span}>DOUALA, BONAPRISO</span>
          <h3 className={styles.pl__h3}>BONAPRISO KALAPRO RESIDENCE</h3>
          <p className={styles.pl__p}>
            Prêts à emménager : des appartements naturels à Bonapriso
          </p>
        </div>
        <div className={styles.pbc__right}>
          <Button
            text={t("HomePage:herocta")}
            backColor="white"
            hoverColor="var(--gold)"
            textColor="var(--black)"
            thColor="white"
            iconColor="var(--black)"
            ihColor="white"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
