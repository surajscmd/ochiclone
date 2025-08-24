import React, { useEffect, useState } from "react";
import eye from "../assets/eye.jpg";
import "../css/eye.css";
const Eyesection = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      // Distance from center of screen
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      // Calculate angle (in degrees)
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) return null; // don’t render on mobile

  return (
    <div className="eye-section">
      <div data-scroll  data-scroll-speed={window.innerWidth > 768 ? "-0.8" : null} className="eye-wrapper">
        <img className="eye-img" src={eye} alt="Eye illustration" />
        <div className="eye-continer">
          <div data-scroll data-scroll-speed="0.1" className="eye">
            <div className="white">
              <div
                className="rectangle"
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                <div className="pupil"></div>
              </div>
              <p className="play-text">Play</p>
            </div>
          </div>
          <div data-scroll data-scroll-speed="0.1" className="eye">
            <div className="white">
              <div
                className="rectangle"
                style={{ transform: `rotate(${rotate}deg)` }}
              >
                <div className="pupil"></div>
              </div>
              <p className="play-text">Play</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyesection;
