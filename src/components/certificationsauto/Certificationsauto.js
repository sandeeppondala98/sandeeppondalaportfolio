import React, { useState } from "react";
import "./certificationsauto.css";
import data from "./testimonialsdata2";

import Avt1 from "../../assets/MachineLearning.jpg";
import Avt2 from "../../assets/FSEAccreditation0.jpg";
import Avt3 from "../../assets/FSEAccreditation1.jpg";
import Avt4 from "../../assets/MachineLearning.jpg";

//import "swiper/css/autoplay";

// import Swiper core and required modules
import {
  FreeMode,
  Pagination,
  Autoplay,
  Navigation,
  EffectCoverflow,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Certificationsauto = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        type: "progressbar",
      }}
      //autoplay={true}
      autoplay={{ delay: 3000 }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="certificatesauto__container"
    >
      {data.map((c, index) => {
        return (
          <SwiperSlide key={index} className="certificateauto__item">
            <img
              src={c.avatar}
              alt=""
              className="certificateauto__item-image"
            />

            <h2 className="clientauto__name">{c.name}</h2>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Certificationsauto;
