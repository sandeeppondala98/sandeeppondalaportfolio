import React from "react";
import "./testimonials.css";
import data from "./testimonialdata";
//import "swiper/css/autoplay";

// import Swiper core and required modules
import { Pagination, Autoplay, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>complements from my</h5>
      <h2>Colleagues</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        breakpoints={{
          640: { slidesPerView: 2 },
        }}
        slidesPerView={1}
        //pagination={{ clickable: true }}
        pagination={{
          type: "progressbar",
        }}
        //autoplay={{ delay: 3000 }}
      >
        {data.map((d, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={d.avatar} alt="AvaTAR One" />
              </div>
              <h4 className="client__name">{d.name}</h4>
              {/* <h6>{d.designation}</h6> */}
              <small className="client__review">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore omnis aliquid ducimus id dolore corrupti tenetur
                pariatur doloremque porro quasi ea error aperiam dolor,
                assumenda odit eius, nam, cupiditate repellendus.
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
