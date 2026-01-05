import React from 'react'

const SwiperImages = () => {
  return (
    <Swiper
    className={styles.apc__swiper}
    {...swiperSettings}
    speed={800}
  >
    {projectsData.map((data, i) => (
      <SwiperSlide key={i} className={styles.cb__wrapper}>
        <ProjectWrap data={data} />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}

export default SwiperImages