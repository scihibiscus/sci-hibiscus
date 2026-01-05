import React from "react";
import Image from "next/image";
import Hig
import IMAGE from "../../public/images/heroimage.jpg";
import styles from "../../styles/ReUsables/imagehero.module.scss";

const ImageHeroSection = () => {
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
              <span>À PROPOS DE NOUS</span>
              <h3>NOUS SOMMES SCI HIBISCUS</h3>

            </div>
            <div className={styles.hsc__right}>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHeroSection;
