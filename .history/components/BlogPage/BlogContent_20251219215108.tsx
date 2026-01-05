import React from "react";
import { useTranslation } from "react-i18next";
import styles from "../../styles/BlogPage/blogcontent.module.scss";

const BlogContent = () => {
  //Translations
  const { t } = useTranslation();

  const categories = [
    t("BlogPage:all"),
    "Guide",
    "Conception",
    t("BlogPage:sustain"),
  ];

  return (
    <div className={styles.bc__section}>
      <div className={`container ${styles.bc__container}`}>
        <div className={styles.categories}>
          <span>{t("BlogPage:gu")}</span>
          <div className={styles.cat__wrapper}>
            <div className={styles.cat__slider}>
              {categories.map((data, i) => (
                <span className={styles.category} key={i}>
                  {data}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bc__bottom}></div>
      </div>
    </div>
  );
};

export default BlogContent;
