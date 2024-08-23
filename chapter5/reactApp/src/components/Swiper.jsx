import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css";

const SwiperJs = () => {
  return (
    <Swiper
      className="!h-[50vh]"
      modules={[Navigation]}
      loop={true}
      slidesPerView={1}
      spaceBetween={10}
      navigation
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
      <SwiperSlide>4</SwiperSlide>
    </Swiper>
  );
};

export default SwiperJs;
