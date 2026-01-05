import React from "react";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/BlogPage/blogcontent.module.scss";

const MoreArticles = () => {
  //Translations
  const { t } = useTranslation();
  return (
    <div className={styles.ma__section}>
      <div className={`container ${styles.ma__container}`}>
        <div className={styles.ma__top}>
          <HiglightedSpan text={t("BlogPage:other")}/>
        </div>
        <div className={styles.ma__bottom}></div>
      </div>
    </div>
  );
};

export default MoreArticles;
