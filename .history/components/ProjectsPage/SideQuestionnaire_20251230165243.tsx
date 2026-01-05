import React from 'react'
import BKR2 from '@/utils/ProjectLogos/BKR2'
import Plus from '@/utils/Icons/Plus'
import { useTranslation } from 'react-i18next'
import styles from "../../styles/ProjectsPage/sidequest.module.scss"

const SideQuestionnaire = () => {
  const {t} = useTranslation();

  return (
    <div className={styles.sq__section}>
      <div className={styles.sq__wrapper}>
        <div className={styles.sq__content}>
            <div className={styles.sqc__top}>
              <div>
                
              </div>
              <BKR2 />
              <p className={styles.st__p}>{t("ProjectsPage:sidetext")}</p>

            </div>
            <div className={styles.sqc__bottom}>

            </div>
        </div>
      </div>
      <div className={styles.sq__back}>

      </div>
    </div>
  )
}

export default SideQuestionnaire