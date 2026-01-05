import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import IMAGE from "../../public/images/heroimage.jpg";
import styles from "../../styles/ReUsables/interestsection.module.scss";

const ContactSales = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.cs__section}>
      <div className={`container ${styles.cs__container}`}>
        <div className={styles.cs__wrapper}>
          <div className={styles.cs__left}>
            <div className={styles.cs__image}>
              <Image
                fill
                quality={100}
                src={IMAGE}
                alt="Sci Hibiscus"
                placeholder="blur"
              />
            </div>
          </div>
          <div className={styles.cs__right}>
            <div className={styles.csr__one}>
              <div className={styles.cso__top}>
                <h3 className={styles.cst__h3}>John Doe Kelly</h3>
                <span className={styles.position}>
                  {t("BuylandPage:position")}
                </span>
              </div>
              <div className={styles.cso__bottom}>
                <span>Phone : +237 2 22 22 24 37</span>
                <span>Email : johnkelly@sci-hibiscus.com</span>
              </div>
            </div>
            <p className={styles.csr__two}>{t("BuylandPage:discuss")}</p>
            <div className={styles.csr__three}>{t("BuylandPage:intsix")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSales;
