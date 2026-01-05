import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import IMAGE from "../../public/images/heroimage.jpg";
import Apostrophe from "@/utils/Icons/Apostrophe";
import styles from "../../styles/AboutPage/directorword.module.scss";

const DirectorWord = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.director__word}>
      <div className={styles.dw__wrapper}>
        <div className={styles.dw__image}>
          <div className={styles.dwimg}>
            <Image
              fill
              quality={100}
              placeholder="blur"
              alt="Sci Hibiscus"
              src={IMAGE}
            />
          </div>
          <div className={styles.dw__gradient}></div>
        </div>
        <div className={styles.dw__content}>
          <div className={`container ${styles.dw__container}`}>
            <div className={styles.dwc__content}>
              <div className={styles.apost}>
                <Apostrophe />
              </div>
              <div className={styles.wordings}>
                <p>{t("AboutPage:founderone")}</p>
                <p>{t("AboutPage:foundertwo")}</p>
                <p>{t("AboutPage:founderone")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorWord;
