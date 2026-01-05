import React from 'react'
import styles from "../../styles/ContactPage/contactsection.module.scss"

const ContactSection = () => {
  return (
    <div className={styles.cs__section}>
      <div className={`container ${styles.cs__container}`}>
        <div className={styles.cs__left}>
          <ContactBox/>
        </div>
        <div className={styles.cs__right}>

        </div>
      </div>
    </div>
  )
}

export default ContactSection