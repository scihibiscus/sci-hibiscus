import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSettings } from "@/utils";
import ProjectWrap from "../AboutPage/ProjectWrap";
import { StaticImageData } from "next/image";
import styles from "../../"


// Import Swiper styles
import "swiper/css";

interface ProjectWrapProps {
  name: string;
  image: StaticImageData;
  href?: string;
}

const SwiperImages = ({ projectsData }: { projectsData: ProjectWrapProps[ }) => {
  return (
    <Swiper className={styles.apc__swiper} {...swiperSettings} speed={800}>
      {projectsData.map((data, i) => (
        <SwiperSlide key={i} className={styles.cb__wrapper}>
          <ProjectWrap data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperImages;
