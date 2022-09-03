import React, { useState } from "react";
import "./certificationsautodisabled.css";
import data from "./testimonialsdata2";

//import "swiper/css/autoplay";

// import Swiper core and required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Certificationsautodisabled = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 certificatesautodisbledMainSwipper "
        pagination={{
          type: "progressbar",
        }}
        //autoplay={true}
      >
        {data.map((c, index) => {
          return (
            <SwiperSlide
              key={index}
              className="certificatesautodisbledMainSwipper__item"
            >
              <img
                src={c.avatar}
                alt=""
                className="certificatesautodisbledMainSwipper__item-image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper certificatesautodisbledSubSwipper"
      >
        {data.map((c, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={c.avatar}
                alt=""
                className="certificatesautodisbledSubSwipper__item-image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Certificationsautodisabled;
