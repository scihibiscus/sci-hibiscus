import React from 'react'
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
      
    </div>
  )
}

export default RentBuyHero