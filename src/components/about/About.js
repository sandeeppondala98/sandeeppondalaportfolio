import React from "react";
import "./about.css";
//import ME from "../../assets/me-about.jpg";
import ME from "../../assets/sandy1.jpg";
import { FaAward } from "react-icons/fa";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <AiOutlineSafetyCertificate className="about__icon" />
              <h5>Certifications</h5>
              <small>9+ by establised organisations</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>

          <p>
            I work at Cognizant as a Full Stack Developer. I love to solve the
            problems and provide solutions. I just don't build a solution but
            design a solution which is Futuristic, Reliable, Handy, Low
            Maintenance, No complexity, Longstanding.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
