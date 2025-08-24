import React from "react";
import "../css/featured.css";
import feature from "../assets/feature.png";
import featuretwo from "../assets/featuretwo.png";
import featurethree from "../assets/Fyde.png";
import featurefour from "../assets/soft.jpg";

import { motion, useAnimation } from "motion/react";

const projectsData = [
  {
    projectName: "All Things Go",
    displayName: "All Things Go",
    img: feature,
    services: ["Pitch Deck", "Company presentation"],
  },
  {
    projectName: "Salience Labs",
    displayName: "Salience Labs",
    img: featuretwo,
    services: ["Copy writing", "Slide Design"],
  },
  {
    projectName: "Fyde",
    displayName: "Fyde",
    img: featurefour,
    services: ["Investor Pitch", "Strategy Deck" ,"Aduit"],
  },
  {
    projectName: "SoftStart",
    displayName: "SoftStart",
    img: featurethree,
    services: ["Sale Deck", "Brand Guidelines"],
  },
];

const Featured = () => {
  const cards = projectsData.map(() => useAnimation());

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="featured-section">
      <div className="featured-header">
        <h1 className="featured-title">Featured Projects</h1>
      </div>
      <div className="featured-list">
        {projectsData.map((project, index) => (
          <div className="featured-item" key={index}>
            <div className="featured-info">
              <div className="dot"></div>
              <p className="project-name">{project.projectName}</p>
            </div>
            <motion.div
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHoverEnd(index)}
              className="featured-image"
            >
              <h1
                className={`feature-name ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                {project.displayName.split("").map((item, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    animate={cards[index]}
                    transition={{
                      ease: [0.34, 1.56, 0.64, 1],
                      delay: i * 0.06,
                    }}
                    className="feature-span"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img src={project.img} alt={`${project.projectName} project`} />
            </motion.div>
            <div className="service-tags">
              {project.services.map((service, i) => (
                <p className="service-tag" key={i}>
                  {service}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
