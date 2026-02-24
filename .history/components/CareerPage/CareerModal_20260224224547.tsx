import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Plus from "@/utils/Icons/Plus";
import IMAGE from "../../public/images/image10.jpg";
import Arrow from "@/utils/Icons/Arrow";
import Link from "next/link";
import { ModalAnim } from "@/animation";
import { motion } from "framer-motion";
import styles from "../../styles/CareerPage/careersection.module.scss";

interface CareerInterface {
  title: string;
  pdf: string;
  task?: string[];
  foundation?: string[];
  offer?: string[];
}
const CareerModal = ({
  content,
  modalOpen,
  setModalOpen,
}: {
  content: CareerInterface;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { t } = useTranslation();
  return (
    <div className={styles.modal__wrapper}>
      <motion.div
        variants={ModalAnim}
        animate={modalOpen ? "entry" : "initial"}
        exit="exit"
        className={styles.modal__container}
        data-lenis-prevent
      >
        <div className={styles.modal__content}>
          <div className={styles.mc__one}>
            <p className={styles.mc__p}>{t("CareerPage:careerhead")}</p>
            <h3 className={styles.mc__h3}>{content.title}</h3>
            <a className={styles.button} download href={content.pdf}>
              <span>{t("CareerPage:ctatwo")}</span>
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
            </a>
          </div>
          <div className={styles.mc__two}>
            <h3 className={styles.mc__h33}>{t("CareerPage:task")}</h3>
            <ul className={styles.task}>
              {content.task?.map((data, i) => (
                <li key={i} className={styles.li}>
                  {data}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.mc__two}>
            <h3 className={styles.mc__h33}>{t("CareerPage:fnd")}</h3>
            <ul className={styles.task}>
              {content.foundation?.map((data, i) => (
                <li key={i} className={styles.li}>
                  {data}
                </li>
              ))}
            </ul>
          </div>
          {content.offer && (
            <div className={styles.mc__two}>
              <h3 className={styles.mc__h33}>{t("CareerPage:off")}</h3>
              <ul className={styles.task}>
                {content.offer.map((data, i) => (
                  <li key={i} className={styles.li}>
                    {data}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className={styles.mc__three}>
            <h4 className={styles.mct__left}>{t("CareerPage:interest")}</h4>
            <div className={styles.mct__right}>
              <p>{t("CareerPage:interestwo")}</p>
              <Link href="mailto:contact@hibiscus.cm">contact@hibiscus.cm</Link>
            </div>
          </div>
          <div className={styles.mc__four}>
            <div className={styles.mcf__left}>
              <Image
                fill
                quality={100}
                alt="Sci Hibiscus"
                src={IMAGE}
                placeholder="blur"
              />
            </div>
            <div className={styles.mcf__right}>
              <div className={styles.mcr__top}>
                <h3>MBOUOPDA Emile</h3>
                <span>{t("CareerPage:position")}</span>
                <Link href="tel:+237699105056" className={styles.p__one}>
                  Phone : +237 699 10 50 56 / +237 677 30 92 82
                </Link>
                <Link href="mailto:emile.mbouopda@hibiscus.cm">
                  Email : emile.mbouopda@hibiscus.cm
                </Link>
              </div>
              <div className={styles.mcr__bottom}>
                SCI Hibiscus <br /> Hibiscus Center Park, Quartier Fouda
              </div>
            </div>
          </div>
          <div className={styles.cancel} onClick={() => setModalOpen(false)}>
            <Plus />
          </div>
        </div>
      </motion.div>
      <div className={styles.modal__back}></div>
    </div>
  );
};

export default CareerModal;
