import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/heroimage.jpg"
import styles from "../../styles/BlogPage/blogcontent.module.scss"

const BlogHeader = () => {
  return (
    <div className={styles.bh__section}>
      <div className={`container ${styles.bh__container}`}>
        <div className={styles.bh__header}>

        </div>
        <div className={styles.bhi__wrapper}>
          <div className={styles.bh__image}>
            <Image fill quality={100} alt='Sci Hibiscus' src={IMAGE} placeholder=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHeader