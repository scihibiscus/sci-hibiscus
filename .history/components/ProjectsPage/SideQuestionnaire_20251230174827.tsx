"use client";

import React, { useState, useRef, useEffect } from "react";
import BKR2 from "@/utils/ProjectLogos/BKR2";
import Plus from "@/utils/Icons/Plus";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ProjectsPage/sidequest.module.scss";

const SideQuestionnaire = () => {
  const { t } = useTranslation();

  //UseStates to manage responses
  const [usage, setUsage] = useState<string>("");
  const usageData = [
    {
      name: t("ProjectsPage:personal"),
      value: "Usage personel",
    },
    {
      name: t("ProjectsPage:personal"),
      value: "Usage professionel",
    },
  ];
  const [rooms, setRooms] = useState<string>("");
  const roomsData = [
    {
      name: "1 - 2",
      value: "1 - 2",
    },
    {
      name: "3 - 4",
      value: "3 - 4",
    },
    {
      name: "5 +",
      value: "5 +",
    },
  ];
  const [area, setArea] = useState<string>("");
  const areaData = [
    {
      name: "< 50",
      value: "< 50",
    },
    {
      name: "50 - 75",
      value: "50 - 75",
    },
    {
      name: "75 - 100",
      value: "75 - 100",
    },
    {
      name: "100 >",
      value: "100 >",
    },
  ];

  return (
    <div className={styles.sq__section}>
      <div className={styles.sq__wrapper} data-lenis-prevent>
        <div className={styles.sq__content}>
          <div className={styles.sqc__top}>
            <div className={styles.logo}>
              <BKR2 />
            </div>
            <p className={styles.st__p}>{t("ProjectsPage:sidetext")}</p>
            <div className={styles.cancel}>
              <Plus />
            </div>
          </div>
          <div className={styles.sqc__bottom}>
            <div className={styles.section__one}>
              <div className={styles.so__head}>
                <p>{t("ProjectsPage:details")}</p>
              </div>

              {/* Usage Question*/}
              <div className={styles.so__question}>
                <p>{t("ProjectsPage:usage")}</p>
                <div className={styles.soq__wrap}>
                  {usageData.map((data, i) => (
                    <div
                      className={`${styles.s__button} ${
                        usage === data.value ? styles.active : ""
                      }`}
                      key={i}
                      onClick={() => setUsage(data.value)}
                    >
                      <span>{data.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rooms Question*/}
              <div className={styles.so__question}>
                <p>{t("ProjectsPage:roomsdesire")}</p>
                <div className={styles.soq__wrap}>
                  {roomsData.map((data, i) => (
                    <div
                      className={`${styles.s__button} ${
                        rooms === data.value ? styles.active : ""
                      }`}
                      key={i}
                      onClick={() => setRooms(data.value)}
                    >
                      <span>{data.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rooms Question*/}
              <div className={styles.so__question}>
                <p>{t("ProjectsPage:areadesire")}</p>
                <div className={styles.soq__wrap}>
                  {areaData.map((data, i) => (
                    <div
                      className={`${styles.s__button} ${
                        area === data.value ? styles.active : ""
                      }`}
                      key={i}
                      onClick={() => setArea(data.value)}
                    >
                      <span>{data.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rooms Question*/}
              <div className={styles.so__question}>
                <p>{t("ProjectsPage:bud")}</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sq__back}></div>
    </div>
  );
};

export default SideQuestionnaire;
