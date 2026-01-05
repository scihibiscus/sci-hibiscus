import React from 'react'
import IMAGE from "../../public/images/heroimage.jpg"
import Image from "next/image";
import styles from "../../styles/ReUsables/blogcard.module.scss"

const BlogCard = () => {
  return (
    <div className={styles.blogcard}>
      <div className={styles.bc__image}>
        <div className={styles.bc__img}>
          <Image
            fill
            placeholder="blur"
            alt="Sci Hibiscus"
            src={IMAGE}
            quality={100}
          />
        </div>
        <div className={styles.bc__gradient}></div>
        <div className={styles.bc__gradient2}></div>
      </div>
      <div className={styles.bc__content}>
        <div className={styles.bcc__top}>
          <span className={styles.bc__tag}>Guide</span>
          <span className={styles.bc__tag}>27 November 2025</span>
        </div>
        <div className={styles.bcc__bottom}>

        </div>
      </div>
    </div>
  )
}

export default BlogCard