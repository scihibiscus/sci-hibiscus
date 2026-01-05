import React from 'react'
import styles from "../../styles/BlogPage/blogcontent.module.scss"

const BlogContent = () => {
  return (
    <div className={styles.bc__section}>
      <div className={`container ${styles.bc__container}`}>
        <div className={styles.categories}>
          <span></span>
          <div className={styles.cat__wrapper}>
            <div className={styles.cat__}>

            </div>
          </div>
        </div>
        <div className={styles.bc__bottom}>

        </div>
      </div>
    </div>
  )
}

export default BlogContent