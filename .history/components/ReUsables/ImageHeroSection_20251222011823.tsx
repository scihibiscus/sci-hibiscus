import React from "react";
import Image from "next/image";
import Arrow from "@/utils/Icons/Arrow";
import { useTranslation } from "react-i18next";
import HighlightText from "@/utils/HighlightText";
import IMAGE from "../../public/images/heroimage.jpg";
import styles from "../../styles/ReUsables/imagehero.module.scss";

const ImageHeroSection = ({span, header, specialText, button}: {span: string}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.ih__section}>
      <div className={styles.hero__image}>
        <div className={styles.h__image}>
          <Image
            fill
            quality={100}
            src={IMAGE}
            alt="Sci Hibiscus"
            placeholder="blur"
          />
        </div>
        <div className={styles.hero__gradient}></div>
      </div>
      <div className={styles.hero__content}>
        <div className={`container ${styles.hs__container}`}>
          <div className={styles.hs__content}>
            <div className={styles.hsc__left}>
              <span className={styles.hsc__span}>À PROPOS DE NOUS</span>
              <h3 className={styles.hsc__h3}>NOUS SOMMES SCI HIBISCUS</h3>
              <HighlightText
                text="En équipe. Avec détermination."
                words={["équipe.", "détermination."]}
              />
            </div>
            <div className={styles.hsc__right}>
              <div className={styles.button}>
                <span>{t("BuylandPage:getintouch")}</span>
                <div className={styles.bicon}>
                  <div className={styles.bicon__wrapper}>
                    <div className={styles.icons}>
                      <Arrow />
                    </div>
                    <div className={styles.icons}>
                      <Arrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHeroSection;
