import React from 'react'
import styles from "../../styles/ReUsables/statbox.module.scss"

interface StatProps {
  icon: React.SVGProps<SVGSVGElement>,
  name: string,
  text: string,
  number: string
}

const StatBox = ({data}: {data: StatProps}) => {
  return (
    <div className={styles.statbox}>
      <span>{data.}</span>
      <div className={styles.}>

      </div>
    </div>
  )
}

export default StatBox