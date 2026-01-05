import React from "react";
import HiglightedSpan from "./HiglightedSpan";
import Image from "next/image";
import IMAGE from "../../public/images/heroimage.jpg"
import { useTranslation } from "react-i18next";
import styles from "../../styles/ReUsables/specialoffer.module.scss";

const SpecialOffer = () => {
  const { t } = useTranslation();

  const offers = [
    {
      name: "Hibiscus Residence",
      link: "/"
    },
    {
      name: "Amos Residence",
      link: "/"
    },
    {
      name: "Pure Residence",
      link: "/"
    },
    {
      name: "Luxe Residence",
      link: "/"
    },
    {
      name: "Habi Residence",
      link: "/"
    }
  ]
  return (
    <div className={`section ${styles.special__section}`}>
      <div className={`container ${styles.special__container}`}>
        <div className={styles.sc__top}>
          <HiglightedSpan text="Promotion" />
          <h3 className={styles.sc__h3}>{t("HomePage:promo")}</h3>
        </div>
        <div className={styles.sc__bottom}>
          <div className={styles.sb__left}>
            <Image fill placeholder="blur" alt="Sci Hibiscus" src={IMAGE} quality={100}/>
          </div>
          <div className={styles.sb__right}>
            <h4>{t("HomePage:promo")}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
