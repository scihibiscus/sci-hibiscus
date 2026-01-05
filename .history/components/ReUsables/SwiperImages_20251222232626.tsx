import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperSettings } from "@/utils";
import ProjectWrap from "./ProjectWrap";
// Import Swiper styles
import "swiper/css";
import { StaticImageData } from "next/image";


interface ProjectWrapProps {
  name: string;
  image: StaticImageData;
  href?: string
}

const SwiperImages = ({projectsData}: {}) => {
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
