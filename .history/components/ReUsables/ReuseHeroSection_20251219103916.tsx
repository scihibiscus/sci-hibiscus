import React from "react";
import HiglightedSpan from "./HiglightedSpan";
import styles from "../../styles/ReUsables/reusehero.module.scss";

const ReuseHeroSection = () => {
  return (
    <div className={styles.reuse__section}>
      <div className={`container ${styles.reuse__container}`}>
        <div className={styles.rc__top}>
          <HiglightedSpan text="Projets actuels" />
          <h3 className={styles.rc__h3}>Biens immobiliers en vente</h3>
        </div>
        <div className={styles.rc__bottom}>
          <p className={styles.rcb__left}>
            Découvrez nos projets immobiliers actuels dans les principales
            villes du Cameroun. Sans frais d'agence ni commission
            d'intermédiaire.
          </p>
          <p className={styles.rcb__right}></p>
        </div>
      </div>
    </div>
  );
};

export default ReuseHeroSection;
