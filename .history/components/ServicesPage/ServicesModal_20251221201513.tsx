import React from "react";
import Plus from "@/utils/Icons/Plus";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/BlogPage/servicessection.module.scss";


interface ContentInterface {
  name: t("ServicesPage:servfour"),
      text: t("ServicesPage:sftext"),
      modals: [
        {
          name: t("ServicesPage:sfone"),
          text: t("ServicesPage:sftwo"),
          points: [
            t("ServicesPage:sfthree"),
            t("ServicesPage:sffour"),
            t("ServicesPage:sffive"),
            t("ServicesPage:sfsix"),
            t("ServicesPage:sfseven"),
          ],
        },
        {
          name: t("ServicesPage:sfeight"),
          text: t("ServicesPage:sfnine"),
          points: [
            t("ServicesPage:sften"),
            t("ServicesPage:sfeleven"),
            t("ServicesPage:sftwelve"),
            t("ServicesPage:sfthirteen"),
            t("ServicesPage:sffourteen"),
          ],
        },
      ],
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
