import React from "react";
import Plus from "@/utils/Icons/Plus";
import Contact from "@/utils/Icons/Contact";
import NewsLetter from "@/utils/Icons/NewsLetter";
import SellHome from "@/utils/Icons/SellHome";
import styles from "../../styles/ReUsables/linkmodal.module.scss";

const LinkModal = () => {
  return (
    <div className={styles.linkmodal}>
      <div className={`container ${styles.lm__container}`}>
        <div className={styles.lm__wrapper}>
          <div className={styles.lm__modal}>
            <h3></h3>
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
