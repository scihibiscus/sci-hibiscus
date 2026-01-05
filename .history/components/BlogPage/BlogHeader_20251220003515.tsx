import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import IMAGE from "../../public/images/heroimage.jpg";
import styles from "../../styles/BlogPage/blogcontent.module.scss";

const BlogHeader = () => {
  //Translations
  const { t } = useTranslation();
  
  return (
    <div className={styles.bh__section}>
      <div className={`container ${styles.bh__container}`}>
        <div className={styles.bh__header}>
          <HiglightedSpan text="20 November 2025" />
          <h1 className={styles.bh__h1}></h1>
        </div>
        <div className={styles.bhi__wrapper}>
          <div className={styles.bh__image}>
            <Image
              fill
              quality={100}
              alt="Sci Hibiscus"
              src={IMAGE}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
