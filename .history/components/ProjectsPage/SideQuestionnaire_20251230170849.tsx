"use client";

import React, {useState, useRef, useEffect} from "react";
import BKR2 from "@/utils/ProjectLogos/BKR2";
import Plus from "@/utils/Icons/Plus";
import { useTranslation } from "react-i18next";
import styles from "../../styles/ProjectsPage/sidequest.module.scss";

const SideQuestionnaire = () => {
  const { t } = useTranslation();

  //UseStates to manage responses
  const [usage, setUsage] = useState();
  const usageData = [
    {
      name: t("ProjectsPage:personal"),
      value: "Usage personel"
    },
    {
      name: t("ProjectsPage:personal"),
      value: "Usage professionel"
    }
  ]
  const [rooms, setRooms] = useState();
  const roomsData = [
    {
      name: "1 - 2",
      value: "1 - 2"
    },
    {
      name: "3 - 2",
      value: "1 - 2"
    },
    {
      name: "1 - 2",
      value: "1 - 2"
    }
  ]
  const [area, setArea] = useState();

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

          </div>
        </div>
      </div>
      <div className={styles.sq__back}></div>
    </div>
  );
};

export default SideQuestionnaire;
