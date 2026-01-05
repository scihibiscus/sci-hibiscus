import React from "react";
import HiglightedSpan from "./HiglightedSpan";
import Link from "next/link";
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
          <h1 className={styles.sc__h1}>{t("HomePage:promo")}</h1>
        </div>
        <div className={styles.sc__bottom}>
          <div className={styles.sb__left}>
            <Image fill placeholder="blur" alt="Sci Hibiscus" src={IMAGE} quality={100}/>
          </div>
          <div className={styles.sb__right}>
            <h3>{t("HomePage:promomain")}</h3>
            <p>{t("HomePage:promotext")}</p>
            <div className={styles.sbr__links}>
              {
                offers.map((data, i) => (
                  <Link key={i}></Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
