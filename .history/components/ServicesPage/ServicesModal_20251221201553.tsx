import React from "react";
import Plus from "@/utils/Icons/Plus";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/BlogPage/servicessection.module.scss";


interface ContentInterface {
  name: string,
      text: string,
      modals: 
        {
          name: string,
          text: t("ServicesPage:sftwo"),
          points: [
            t("ServicesPage:sfthree"),
            t("ServicesPage:sffour"),
            t("ServicesPage:sffive"),
            t("ServicesPage:sfsix"),
            t("ServicesPage:sfseven"),
          ],
        }[],
}


const ServicesModal = ({content}: {content: }) => {
  return (
    <div className={styles.services__modal}>
      <div className={styles.sm__left}>

      </div>
      <div className={styles.sm__right}></div>
    </div>
  );
};

export default ServicesModal;
