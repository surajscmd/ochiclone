import React, { useEffect, useState } from "react";
import eye from "../assets/eye.jpg";
import "../css/eye.css";
import { motion } from "motion/react";

const Eyesection = () => {
  const [rotate, setRotate] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ✅ If mobile → show only image
  if (isMobile) {
    return (
      <div className="eye-section">
      <img className="eye-img" src={eye} alt="Eye illustration" />

      {/* Overlay with animation */}
      <motion.div
        className="eye-overlay"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="overlay-text">
          {/* Left Eye */}
          <motion.div
            className="neweye"
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="divider">|</div>
          {/* Right Eye */}
          <motion.div
            className="neweye"
            animate={{ x: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
    );
  }

  // ✅ Desktop → full animation
  return (
    <div className="eye-section">
      <div data-scroll data-scroll-speed="-0.8" className="eye-wrapper">
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
