import React from "react";
import "./portfolio.css";
import data from "./certifications";
//import image1 from "../../assets/portfolio1.jpg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>My Projects</h2>

      <div className="container portfolio__container">
        {data.map((c, index) => {
          return (
            <article key={index} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={c.image} alt="" />
              </div>
              <h3>{c.title}</h3>
              <p>({c.period})</p>
              <div className="portfolio__item-cta">
                {c.github !== null ? (
                  <a
                    href={c.github}
                    className="btn btn-primary"
                    target="_blank"
                  >
                    Github
                  </a>
                ) : (
                  <a href={c.demo} className="btn btn-NoAccess" target="_blank">
                    No Access
                  </a>
                )}
                {/* <p>(2020-present)</p> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
