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
        <div className={styles.}>

        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
