import React from "react";
import heroimg from "../assets/heroimg.jpg";
import { ArrowUpRight } from "lucide-react";
import "../css/hero.css";
import work from "../assets/download.svg";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.6"
      className="hero"
    >
      {/* Heading Section */}
      <div className="hero-heading">
        <h1 className="hero-title">We create</h1>
        
          <motion.div
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ ease: [0.85, 0, 0.15, 1], duration: 1.5 }}
            className="hero-image-text"
          >
            <img src={heroimg} alt="Hero" className="hero-img" />
         
          <h1 className="hero-title">eye-opening</h1>
         </motion.div>

        <h1 className="hero-title">presentations</h1>
      </div>

      {/* Subtext & Buttons */}
      <div className="hero-content">
        <p className="hero-subtext">Presentation and storytelling agency</p>
        <p className="hero-subtext">For innovation teams and global brands</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Start The Project</button>
          <button className="btn btn-icon">
            <ArrowUpRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>
      <div className="work-item">
        <img src={work} alt="Work showcase" className="work-img" />
      </div>
    </section>
  );
};

export default Hero;
