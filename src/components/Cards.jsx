import React from "react";
import ochi from "../assets/card/logo001.svg";
import clutch from "../assets/card/logo002.svg";
import busness from "../assets/card/logo003.png";
import "../css/cards.css";
import { div } from "motion/react-client";

const Cards = () => {
  return (
    <div>
      <div className="cards-section">
        <div className="card-one">
          <img className="card-logo" src={ochi} alt="Ochi Logo" />
          <p className="card-year">&copy; 2019-2025</p>
        </div>

        <div className="card-twins">
          <div className="card">
            <img className="card-logo" src={clutch} alt="Clutch Logo" />
            <p className="card-year color">&copy; 2019-2025</p>
          </div>
          <div className="card">
            <img className="card-logo" src={busness} alt="Business Logo" />
            <p className="card-year color">&copy; 2019-2025</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Cards;
