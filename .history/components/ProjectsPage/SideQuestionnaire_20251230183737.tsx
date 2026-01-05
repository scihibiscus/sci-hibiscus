"use client";

import React, { useState, useRef, useEffect } from "react";
import BKR2 from "@/utils/ProjectLogos/BKR2";
import Plus from "@/utils/Icons/Plus";
import { useTranslation } from "react-i18next";
import FormInputTwo from "./FormInputTwo";
import styles from "../../styles/ProjectsPage/sidequest.module.scss";

const SideQuestionnaire = () => {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tickError, setTickError] = useState(false);
  const [activeBox, setActiveBox] = useState(false);

  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      setFocused(false);
    }
  }, [isSubmitting]);

  const handleFocus = () => {
    if (!isSubmitting) {
      // Skip onBlur during form reset/submission
      setFocused(true);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // If checkbox is not ticked, show error and stop submission
    if (!activeBox) {
      setTickError(true);
      return;
    }

    setTickError(false);
  };

  const toggleCheckbox = () => {
    const newActiveBox = !activeBox;
    setActiveBox(newActiveBox);

    // If the user ticks the box, remove any error
    if (newActiveBox) {
      setTickError(false);
    }
  };



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

  const budgetData = {
    id: 1,
    name: "budget",
    type: "number",
    placeholder: "ex. 120000000",
    errorMessage: t("ProjectsPage:budgeterror"),
    required: true,
    min: 300000,
    inputState: true,
  };

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
          <form
            className={styles.sqc__bottom}
            ref={formRef}
            onSubmit={handleSubmit}
          >
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
                <p>{t("ProjectsPage:budget")}</p>
                <FormInputTwo data={budgetData} isSubmitting={isSubmitting} />
              </div>
            </div>
            <div className={styles.section__one}>
              <div className={styles.so__head}>
                <p>{t("ProjectsPage:info")}</p>
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
                <p>{t("ProjectsPage:budget")}</p>
                <FormInputTwo data={budgetData} isSubmitting={isSubmitting} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.sq__back}></div>
    </div>
  );
};

export default SideQuestionnaire;
