import React from 'react'
import WordmarkLogo from '@/utils/Icons/WordmarkLogo'
import styles from "../../styles/Navigation/navbar.module.scss"

const Navbar = () => {
  const navLinks = [
    {
      name: "Projets",
      link:
    }
  ]
  return (
    <>
    <header className={styles.navigation}>
      <div className={`container ${styles.nav__container}`}>
        <div className={styles.wordmark}>
          <WordmarkLogo />
        </div>
        <div className={styles.navcontent}>
          <div className={styles.navc__left}>

          </div>
          <div className={styles.navc__right}>

          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Navbar