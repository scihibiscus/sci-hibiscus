import React from "react";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/heroimage.jpg";
import BlogCard from "../ReUsables/BlogCard";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/BlogPage/blogcontent.module.scss";

const MoreArticles = () => {
  //Translations
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const blogData = [
    {
      image: IMAGE,
      tag: "Guide",
      date: "27 Novembre 2025",
      title: t("HomePage:blogtitle"),
      cta: t("HomePage:blogcta2"),
      link: `/${currentLocale}/blog/how-to-invest-in-rental-property-in-2025`,
    },
    {
      image: IMAGE,
      tag: "Guide",
      date: "27 Novembre 2025",
      title: t("HomePage:blogtitle2"),
      cta: t("HomePage:blogcta2"),
      link: `/${currentLocale}/blog/why-entrust-your-property-to-professionals`,
    },
  ];

  return (
    <div className={styles.ma__section}>
      <div className={`container ${styles.ma__container}`}>
        <div className={styles.ma__top}>
          <HiglightedSpan text={t("BlogPage:other")} />
          <h3 className={styles.ma__h3}>{t("BlogPage:othermain")}</h3>
        </div>
        <div className={styles.ma__bottom}>
          {blogData.map((data, i) => (
            <BlogCard data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreArticles;
