import React from "react";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/quicksearch.module.scss";

const QuickSearch = () => {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const quickData = [
    {
      id: 1,
      category: "Transaction",
      question: "Souhaitez-vous louer ou acheter un espace immobilier ?",
      filters: [
        {
          name: "Louer",
          id: 1,
        },
        {
          name: "Acheter",
          id: 2,
        },
      ],
    },
    {
      id: 2,
      category: "TYPE D’ESPACE",
      question: "What kind of transaction are you looking for ?",
      filters: [
        {
          name: "Rent",
          id: 1,
        },
        {
          name: "Buy",
          id: 1,
        },
      ],
    },
    {
      id: 1,
      category: "Transaction",
      question: "What kind of transaction are you looking for ?",
      filters: [
        {
          name: "Rent",
          id: 1,
        },
        {
          name: "Buy",
          id: 1,
        },
      ],
    },
    {
      id: 1,
      category: "Transaction",
      question: "What kind of transaction are you looking for ?",
      filters: [
        {
          name: "Rent",
          id: 1,
        },
        {
          name: "Buy",
          id: 1,
        },
      ],
    },
    {
      id: 1,
      category: "Transaction",
      question: "What kind of transaction are you looking for ?",
      filters: [
        {
          name: "Rent",
          id: 1,
        },
        {
          name: "Buy",
          id: 1,
        },
      ],
    },
    {
      id: 1,
      category: "Transaction",
      question: "What kind of transaction are you looking for ?",
      filters: [
        {
          name: "Rent",
          id: 1,
        },
        {
          name: "Buy",
          id: 1,
        },
      ],
    }
  ];
  return (
    <div className={`section ${styles.qs__section}`}>
      <div className={`container ${styles.qs__container}`}>
        <div className={styles.qs__top}>
          <HiglightedSpan text={t("HomePage:quicksearch")} />
          <h1 className={styles.qs__h1}>{t("HomePage:findprop")}</h1>
        </div>
        <div className={styles.qs__bottom}>
          <div className={styles.qs__interior}>
            <div className={styles.qsi__top}>
              <div className={styles.qs__cat}>
                <span className={styles.category}>Transaction</span>
                <span className={styles.category}>Transaction</span>
                <span className={styles.category}>Transaction</span>
                <span className={styles.category}>Transaction</span>
                <span className={styles.category}>Transaction</span>
              </div>
            </div>
            <div className={styles.qsi__bottom}>
              <p>What kind of transaction are you looking for?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
