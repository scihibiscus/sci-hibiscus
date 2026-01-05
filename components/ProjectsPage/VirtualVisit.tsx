import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/image4.jpg";
import styles from "../../styles/ProjectsPage/virtualvisit.module.scss";

const VirtualVisit = () => {
  return (
    <div className={`section ${styles.vv__section}`}>
      <div className={`container ${styles.vv__container}`}>
        <div className={styles.vv__image}>
          <Image
            fill
            quality={100}
            alt="Sci Hibiscus"
            src={IMAGE}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default VirtualVisit;
