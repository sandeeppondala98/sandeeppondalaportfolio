import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "../testimonials2/testimonialsdata2";
import "./services.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

//import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
const Services = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section id="Services2" className="Services2 ">
      <h5>know about my</h5>
      <h2>Certificates 3</h2>
      <div className="container">
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
          className="container mySwiper2 servicesMainSwipper "
          pagination={{
            type: "progressbar",
          }}
          //autoplay={true}
        >
          {data.map((c, index) => {
            return (
              <SwiperSlide key={index} className="servicesMainSwipper__item">
                <img
                  src={c.avatar}
                  alt=""
                  className="servicesMainSwipper__item-image"
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
          className="container mySwiper"
        >
          {data.map((c, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  src={c.avatar}
                  alt=""
                  className="servicesSubSwipper__item-image"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
