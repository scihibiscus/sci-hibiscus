import React from "react";
import Plus from "@/utils/Icons/Plus";
import Contact from "@/utils/Icons/Contact";
import Link from "next/link";
import NewsLetter from "@/utils/Icons/NewsLetter";
import SellHome from "@/utils/Icons/SellHome";
import styles from "../../styles/ReUsables/linkmodal.module.scss";

const LinkModal = () => {
  return (
    <div className={styles.linkmodal}>
      <div className={`container ${styles.lm__container}`}>
        <div className={styles.lm__wrapper}>
          <div className={styles.lm__modal}>
            <h3>Quick Links</h3>
            <div className={styles.lmm__content}>
              <Link href="/" className={styles.lmm}>
                <div>
                  <Contact />
                </div>
                <span>Contact us</span>
              </Link>
              <Link href="/" className={styles.lmm}>
                <div>
                  <SellHome />
                </div>
                <span>Offer land</span>
              </Link>
              <div className={styles.lmm}>
                <div>
                  < />
                </div>
                <span>Subscribe to newsletter</span>
              </div>
            </div>
          </div>
          <div className={styles.lm__button}>
            <span className={styles.lm__icon}>
              <Plus />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkModal;
