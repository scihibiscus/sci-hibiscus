import React from "react";
import { useTranslation } from "react-i18next";
import IMAGE from "../../public/images/heroimage.jpg"
import Button from "../ReUsables/Button";
import BlogCard from "../ReUsables/BlogCard";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/HomePage/blogsection.module.scss";

const BlogSection = () => {
  const { t } = useTranslation();

  const blogData = [
    {
      image: IMAGE,
      tag: "Guide",
      date: "27 November 2025",
      title: t("HomePage:blogtitle"),
      cta: t("HomePage:blogcta2"),
      link: "/"
    }
  ]
  return (
    <div className={`section ${styles.bs__section}`}>
      <div className={`container ${styles.bs__container}`}>
        <div className={styles.bs__top}>
          <div className={styles.bst__left}>
            <HiglightedSpan text={t("HomePage:project")} />
            <h1 className={styles.bs__h1}>{t("HomePage:projectport")}</h1>
          </div>
          <div className={styles.bs__button}>
            <Button
              text={t("HomePage:morecta")}
              backColor="var(--gold)"
              hoverColor="var(--black)"
              textColor="white"
              thColor="white"
              iconColor="white"
              ihColor="white"
              link="/"
            />
          </div>
        </div>
        <div className={styles.bs__bottom}>
          <BlogCard data={data}/>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
