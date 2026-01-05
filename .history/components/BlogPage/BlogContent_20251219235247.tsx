import React from "react";
import IMAGE from "../../public/images/heroimage.jpg";
import { useTranslation } from "react-i18next";
import BlogCard from "../ReUsables/BlogCard";
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

  const blogData = [
    {
      image: IMAGE,
      tag: "Guide",
      date: "27 Novembre 2025",
      title: t("HomePage:blogtitle"),
      cta: t("HomePage:blogcta2"),
      link:  `${}`,
    },
    {
      image: IMAGE,
      tag: "Guide",
      date: "27 Novembre 2025",
      title: t("HomePage:blogtitle2"),
      cta: t("HomePage:blogcta2"),
      link: "/",
    },
    {
      image: IMAGE,
      tag: "Guide",
      date: "27 Novembre 2025",
      title: t("HomePage:blogtitle"),
      cta: t("HomePage:blogcta2"),
      link: "/",
    },
    {
      image: IMAGE,
      tag: "Guide",
      date: "27 Novembre 2025",
      title: t("HomePage:blogtitle2"),
      cta: t("HomePage:blogcta2"),
      link: "/",
    },
    {
      image: IMAGE,
      tag: "Guide",
      date: "27 Novembre 2025",
      title: t("HomePage:blogtitle"),
      cta: t("HomePage:blogcta2"),
      link: "/",
    },
    {
      image: IMAGE,
      tag: "Guide",
      date: "27 Novembre 2025",
      title: t("HomePage:blogtitle2"),
      cta: t("HomePage:blogcta2"),
      link: "/",
    },
  ];

  return (
    <div className={styles.bc__section}>
      <div className={`container ${styles.bc__container}`}>
        <div className={styles.categories}>
          <span className={styles.cat__text}>{t("BlogPage:category")}</span>
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
        <div className={styles.bc__bottom}>
          {blogData.map((data, i) => (
            <BlogCard data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
