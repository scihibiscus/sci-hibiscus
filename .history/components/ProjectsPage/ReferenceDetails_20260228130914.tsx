import React from "react";
import { StaticImageData } from "next/image";
import styles from "../../styles/ProjectsPage/refdetails.module.scss";

const ReferenceDetails = ({data}: {data: }) => {
  return (
    <div className={styles.refdetails}>
      <div className={styles.ref__wrapper}>
        <div className={styles.ref__content}>
          <div className={styles.reference__content}>
            <div className={styles.rb__left}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenceDetails;
