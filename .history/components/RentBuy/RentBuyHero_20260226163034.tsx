import React from 'react'
import HiglightedSpan from "./HiglightedSpan";
import styles from "../../styles/RentBuyPage/rbhero.module.scss"

interface HeroProps {
  text: string;
  heading: string;
}

const RentBuyHero = ({
  content,
}: {
  content: HeroProps;
}) => {
  return (
    <div className={styles.rb__hero}>
      <div className={`container ${styles.rb__container}`}>

      </div>
    </div>
  )
}

export default RentBuyHero