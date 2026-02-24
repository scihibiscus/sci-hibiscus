"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Arrow from "@/utils/Icons/Arrow";
import CareerModal from "./CareerModal";
import HiglightedSpan from "../ReUsables/HiglightedSpan";
import { AnimatePresence } from "framer-motion";
import styles from "../../styles/CareerPage/careersection.module.scss";

const CareerSection = () => {
  const { t } = useTranslation();

  const [modalOpen, setModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(0);

  const careerContent = [
    {
      title: t("CareerPage:cstitle"),
      pdf: "/docs/fiche_poste_ing.docx",
      task: [
        t("CareerPage:cs1"),
        t("CareerPage:cs2"),
        t("CareerPage:cs3"),
        t("CareerPage:cs4"),
        t("CareerPage:cs5"),
        t("CareerPage:cs6"),
        t("CareerPage:cs7"),
        t("CareerPage:cs8"),
      ],
      foundation: [
        t("CareerPage:cf1"),
        t("CareerPage:cf2"),
        t("CareerPage:cf3"),
        t("CareerPage:cf4"),
        t("CareerPage:cf5"),
        t("CareerPage:cf6"),
        t("CareerPage:cf7"),
      ],
      offer: [
        t("CareerPage:co1"),
        t("CareerPage:co2"),
        t("CareerPage:co3"),
        t("CareerPage:co4"),
        t("CareerPage:co5"),
        t("CareerPage:co6"),
        t("CareerPage:co7"),
        t("CareerPage:co8"),
      ],
    }
  ];

  const handleModalClick = (key: number) => {
    setModalOpen(true);
    setActiveModal(key);
  };

  return (
    <>
      <div className={styles.cs__section}>
        <div className={`container ${styles.cs__container}`}>
          <div className={styles.cs__top}>
            <HiglightedSpan text={t("CareerPage:offers")} />
            <h3 className={styles.cs__h3}>{t("CareerPage:oftwo")}</h3>
          </div>
          <div className={styles.cs__bottom}>
            {careerContent.map((data, i) => (
              <div className={styles.csb__line} key={i}>
                <div className={styles.csb__left}>
                  <p>{data.title}</p>
                </div>
                <div className={styles.csb__right}>
                  <div
                    className={styles.button}
                    onClick={() => handleModalClick(i)}
                  >
                    <span>{t("CareerPage:ctaone")}</span>
                    <div className={styles.bicon}>
                      <div className={styles.bicon__wrapper}>
                        <div className={styles.icons}>
                          <Arrow />
                        </div>
                        <div className={styles.icons}>
                          <Arrow />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {modalOpen && (
          <CareerModal
            modalOpen={modalOpen}
            content={careerContent[activeModal]}
            setModalOpen={setModalOpen}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CareerSection;
