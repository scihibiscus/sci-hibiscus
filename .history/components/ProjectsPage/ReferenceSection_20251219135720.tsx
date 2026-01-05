import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import IMAGE from "../../public/images/heroimage.jpg";
import styles from "../../styles/ProjectsPage/refsection.module.scss";

const ReferenceSection = () => {
  const { t } = useTranslation();

  const refContent = [
    {
      image: IMAGE,
      name: "Concept Bonapriso",
      content: [
        {
          name: t("ProjectsPage:location"),
          info: "Douala, Bonapriso",
        },
        {
          name: t("ProjectsPage:completion"),
          info: 2020,
        },
        {
          name: t("ProjectsPage:stay"),
          info: 15,
        },
        {
          name: t("ProjectsPage:business"),
          info: 5,
        },
      ],
    },
    {
      image: IMAGE,
      name: "Concept Bonapriso",
      content: [
        {
          name: t("ProjectsPage:location"),
          info: "Douala, Bonapriso",
        },
        {
          name: t("ProjectsPage:completion"),
          info: 2020,
        },
        {
          name: t("ProjectsPage:stay"),
          info: 15,
        },
        {
          name: t("ProjectsPage:business"),
          info: 5,
        },
      ],
    },
    {
      image: IMAGE,
      name: "Concept Bonapriso",
      content: [
        {
          name: t("ProjectsPage:location"),
          info: "Douala, Bonapriso",
        },
        {
          name: t("ProjectsPage:completion"),
          info: 2020,
        },
        {
          name: t("ProjectsPage:stay"),
          info: 15,
        },
        {
          name: t("ProjectsPage:business"),
          info: 5,
        },
      ],
    },
    {
      image: IMAGE,
      name: "Concept Bonapriso",
      content: [
        {
          name: t("ProjectsPage:location"),
          info: "Douala, Bonapriso",
        },
        {
          name: t("ProjectsPage:completion"),
          info: 2020,
        },
        {
          name: t("ProjectsPage:stay"),
          info: 15,
        },
        {
          name: t("ProjectsPage:business"),
          info: 5,
        },
      ],
    },
    {
      image: IMAGE,
      name: "Concept Bonapriso",
      content: [
        {
          name: t("ProjectsPage:location"),
          info: "Douala, Bonapriso",
        },
        {
          name: t("ProjectsPage:completion"),
          info: 2020,
        },
        {
          name: t("ProjectsPage:stay"),
          info: 15,
        },
        {
          name: t("ProjectsPage:business"),
          info: 5,
        },
      ],
    },
    {
      image: IMAGE,
      name: "Concept Bonapriso",
      content: [
        {
          name: t("ProjectsPage:location"),
          info: "Douala, Bonapriso",
        },
        {
          name: t("ProjectsPage:completion"),
          info: 2020,
        },
        {
          name: t("ProjectsPage:stay"),
          info: 15,
        },
        {
          name: t("ProjectsPage:business"),
          info: 5,
        },
      ],
    },
  ];
  return (
    <div className={styles.ref__section}>
      <div className={`container ${styles.ref__container}`}>
        {refContent.map((data, i) => (
          <div className={styles.ref__box} key={i}>
            <div className={styles.rb__left}>
              <h3 className={styles.rbl__name}>{data.name}</h3>
              <div className={styles.rbl__info}>{
                  data.content.map((info, i) => (
                    <div className={styles.rinfo} key={i}>
                      <span>{info.name}</span> : 
                    </div>
                  ))
                }</div>
            </div>
            <div className={styles.rb__right}>
              <div className={styles.rbr__image}>
                <Image fill quality={100} alt={data.name} src={data.image} placeholder="blur"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferenceSection;
