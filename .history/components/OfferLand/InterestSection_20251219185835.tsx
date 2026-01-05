import React from "react";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/heroimage.jpg";
import styles from "../../styles/ReUsables/interestsection.module.scss";

const InterestSection = () => {
  const { t } = useTranslation();

  const interestContent = [{
    name: t("BuylandPage:interest")
  }];
  return (
    <div className={styles.interest__section}>
      <div className={`container ${styles.interest__container}`}></div>
    </div>
  );
};

export default InterestSection;
