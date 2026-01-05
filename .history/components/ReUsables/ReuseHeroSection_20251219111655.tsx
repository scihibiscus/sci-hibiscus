import React from "react";
import HiglightedSpan from "./HiglightedSpan";
import styles from "../../styles/ReUsables/reusehero.module.scss";


interface HeroProps {
  text: string,
  heading: string,
  heading2: string,
  
}
const ReuseHeroSection = ({content}: {content: }) => {
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
          <p className={styles.rcb__right}>
            Notre philosophie est notre plus grande motivation : chez SCI
            Hibiscus, nous établissons des standards en matière de conception,
            qualité et innovation, accordant une importance particulière au
            développement de propriétés durables et habitables. Que ce soit pour
            votre usage personnel ou pour investissement – laissez-vous inspirer
            par notre offre immobilière et profitez des avantages d'acheter
            directement auprès de nous en tant que promoteur : aucune commission
            ni frais d'intermédiaire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReuseHeroSection;
