import React from 'react'
import styles from "../../styles/ReUsables/blogcard.module.scss"

const BlogCard = () => {
  return (
    <div className={styles.blogcard}>
      <div className={styles.pb__image}>
        <div className={styles.pb__img}>
          <Image
            fill
            placeholder="blur"
            alt="Sci Hibiscus"
            src={image}
            quality={100}
          />
        </div>
        <div className={styles.pb__gradient}></div>
      </div>
    </div>
  )
}

export default BlogCard