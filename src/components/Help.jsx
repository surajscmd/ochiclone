import React from "react";
import "../css/help.css";
import couple from "../assets/coupleimg.jpg";
import { ArrowUpRight } from "lucide-react";

const Help = () => {
  return (
    <div     className="help-section-wraper">
    <div className="help-section">
      {/* Intro Text */}
      <div className="intro-text">
        We craft category-defining presentations, brand identities, and digital
        experiences that <span className="underline">drive funding</span>,{" "}
        <span className="underline">sales</span>, and{" "}
        <span className="underline">market leadership</span>.
      </div>
      {/* About Section */}
      <div className="about-section">   
        <p className="about-title">What you can expect:</p>
        <div className="about-text ">
          <p>
            We don't just make slides. We shape strategy, storytelling, design
            scalable brand systems, and build presentations that make people
            say: "I want in!"
          </p>

          <p>
            Our clients make the world go round – from deep tech, aerospace and
            robotics to music festivals and Michelin-starred restaurants.
          </p>

          <p>
            Since 2019, we've been the go-to partner for Yahoo, Medallia, Uber,
            Lexus, Salience Labs, Trawa and AllThingsGo.
          </p>
        </div>
      </div>
      {/* Help Section */}
      <div className="help-container">
        <div className="help-content">
          <h1 className="help-title">How we can help:</h1>
          <button className="help-button">
            Read More <ArrowUpRight size={18} strokeWidth={2} />
          </button>
        </div>
        <div className="help-image-wrapper">
          <img className="he-img" src={couple} alt="Couple working" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Help;
