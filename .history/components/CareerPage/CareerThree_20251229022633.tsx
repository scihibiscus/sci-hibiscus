import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import IMAGE from "../../public/images/heroimage.jpg";
import styles from "../../styles/CareerPage/careertwo.module.scss";

const CareerThree = () => {
  const { t } = useTranslation();
  return (
    <div className={`section ${styles.cth__section}`}>
      <div className={`container ${styles.cth__container}`}>
        <div className={styles.ctc__top}>
          <h3 className={styles.cth__h3}>{t("CareerPage:deposit")}</h3>
          <div className={styles.cth__left}>
            <p>{t("CareerPage:depone")}</p>
            <p>{t("CareerPage:deptwo")}</p>
            <ol className={styles.ol}>
              <li>CV</li>
              <li>{t("CareerPage:depthree")}</li>
              <li>{t("CareerPage:depfour")}</li>
            </ol>
          </div>
        </div>

        <div className={styles.ctc__bottom}>
          <div className={styles.cti__left}>
            <div className={styles.cti__image}>
              <Image
                fill
                quality={100}
                alt="Sci Hibiscus"
                src={IMAGE}
                placeholder="blur"
              />
            </div>
          </div>
          <div className={styles.cti__right}>
            <div className={styles.ctr__top}>
              <h3>{t("CareerPage:contact")}</h3>
              <div className={styles.ctt}>
                
              </div>
            </div>
            <div className={styles.ctr__bottom}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerThree;
