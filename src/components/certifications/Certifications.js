import React from "react";
import "./certifications.css";
import data from "./certificatesdata";
//import "swiper/css/autoplay";

// import Swiper core and required modules
import { Pagination, Autoplay, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Certifications = () => {
  return (
    <section id="testimonials">
      <h5>Courses and Certifications</h5>
      <h2>courses completed</h2>
      <Swiper
        className="container Certifications__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        //pagination={{ clickable: true }}
        pagination={{
          type: "progressbar",
        }}
        //autoplay={{ delay: 3000 }}
      >
        {data.map((d, index) => {
          return (
            <SwiperSlide key={index} className="certifications__container">
              <div className="certifications__item">
                <div className="certifications__item-image">
                  <img
                    className="certifications__item-image1"
                    src={d.avatar}
                    alt="AvaTAR One"
                  />
                </div>
              </div>

              <h5 className="certifications__name">Ernest Achiever</h5>

              {/* <div className="certification__organization">
                <img
                  src={d.avatar}
                  alt="AvaTAR One"
                  className="certifications__image"
                />
              </div> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certifications;
