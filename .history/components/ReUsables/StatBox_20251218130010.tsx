import React from 'react'
import styles from "../../styles/ReUsables/statbox.module.scss"

interface StatProps {
  icon: React.SVGProps<SVGSVGElement>,
  name: string,
  text: string
}

const StatBox = ({data}: {data: }) => {
  return (
    <div className={styles.statbox}>
      <div className={styles.}>

      </div>
    </div>
  )
}

export default StatBox