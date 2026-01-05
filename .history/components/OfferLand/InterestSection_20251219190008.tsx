import React from "react";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/heroimage.jpg";
import styles from "../../styles/ReUsables/interestsection.module.scss";

const InterestSection = () => {
  const { t } = useTranslation();

  const interestContent = [
    {
      name: t("BuylandPage:interest"),
      points: [
        t("BuylandPage:intone"),
        t("BuylandPage:inttwo"),
        t("BuylandPage:intthree"),
        t("BuylandPage:intfour"),
        t("BuylandPage:intfive"),
        t("BuylandPage:intsix"),
      ],
    },
    {
      name: t("BuylandPage:confidence"),
      points: [
        t("BuylandPage:intone"),
        t("BuylandPage:inttwo"),
        t("BuylandPage:intthree"),
        t("BuylandPage:intfour"),
        t("BuylandPage:intfive"),
        t("BuylandPage:intsix"),
      ],
    },
  ];
  return (
    <div className={styles.interest__section}>
      <div className={`container ${styles.interest__container}`}></div>
    </div>
  );
};

export default InterestSection;
