import React from 'react'
import Arrow from '@/utils/Icons/Arrow'
import styles from "../../styles/ReUsables/button.module.scss"

const Button = () => {
  return (
    <div className={styles.button}>
      <span>Actuellement en vente</span>
      <div className={styles.bicon}>
        <div >

        </div>
      </div>
    </div>
  )
}

export default Button