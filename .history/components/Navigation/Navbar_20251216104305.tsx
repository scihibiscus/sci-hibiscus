import React from 'react'
import WordmarkLogo from '@/utils/Icons/WordmarkLogo'
import styles from "../../styles/Navigation/navbar.module.scss"

const Navbar = () => {
  return (
    <>
    <header className={styles.navigation}>
      <div className={`container ${styles.nav__container}`}>
        <div className={styles.wordmark}>
          <WordmarkLogo />
        </div>
        <div className={styles.navcontent}>

        </div>
      </div>
    </header>
    </>
  )
}

export default Navbar