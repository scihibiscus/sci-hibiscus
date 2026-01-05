import React from "react";
import Link from "next/link";
import Imag
import styles from "../../styles/AboutPage/apsection.module.scss";
import { StaticImageData } from "next/image";

const ProjectWrap = ({data}: {data: {name: string, image: StaticImageData, href: string}}) => {
  return (
    <Link href={data.href} className={styles.content__box}>
      <div className={styles.cb__image}>
        <div className={styles.cbi__img}>
          <Image fill quality={100} src={data.image} alt={data.name} />
        </div>
      </div>
      <p className={styles.cb__p}>{data.name}</p>
    </Link>
  );
};

export default ProjectWrap;
