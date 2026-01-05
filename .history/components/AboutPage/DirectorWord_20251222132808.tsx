import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/heroimage.jpg";
import styles from "../../styles/AboutPage/directorword.module.scss";

const DirectorWord = () => {
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
          <div className={`container {}`}>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorWord;
