import React from "react";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/heroimage.jpg";
import Button from "../ReUsables/Button";
import BlogCard from "../ReUsables/BlogCard";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/blogsection.module.scss";

const BlogSection = () => {
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
    <div className={`section ${styles.bs__section}`}>
      <div className={`container ${styles.bs__container}`}>
        <div className={styles.bs__top}>
          <div className={styles.bst__left}>
            <HiglightedSpan text={t("HomePage:blog")} />
            <h1 className={styles.bs__h1}>{t("HomePage:blogtext")}</h1>
          </div>
          <div className={styles.bs__button}>
            <Button
              text={t("HomePage:blogcta")}
              backColor="var(--gold)"
              hoverColor="var(--black)"
              textColor="white"
              thColor="white"
              iconColor="white"
              ihColor="white"
              link={`/${currentLocale}/blog`}
            />
          </div>
        </div>
        <div className={styles.bs__bottom}>
          {blogData.map((data, i) => (
            <BlogCard data={data} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
