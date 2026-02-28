"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useRouter, useSearchParams } from "next/navigation";
import IMAGE from "../../public/images/image6.jpg";
import ReferenceDetails from "./ReferenceDetails";
import styles from "../../styles/ProjectsPage/refsection.module.scss";
import RefImage from "./RefImage";

const ReferenceSection = () => {
  const { t } = useTranslation();

  const refContent = [
    {
      image: IMAGE,
      slug: "concept-bonapriso",
      name: "Concept Bonapriso",
      aboutproject: [t("ProjectsPage:aboutp1"), t("ProjectsPage:aboutp2")],
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
      gallery: [
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
      ],
    },
    {
      image: IMAGE,
      slug: "concept-bonaprisoo",
      name: "Concept Bonapriso",
      aboutproject: [t("ProjectsPage:aboutp1"), t("ProjectsPage:aboutp2")],
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
      gallery: [
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
      ],
    },
    {
      image: IMAGE,
      slug: "concept-bonaprisooo",
      name: "Concept Bonapriso",
      aboutproject: [t("ProjectsPage:aboutp1"), t("ProjectsPage:aboutp2")],
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
      gallery: [
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
      ],
    },
    {
      image: IMAGE,
      slug: "concept-bonaprisoooo",
      name: "Concept Bonapriso",
      aboutproject: [t("ProjectsPage:aboutp1"), t("ProjectsPage:aboutp2")],
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
      gallery: [
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
      ],
    },
    {
      image: IMAGE,
      slug: "concept-bonaprisooooo",
      name: "Concept Bonapriso",
      aboutproject: [t("ProjectsPage:aboutp1"), t("ProjectsPage:aboutp2")],
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
      gallery: [
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
      ],
    },
    {
      image: IMAGE,
      slug: "concept-bonaprisoooooo",
      name: "Concept Bonapriso",
      aboutproject: [t("ProjectsPage:aboutp1"), t("ProjectsPage:aboutp2")],
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
      gallery: [
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
        {
          type: "vid",
          src: "/video/video.mp4",
        },
        {
          type: "img",
          src: IMAGE,
        },
      ],
    },
  ];

  const searchParams = useSearchParams();
  const router = useRouter();

  const ref = searchParams.get("ref");

  // find the matching project
  const selectedData = refContent.find((item) => item.slug === ref);
  return (
    <>
      <div className={styles.ref__section}>
        <div className={`container ${styles.ref__container}`}>
          {refContent.map((data, i) => (
            <div className={styles.ref__box} key={i}>
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
              <RefImage alt={data.name} src={data.image} ref={data.slug} router={router} searchParams={searchParams} />
            </div>
          ))}
        </div>
      </div>
      {ref && selectedData && <ReferenceDetails data={selectedData} router={router} searchParams={searchParams} />}
    </>
  );
};

export default ReferenceSection;
