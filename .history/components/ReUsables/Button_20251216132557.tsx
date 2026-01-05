import React from "react";
import Link from "next/link";
import Arrow from "@/utils/Icons/Arrow";
import styles from "../../styles/ReUsables/button.module.scss";

const Button = ({text, back}) => {
  return (
    <Link href="/" className={styles.button}>
      <span>Actuellement en vente</span>
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
    </Link>
  );
};

export default Button;
