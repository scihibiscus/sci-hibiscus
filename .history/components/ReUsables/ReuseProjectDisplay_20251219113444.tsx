import React from 'react'
import { StaticImageData } from 'next/image';
import ProjectBox from './ProjectBox';
import styles from "../../styles/ReUsables/reuseprojetdisplay.module.scss"

interface ProjectProps {
  image: StaticImageData;
  smallText: string;
  largeText: string;
  subText?: string;
  linkName: string;
  linkHref: string;
}

const ReuseProjectDisplay = ({content}: {content: ProjectProps[]}) => {
  return (
    <div className={styles.rpd__section}>
      <div className={`container ${styles.rpd__container}`}>
        {
          content.map((data, i) => (
            <ProjectBox image={data.image} smallText={data.smallText} largeText={data.largeText} subText={data.subText} linkName={data.linkName} linkHref={data.linkHref} key={i}/>
          ))
        }
      </div>
    </div>
  )
}

export default ReuseProjectDisplay