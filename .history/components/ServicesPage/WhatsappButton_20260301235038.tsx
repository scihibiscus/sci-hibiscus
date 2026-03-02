import React from 'react'
import Whatsapp from '@/utils/Icons/Whatsapp'
import styles from "../../styles/ReUsables/button.module.scss";

const WhatsappButton = () => {
  return (
    <div className={styles.button} style={buttonStyle}>
      <span>{text}</span>
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
    </div>
  )
}

export default WhatsappButton