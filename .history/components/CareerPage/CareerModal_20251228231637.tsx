import React from "react";
import styles from "../../styles/CareerPage/careersection.module.scss";

interface CareerInterface {
  title: string;
  pdf: string;
  task: string[];
  foundation: string[];
  offer: string[];
}
const CareerModal = ({ content }: { content: CareerInterface }) => {
  return (
    <div className={styles.modal__wrapper}>
      <div className={styles.modal__content}>

      </div>
      <div>
        
      </div>
    </div>
  );
};

export default CareerModal;
