import React from 'react'
import styles from "../../styles/CareerPage/careersection.module.scss";

interface CareerInterface {
  {
    title: t("CareerPage:hrtitle"),
    pdf: "/docs/plan.pdf",
    task: string[],
    foundation: string[];
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