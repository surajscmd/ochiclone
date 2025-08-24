import React from "react";
import { ArrowUpRight } from "lucide-react";
import "../css/ready.css";
import { motion } from "motion/react";
const Ready = () => {
  return (
    <section className="ready-section">
      <div className="ready-wrapper">
        <div className="ready-text">
          <p>Ready</p>
          <p>ToStart</p>
          <p>TheProject?</p>
        </div>
        <div className="ready-action">
          <button className="help-button">
            Start The Project <ArrowUpRight size={18} strokeWidth={2} />
          </button>
          <p className="or-text">OR</p>
          <div className="contact-box">
            <p className="contact-mail">Hello@ochiDesign</p>
            <div className="dot"></div>
          </div>
        </div>
        <div className="eye-continer">
          <div data-scroll data-scroll-speed="0.5" className="eye">
            <motion.div
              className="white moving-eye"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <p className="play-text">Move</p>
            </motion.div>
          </div>
          <div data-scroll data-scroll-speed="0.5" className="eye">
            <motion.div
              className="white moving-eye"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <p className="play-text">Here</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ready;
