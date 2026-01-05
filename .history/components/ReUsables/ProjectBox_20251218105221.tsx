import React from "react";
import IMAGE from "../../public/images/heroimage.jpg";
import Image from "next/image";
import Button from "./Button";
import styles from "../../styles/ReUsables/projectbox.module.scss";

const ProjectBox = () => {
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
        <div className={styles.pb__gradient}>

        </div>
      </div>
      <div className={styles.pb__content}>
        <div className={styles.pbc__left}>
          <span className={styles.}></span>
        </div>
        <div className={styles.pbc__right}>

        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
