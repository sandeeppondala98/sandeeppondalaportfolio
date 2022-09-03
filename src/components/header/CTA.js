import React from "react";
import CV from "../../assets/Resume_20220902.pdf";

const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a href={CV} download className="btn">
          Download CV
        </a>
        <a href="#contact" className="btn btn-primary">
          Lets Talk
        </a>
      </div>
    </div>
  );
};

export default CTA;
