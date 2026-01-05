import React from 'react'
import styles from "../../styles/CareerPage/careersection.module.scss";

interface CareerInterface {
  {
    title: t("CareerPage:hrtitle"),
    pdf: "/docs/plan.pdf",
    task: [
      t("CareerPage:hr1"),
      t("CareerPage:hr2"),
      t("CareerPage:hr3"),
      t("CareerPage:hr4"),
      t("CareerPage:hr5"),
      t("CareerPage:hr6"),
      t("CareerPage:hr7"),
      t("CareerPage:hr8"),
    ],
    foundation: [
      t("CareerPage:hrf1"),
      t("CareerPage:hrf2"),
      t("CareerPage:hrf3"),
      t("CareerPage:hrf4"),
      t("CareerPage:hrf5"),
      t("CareerPage:hrf6"),
      t("CareerPage:hrf7"),
      t("CareerPage:hrf8"),
    ],
    offer: string[]
}
const CareerModal = ({content}: {content: }) => {
  return (
    <div className={styles.modal__wrapper}>
      <div className={styles.modal__content}>

      </div>
    </div>
  )
}

export default CareerModal