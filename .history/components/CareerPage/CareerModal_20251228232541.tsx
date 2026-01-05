import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/CareerPage/careersection.module.scss";

interface CareerInterface {
  title: string;
  pdf: string;
  task: string[];
  foundation: string[];
  offer: string[];
}
const CareerModal = ({ content }: { content: CareerInterface }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.modal__wrapper}>
      <div className={styles.modal__container}>
        <div className={styles.modal__content}>
          <p className=>{t("CareerPage:careerhead")}</p>
        </div>
      </div>
      <div className={styles.modal__back}></div>
    </div>
  );
};

export default CareerModal;
