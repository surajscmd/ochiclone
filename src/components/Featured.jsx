import React from "react";
import "../css/featured.css";
import feature from "../assets/feature.png";
import featuretwo from "../assets/featuretwo.png";
import { motion, useAnimation } from "motion/react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  // handle hover start
  const handleHover = (index) => {
    cards[index].start({
      y: "0",
    });
  };

  // handle hover end
  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
  };

  return (
    <div className="featured-section">
      <div className="featured-header">
        <h1 className="featured-title">Featured Projects</h1>
      </div>
      <div className="featured-list">
        {/* First Project */}
        <div className="featured-item">
          <div className="featured-info">
            <div className="dot"></div>
            <p className="project-name">Salience Labs</p>
          </div>
          <motion.div
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={() => handleHoverEnd(0)}
            className="featured-image"
          >
            <h1 className="feature-name left">
              {"Fyde".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.34, 1.56, 0.64, 1], delay:index * 0.06 }}
                  className="feature-span"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img src={feature} alt="Salience Labs project" />
          </motion.div>
          <div className="service-tags">
            <p className="service-tag">Pitch Deck</p>
            <p className="service-tag">Company presentation</p>
          </div>
        </div>

        {/* Second Project */}
        <div className="featured-item">
          <div className="featured-info">
            <div className="dot"></div>
            <p className="project-name">Salience Labs</p>
          </div>
          <motion.div
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={() => handleHoverEnd(1)}
            className="featured-image"
          >
            <h1 className="feature-name right">
              {"Salience Labs".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.34, 1.56, 0.64, 1], delay:index * 0.06 }}
                  className="feature-span"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img src={featuretwo} alt="Salience Labs project 2" />
          </motion.div>
          <div className="service-tags">
            <p className="service-tag">Copy writing</p>
            <p className="service-tag">Slide Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
