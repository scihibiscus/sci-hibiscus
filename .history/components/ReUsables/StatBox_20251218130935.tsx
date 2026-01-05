import React from 'react'
import styles from "../../styles/ReUsables/statbox.module.scss"

interface StatProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  name: string,
  text: string,
  number: string
}

const StatBox = ({data}: {data: StatProps}) => {
  return (
    <div className={styles.statbox}>
      <span className={styles.stat__span}>{data.number}</span>
      <div className={styles.sb__bottom}>
        <div className={styles.sb__icon}>
          <data.icon />
        </div>
        <h3 className={styles.sb__h3}>{data.name}</h3>
      </div>
    </div>
  )
}

export default StatBox