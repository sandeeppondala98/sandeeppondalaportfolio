import React, { useState } from "react";
import "./testimonials2.css";
//import data from "./testimonialsdata2";
import Toggle from "./Toggle";
import Certificationsauto from "../certificationsauto/Certificationsauto";
import Certificationsautodisabled from "../certificationsautodisabled/Certificationsautodiabled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials2 = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [toggled, setToggled] = useState(false);

  return (
    <section id="testimonials2" className="testimonials2">
      <h5>know about my</h5>
      <h2>Courses & Certifications</h2>
      <div className="container">
        <div className="toggle__container">
          <h5>Autoplay :</h5>
          <Toggle onChange={(event) => setToggled(event.target.checked)} />
        </div>
        {toggled ? <Certificationsauto /> : <Certificationsautodisabled />}
      </div>
    </section>
  );
};

export default Testimonials2;
