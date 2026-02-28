import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import styles from "../../styles/ProjectsPage/refdetails.module.scss";

interface RefProps {
  image: StaticImageData;
  name: string;
  content: {
    name: string;
    info: string | number;
  }[];
}
const ReferenceDetails = ({ data }: { data: RefProps }) => {
  return (
    <div className={styles.refdetails}>
      <div className={styles.ref__wrapper}>
        <div className={styles.ref__container}>
          <div className={styles.ref__top}>
            <h3 className={styles.rbl__name}>{data.name}</h3>
            <div className={styles.rbl__info}>
              {data.content.map((info, i) => (
                <div className={styles.rinfo} key={i}>
                  <span className={styles.rr}>{info.name}</span> :{" "}
                  <span className={styles.info}>{info.info}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.main__image}>
            <Image fill quality={100} alt={data.} />
          </div>
          <div className={styles.about__project}>
            <HiglightedSpan text="About the project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceDetails;
